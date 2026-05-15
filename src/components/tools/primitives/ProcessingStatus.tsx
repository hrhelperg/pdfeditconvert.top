import { Loader2 } from "lucide-react";

export function ProcessingStatus({ message }: { message: string | null }) {
  return (
    <p
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="flex items-center gap-2 text-sm text-[--color-muted] min-h-[1.25rem]"
    >
      {message ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-[--color-brand]" aria-hidden />
          <span>{message}</span>
        </>
      ) : null}
    </p>
  );
}
