"use client";

import { useFormStatus } from "react-dom";
import { SpinnerIcon } from "./icons";

interface SubmitButtonProps {
  label: string;
  pendingLabel?: string;
}

export function SubmitButton({ label, pendingLabel }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending && <SpinnerIcon className="w-4 h-4 animate-spin" />}
      {pending ? (pendingLabel || label) : label}
    </button>
  );
}
