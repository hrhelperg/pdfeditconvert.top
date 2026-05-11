import type { UseCaseContent } from "@/types/content";

import students from "@/content/use-cases/students";
import business from "@/content/use-cases/business";
import freelancers from "@/content/use-cases/freelancers";
import remoteWork from "@/content/use-cases/remote-work";

export const USE_CASES: Record<string, UseCaseContent> = {
  students,
  business,
  freelancers,
  "remote-work": remoteWork,
};
