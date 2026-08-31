import type { UseCaseContent } from "@/types/content";

import freelancers from "@/content/pt-BR/use-cases/freelancers";
import remoteWork from "@/content/pt-BR/use-cases/remote-work";

/**
 * Brazilian Portuguese use-case pages, keyed by the English slug.
 *
 * `students` and `business` are absent in both languages: they were
 * consolidated into the /pdf-for-students and /pdf-for-business hubs in
 * Aug 2026 and their English URLs 308-redirect. Translating a page that
 * redirects would create a Portuguese URL with no English counterpart.
 */
export const USE_CASES_PT_BR: Record<string, UseCaseContent> = {
  freelancers,
  "remote-work": remoteWork,
};
