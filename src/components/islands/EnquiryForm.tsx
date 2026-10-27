import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown, CircleAlert, Info } from "lucide-react";
import {
  type ChangeEvent,
  type FocusEvent,
  type SubmitEvent,
  type ReactNode,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import type { EnquiryFieldCopy, EnquiryFormCopy } from "../../data/contact";

/**
 * Business Enquiry Form, the site's one React island (AD-04, AD-12,
 * COMPONENT_INVENTORY.md §7), hydrated with `client:visible`.
 *
 * Validates on submit, then again as each field is left (§7.2). On errors,
 * focus moves to the first invalid field and a summary is announced
 * through a live region; each message is linked to its field with
 * `aria-describedby` (AD-15, QA-50, QA-70, QA-71).
 *
 * No form service is connected yet (D-16, C-18). A valid submit sends
 * nothing: it shows the not-connected notice and keeps the entries. The
 * entries stay in this component's state only; they are never stored,
 * logged or sent. Sending, success and failure states arrive with the
 * service.
 *
 * The submit button is disabled until hydration, so the server-rendered
 * form can never submit natively and put personal details in a URL.
 * Submissions that fill the hidden spam trap are dropped (QA-75).
 *
 * Messages (summary, field errors, notice) fade in with a small drop and
 * fade out, using Framer Motion (AD-06, D-15); under reduced motion they
 * appear and go at once. Only opacity and transform animate (§14).
 */

type FieldName = keyof EnquiryFormCopy["fields"];
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

/** Focus and summary order; matches the order on screen */
const fieldOrder: FieldName[] = [
  "name",
  "company",
  "email",
  "phone",
  "enquiryType",
  "category",
  "country",
  "requirements",
];

const emptyValues: Values = {
  name: "",
  company: "",
  email: "",
  phone: "",
  enquiryType: "",
  category: "",
  country: "",
  requirements: "",
};

const maxLength: Record<FieldName, number> = {
  name: 100,
  company: 150,
  email: 254,
  phone: 30,
  enquiryType: 50,
  category: 50,
  country: 100,
  requirements: 2000,
};

const requirementsMinLength = 20;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[\d\s()-]+$/;

function validate(name: FieldName, raw: string): string | undefined {
  const value = raw.trim();
  switch (name) {
    case "name":
      return value ? undefined : "Enter your full name.";
    case "email":
      if (!value) return "Enter your business email.";
      return emailPattern.test(value)
        ? undefined
        : "Enter an email address in the format name@company.com.";
    case "phone":
      if (!value) return undefined;
      return phonePattern.test(value) && value.replace(/\D/g, "").length >= 7
        ? undefined
        : "Enter a phone number using digits, spaces and an optional + country code.";
    case "enquiryType":
      return value ? undefined : "Select an enquiry type.";
    case "category":
      return value ? undefined : "Select a product category.";
    case "requirements":
      if (!value) return "Tell us about your product requirements.";
      return value.length >= requirementsMinLength
        ? undefined
        : `Add a little more detail: at least ${requirementsMinLength} characters.`;
    default:
      return undefined;
  }
}

const noopSubscribe = () => () => {};

/** DESIGN_SYSTEM.md §14: --duration-fast, --ease-out and the 4 px menu drop */
const messageMotion = {
  initial: { opacity: 0, y: -4 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
} as const;

/** Motion props for a message; none under reduced motion */
function useMessageMotion() {
  return useReducedMotion() ? {} : messageMotion;
}

const fieldClass =
  "block w-full rounded-md border bg-surface px-4 text-body text-text transition-colors duration-(--duration-fast) ease-out placeholder:text-text-muted focus:border-primary";

interface FieldProps {
  name: FieldName;
  copy: EnquiryFieldCopy;
  error?: string;
  className?: string;
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
    className: string;
  }) => ReactNode;
}

