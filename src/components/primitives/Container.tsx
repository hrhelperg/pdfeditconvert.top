import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "lg",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "lg" && "max-w-[1152px]",
        size === "md" && "max-w-[880px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
