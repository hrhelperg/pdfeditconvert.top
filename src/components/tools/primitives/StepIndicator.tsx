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
                "h-6 w-6 sm:h-7 sm:w-7 grid place-items-center rounded-full font-bold text-[11px] sm:text-xs shrink-0",
                state === "done" &&
                  "bg-[--color-brand] text-white",
                state === "active" &&
                  "bg-[--color-brand] text-white shadow-[var(--shadow-brand)]",
                state === "todo" &&
                  "bg-[--color-bg] text-[--color-muted] border border-[--color-border]",
              )}
            >
              {state === "done" ? <Check className="h-3.5 w-3.5" /> : i + 1}
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
                className="hidden sm:block h-px w-6 md:w-10 bg-[--color-border]"
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
