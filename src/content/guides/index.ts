import type { GuideContent } from "@/types/content";

import howToEditIphone from "@/content/guides/how-to-edit-pdf-on-iphone";
import howToEditAndroid from "@/content/guides/how-to-edit-pdf-on-android";
import howToCompress from "@/content/guides/how-to-compress-pdf";
import howToMerge from "@/content/guides/how-to-merge-pdf-files";
import howToSign from "@/content/guides/how-to-sign-pdf-on-phone";
import howToScan from "@/content/guides/how-to-scan-documents-to-pdf";
import bestForStudents from "@/content/guides/best-pdf-app-for-students";
import bestForBusiness from "@/content/guides/best-pdf-app-for-business";
import pdfVsDocx from "@/content/guides/pdf-vs-docx";
import howToProtect from "@/content/guides/how-to-protect-pdf-file";

export const GUIDES: Record<string, GuideContent> = {
  "how-to-edit-pdf-on-iphone": howToEditIphone,
  "how-to-edit-pdf-on-android": howToEditAndroid,
  "how-to-compress-pdf": howToCompress,
  "how-to-merge-pdf-files": howToMerge,
  "how-to-sign-pdf-on-phone": howToSign,
  "how-to-scan-documents-to-pdf": howToScan,
  "best-pdf-app-for-students": bestForStudents,
  "best-pdf-app-for-business": bestForBusiness,
  "pdf-vs-docx": pdfVsDocx,
  "how-to-protect-pdf-file": howToProtect,
};