function Field({ name, copy, error, className, children }: FieldProps) {
  const id = `enquiry-${name}`;
  const helpId = copy.help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;
  const messageProps = useMessageMotion();

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-button font-medium text-ink">
        {copy.label}
        {copy.required && (
          <span className="font-normal text-text-muted"> (required)</span>
        )}
      </label>
      <div className="mt-2">
        {children({
          id,
          "aria-invalid": Boolean(error),
          "aria-describedby": describedBy,
          className: `${fieldClass} ${error ? "border-error" : "border-field-border"}`,
        })}
      </div>
      {copy.help && (
        <p id={helpId} className="mt-2 text-small text-text-muted">
          {copy.help}
        </p>
      )}
      <AnimatePresence>
        {error && (
          <m.p
            key="error"
            id={errorId}
            className="mt-2 flex gap-2 text-small font-medium text-error"
            {...messageProps}
          >
            <CircleAlert
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Props {
  copy: EnquiryFormCopy;
}

export default function EnquiryForm({ copy }: Props) {
  const { fields } = copy;
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [summary, setSummary] = useState("");
  const [notConnected, setNotConnected] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const messageProps = useMessageMotion();

  // False in the server render, true once hydrated
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const name = event.target.name as FieldName;
    const { value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setNotConnected(false);
    // Clears a message as soon as the entry is fixed
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validate(name, value) }));
    }
  }

  function handleBlur(
    event: FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    if (!attempted) return;
    const name = event.target.name as FieldName;
    setErrors((current) => ({
      ...current,
      [name]: validate(name, event.target.value),
    }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypotRef.current?.value) return;

    const nextErrors: Errors = {};
    for (const name of fieldOrder) {
      const error = validate(name, values[name]);
      if (error) nextErrors[name] = error;
    }
    const invalid = fieldOrder.filter((name) => nextErrors[name]);

    setAttempted(true);
    setErrors(nextErrors);

    if (invalid.length > 0) {
      setNotConnected(false);
      const labels = invalid.map((name) => fields[name].label).join(", ");
      setSummary(
        invalid.length === 1
          ? `There is 1 problem with your enquiry: ${labels}.`
          : `There are ${invalid.length} problems with your enquiry: ${labels}.`,
      );
      formRef.current
        ?.querySelector<HTMLElement>(`#enquiry-${invalid[0]}`)
        ?.focus();
      return;
    }

    setSummary("");
    setNotConnected(true);
  }

  const inputProps = (name: FieldName) => ({
    name,
    value: values[name],
    maxLength: maxLength[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  const selectField = (name: "enquiryType" | "category") => (
    <Field name={name} copy={fields[name]} error={errors[name]}>
      {(props) => (
        <div className="relative">
          <select
            {...props}
            {...inputProps(name)}
            required
            className={`${props.className} min-h-12 cursor-pointer appearance-none pr-11`}
          >
            <option value="">{copy.selectPrompt}</option>
            {fields[name].options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-primary"
            aria-hidden="true"
          />
        </div>
      )}
    </Field>
  );

  return (
    // Loads only the DOM animation features; `m` instead of `motion` (strict)
    <LazyMotion features={domAnimation} strict>
      <form
        ref={formRef}
        method="post"
        noValidate
        onSubmit={handleSubmit}
        aria-describedby="enquiry-required-note"
      >
        <p id="enquiry-required-note" className="text-small text-text-muted">
          {copy.requiredNote}
        </p>

        {/* Mounted from the start so screen readers announce changes */}
        <div aria-live="polite">
          <AnimatePresence>
            {summary && (
              <m.p
                key="summary"
                className="mt-6 flex gap-3 rounded-md border border-error bg-surface p-4 font-medium text-error"
                {...messageProps}
              >
                <CircleAlert
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                {summary}
              </m.p>
            )}
          </AnimatePresence>
        </div>

        <fieldset className="mt-8">
          <legend className="text-h4 font-semibold text-primary">
            {copy.groups.details}
          </legend>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <Field name="name" copy={fields.name} error={errors.name}>
              {(props) => (
                <input
                  {...props}
                  {...inputProps("name")}
                  type="text"
                  autoComplete="name"
                  required
                  className={`${props.className} min-h-12`}
                />
              )}
            </Field>

            <Field name="company" copy={fields.company} error={errors.company}>
              {(props) => (
                <input
                  {...props}
                  {...inputProps("company")}
                  type="text"
                  autoComplete="organization"
                  className={`${props.className} min-h-12`}
                />
              )}
            </Field>

            <Field name="email" copy={fields.email} error={errors.email}>
              {(props) => (
                <input
                  {...props}
                  {...inputProps("email")}
                  type="email"
                  autoComplete="email"
                  spellCheck={false}
                  required
                  className={`${props.className} min-h-12`}
                />
              )}
            </Field>

            <Field name="phone" copy={fields.phone} error={errors.phone}>
              {(props) => (
                <input
                  {...props}
                  {...inputProps("phone")}
                  type="tel"
                  autoComplete="tel"
                  className={`${props.className} min-h-12`}
                />
              )}
            </Field>
          </div>
        </fieldset>

        <fieldset className="mt-10 border-t border-line pt-8">
          <legend className="float-left w-full text-h4 font-semibold text-primary">
            {copy.groups.enquiry}
          </legend>
          <div className="clear-left grid gap-6 pt-5 md:grid-cols-2">
            {selectField("enquiryType")}
            {selectField("category")}

            <Field
              name="country"
              copy={fields.country}
              error={errors.country}
              className="md:col-span-2"
            >
              {(props) => (
                <input
                  {...props}
                  {...inputProps("country")}
                  type="text"
                  autoComplete="country-name"
                  className={`${props.className} min-h-12`}
                />
              )}
            </Field>

            <Field
              name="requirements"
              copy={fields.requirements}
              error={errors.requirements}
              className="md:col-span-2"
            >
              {(props) => (
                <textarea
                  {...props}
                  {...inputProps("requirements")}
                  rows={6}
                  required
                  placeholder={fields.requirements.placeholder}
                  className={`${props.className} min-h-36 py-3`}
                />
              )}
            </Field>
          </div>
        </fieldset>

        {/* Spam trap: hidden from people and assistive technology (D-20) */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] size-px overflow-hidden"
        >
          <label htmlFor="enquiry-website">Website</label>
          <input
            ref={honeypotRef}
            id="enquiry-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[44ch] text-small text-text-muted">
            {copy.privacyNote}
          </p>
          <button
            type="submit"
            disabled={!hydrated}
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-7 text-body font-semibold whitespace-nowrap text-white transition-colors duration-(--duration-fast) ease-out hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {copy.submitLabel}
          </button>
        </div>

        <div role="status">
          <AnimatePresence>
            {notConnected && (
              <m.p
                key="not-connected"
                className="mt-6 flex gap-3 rounded-md bg-bg-alt p-4 text-text"
                {...messageProps}
              >
                <Info
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {copy.notConnected}
              </m.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </LazyMotion>
  );
}
