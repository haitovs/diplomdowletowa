"use client";

import { useState, useTransition } from "react";
import { ConfirmModal } from "./ConfirmModal";
import { SpinnerIcon, TrashIcon } from "./icons";

interface DeleteButtonProps {
  action: () => Promise<void>;
  entityName: string;
  description?: string;
}

export function DeleteButton({ action, entityName, description }: DeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={isPending}
        className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-60"
      >
        {isPending ? (
          <SpinnerIcon className="w-4 h-4 animate-spin" />
        ) : (
          <TrashIcon className="w-4 h-4" />
        )}
        {isPending ? "Deleting..." : `Delete ${entityName}`}
      </button>

      <ConfirmModal
        open={open}
        title={`Delete ${entityName}?`}
        description={description || `This action is permanent and cannot be undone.`}
        confirmLabel={`Delete ${entityName}`}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
          startTransition(async () => {
            await action();
          });
        }}
      />
    </>
  );
}
