import type { UseCaseContent } from "@/types/content";

import freelancers from "@/content/ar/use-cases/freelancers";
import remoteWork from "@/content/ar/use-cases/remote-work";

/**
 * Arabic use-case pages, keyed by the English slug.
 *
 * `students` and `business` are absent in both languages: they were
 * consolidated into the /pdf-for-students and /pdf-for-business hubs in
 * Aug 2026 and their English URLs 308-redirect. Translating a page that
 * redirects would create an Arabic URL with no English counterpart.
 */
export const USE_CASES_AR: Record<string, UseCaseContent> = {
  freelancers,
  "remote-work": remoteWork,
};
