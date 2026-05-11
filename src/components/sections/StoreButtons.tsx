import { cn } from "@/lib/cn";

const APP_STORE = "https://apps.apple.com/app/id6747341672";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share";

type Size = "md" | "lg";

const sizes: Record<Size, { width: number; height: number }> = {
  md: { width: 156, height: 52 },
  lg: { width: 180, height: 60 },
};

export function StoreButtons({
  size = "md",
  align = "left",
  className,
  appStoreLabel = "Download PDF Editor on the App Store",
  googlePlayLabel = "Get PDF Editor on Google Play",
}: {
  size?: Size;
  align?: "left" | "center";
  className?: string;
  appStoreLabel?: string;
  googlePlayLabel?: string;
}) {
  const { width, height } = sizes[size];
  const playWidth = Math.round(width * (200 / 180));
  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <a
        href={APP_STORE}
        target="_blank"
        rel="noopener"
        aria-label={appStoreLabel}
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] rounded-xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/app-store-badge.svg"
          alt=""
          width={width}
          height={height}
          loading="eager"
          decoding="async"
        />
      </a>
      <a
        href={GOOGLE_PLAY}
        target="_blank"
        rel="noopener"
        aria-label={googlePlayLabel}
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] rounded-xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/google-play-badge.svg"
          alt=""
          width={playWidth}
          height={height}
          loading="eager"
          decoding="async"
        />
      </a>
    </div>
  );
}
