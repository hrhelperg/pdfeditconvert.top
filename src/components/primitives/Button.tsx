import { cn } from "@/lib/cn";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-[var(--shadow-brand)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-px bg-gradient-to-br from-[--color-brand] to-[--color-brand-2]",
  secondary:
    "bg-[--color-surface] text-[--color-ink] border border-[--color-border] hover:border-[--color-brand] hover:text-[--color-brand]",
  ghost: "text-[--color-ink] hover:text-[--color-brand]",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button(
  props: Common & React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant = "primary", size = "md", className, children, ...rest } =
    props;
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink(
  props: Common & { href: string; external?: boolean; ariaLabel?: string },
) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    href,
    external,
    ariaLabel,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
