import { AlertCircle } from "lucide-react";

export function ToolError({
  message,
  hint,
}: {
  message: string | null;
  hint?: string;
}) {
  if (!message) return null;
  return (
    <div
      role="alert"
      className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700"
    >
      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
      <div>
        <p className="font-medium">{message}</p>
        {hint ? <p className="mt-0.5 text-red-600/90">{hint}</p> : null}
      </div>
    </div>
  );
}
