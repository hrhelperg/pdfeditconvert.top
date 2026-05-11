import { cn } from "@/lib/cn";

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("prose", className)}>{children}</div>;
}
