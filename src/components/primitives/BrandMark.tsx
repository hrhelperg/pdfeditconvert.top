import { cn } from "@/lib/cn";

export function BrandMark({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/pdf-editor-mark.svg"
      alt=""
      width={size}
      height={size}
      className={cn("rounded-xl shadow-[var(--shadow-brand)]", className)}
      loading="eager"
      decoding="async"
    />
  );
}
