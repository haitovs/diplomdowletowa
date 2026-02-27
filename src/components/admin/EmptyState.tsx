import Link from "next/link";
import { PlusIcon } from "./icons";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-6">
      {icon && (
        <div className="mx-auto w-16 h-16 rounded-full bg-turkmen-green/5 flex items-center justify-center mb-4">
          <div className="text-turkmen-green/40">{icon}</div>
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">{description}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-2 btn btn-primary"
        >
          <PlusIcon className="w-4 h-4" />
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
