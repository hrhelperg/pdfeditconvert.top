import { AlertCircle } from "lucide-react";

export function ToolError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
      <span>{message}</span>
    </p>
  );
}
