import type { UseCaseContent } from "@/types/content";

import freelancers from "@/content/ja/use-cases/freelancers";
import remoteWork from "@/content/ja/use-cases/remote-work";

/**
 * Japanese use-case pages, keyed by the English slug.
 *
 * `students` and `business` are absent in both languages: they were
 * consolidated into the /pdf-for-students and /pdf-for-business hubs in
 * Aug 2026 and their English URLs 308-redirect. Translating a page that
 * redirects would create a Japanese URL with no English counterpart.
 */
export const USE_CASES_JA: Record<string, UseCaseContent> = {
  freelancers,
  "remote-work": remoteWork,
};
