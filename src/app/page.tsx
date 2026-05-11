import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

const route = getRoute("/");
export const metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function HomePage() {
  return (
    <div className="py-20 text-center">
      <p className="text-sm text-[--color-muted]">
        Homepage scaffold — full content lands shortly.
      </p>
    </div>
  );
}
