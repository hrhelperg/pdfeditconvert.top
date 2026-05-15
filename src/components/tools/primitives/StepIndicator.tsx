import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

export function StepIndicator({
  steps,
  current,
  className,
}: {
  steps: readonly [string, string, string];
  current: 0 | 1 | 2;
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "flex items-center gap-2 sm:gap-4 text-xs sm:text-sm",
        className,
      )}
    >
      {steps.map((label, i) => {
        const state =
          i < current ? "done" : i === current ? "active" : "todo";
        return (
          <li
            key={label}
            aria-current={state === "active" ? "step" : undefined}
            className="flex items-center gap-2 min-w-0"
          >
            <span
              aria-hidden
              className={cn(
                "h-8 w-8 sm:h-9 sm:w-9 grid place-items-center rounded-full font-bold text-xs sm:text-sm shrink-0 transition-colors",
                state === "done" &&
                  "text-white shadow-[var(--shadow-brand)]",
                state === "active" &&
                  "text-white shadow-[var(--shadow-brand)] ring-4 ring-[--color-brand-soft]",
                state === "todo" &&
                  "bg-[--color-surface] text-[--color-muted] border border-[--color-border]",
              )}
              style={
                state === "done" || state === "active"
                  ? { background: "var(--gradient-brand)" }
                  : undefined
              }
            >
              {state === "done" ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span
              className={cn(
                "font-semibold truncate",
                state === "todo"
                  ? "text-[--color-muted]"
                  : "text-[--color-ink]",
              )}
            >
              {label}
            </span>
            {i < steps.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "hidden sm:block h-px w-6 md:w-10 transition-colors",
                  state === "done"
                    ? "bg-[--color-brand]"
                    : "bg-[--color-border]",
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
