import type { UseCaseContent } from "@/types/content";

import freelancers from "@/content/use-cases/freelancers";
import remoteWork from "@/content/use-cases/remote-work";

/**
 * `students` and `business` were consolidated into the /pdf-for-students and
 * /pdf-for-business hubs in Aug 2026: the pairs targeted the same search
 * intent (near-identical titles and meta descriptions) and the hub was the
 * stronger page in every case. Both old URLs 308-redirect — see the redirects
 * block in next.config.ts.
 */
export const USE_CASES: Record<string, UseCaseContent> = {
  freelancers,
  "remote-work": remoteWork,
};
