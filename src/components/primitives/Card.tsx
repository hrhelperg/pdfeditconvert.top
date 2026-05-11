import { cn } from "@/lib/cn";
import Link from "next/link";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[--color-surface] border border-[--color-border]",
        "shadow-[var(--shadow-card)] p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-2xl bg-[--color-surface] border border-[--color-border]",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        "transition-shadow p-6 group",
        className,
      )}
    >
      {children}
    </Link>
  );
}
