import type { GuideContent } from "@/types/content";

// Existing guides
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

// Group 1 — conversion
import convertPdfToWord from "@/content/guides/how-to-convert-pdf-to-word";
import convertWordToPdf from "@/content/guides/how-to-convert-word-to-pdf";
import convertJpgToPdf from "@/content/guides/how-to-convert-jpg-to-pdf";
import convertPngToPdf from "@/content/guides/how-to-convert-png-to-pdf";
import convertWebpToPdf from "@/content/guides/how-to-convert-webp-to-pdf";
import convertPdfToJpg from "@/content/guides/how-to-convert-pdf-to-jpg";
import convertPdfToPng from "@/content/guides/how-to-convert-pdf-to-png";
import convertPhotosIphone from "@/content/guides/how-to-convert-photos-to-pdf-on-iphone";
import convertPhotosAndroid from "@/content/guides/how-to-convert-photos-to-pdf-on-android";
import convertScanned from "@/content/guides/how-to-convert-scanned-documents-to-pdf";

// Group 2 — editing & organization
import splitPdf from "@/content/guides/how-to-split-pdf-files";
import extractPages from "@/content/guides/how-to-extract-pages-from-pdf";
import reorderPages from "@/content/guides/how-to-reorder-pdf-pages";
import rotatePages from "@/content/guides/how-to-rotate-pdf-pages";
import addWatermark from "@/content/guides/how-to-add-watermark-to-pdf";
import removeUnwanted from "@/content/guides/how-to-remove-unwanted-pages-from-pdf";
import organizeFiles from "@/content/guides/how-to-organize-pdf-files";
import prepareBeforeSharing from "@/content/guides/how-to-prepare-pdf-before-sharing";
import fixSideways from "@/content/guides/how-to-fix-sideways-pdf-pages";

// Group 3 — compression & file size
import compressOnline from "@/content/guides/how-to-compress-pdf-online";
import reduceForEmail from "@/content/guides/how-to-reduce-pdf-file-size-for-email";
import smallerIphone from "@/content/guides/how-to-make-pdf-smaller-on-iphone";
import smallerAndroid from "@/content/guides/how-to-make-pdf-smaller-on-android";
import whyLarge from "@/content/guides/why-is-my-pdf-so-large";
import withoutTooMuchQuality from "@/content/guides/compress-pdf-without-losing-too-much-quality";
import compressScanned from "@/content/guides/how-to-compress-scanned-pdf";
import bestCompressionSettings from "@/content/guides/best-pdf-compression-settings";
import sendLargeFiles from "@/content/guides/how-to-send-large-pdf-files";
import reduceBeforeUploading from "@/content/guides/how-to-reduce-pdf-size-before-uploading";

// Group 4 — mobile workflows
import signIphone from "@/content/guides/how-to-sign-pdf-on-iphone";
import signAndroid from "@/content/guides/how-to-sign-pdf-on-android";
import fillForms from "@/content/guides/how-to-fill-pdf-forms-on-phone";
import annotateMobile from "@/content/guides/how-to-annotate-pdf-on-mobile";
import managePhone from "@/content/guides/how-to-manage-pdfs-on-phone";
import createFromCamera from "@/content/guides/how-to-create-pdf-from-camera";
import sharePhone from "@/content/guides/how-to-share-pdf-from-phone";

// Group 5 — use cases & comparisons
import toolsForStudents from "@/content/guides/best-pdf-tools-for-students";
import workflowFreelancers from "@/content/guides/best-pdf-workflow-for-freelancers";
import toolsSmallBusiness from "@/content/guides/best-pdf-tools-for-small-business";
import pdfVsJpgDocuments from "@/content/guides/pdf-vs-jpg-for-documents";
import whenPdfInsteadDocx from "@/content/guides/when-to-use-pdf-instead-of-docx";
import browserVsUpload from "@/content/guides/browser-based-pdf-tools-vs-upload-tools";
import privacyFirst from "@/content/guides/privacy-first-pdf-tools";
import commonMistakes from "@/content/guides/common-pdf-mistakes-to-avoid";

// Wave 2 — Group 1: problem & fix
import whyWontOpen from "@/content/guides/why-wont-my-pdf-open";
import whyBlank from "@/content/guides/why-is-my-pdf-blank";
import whyCantEdit from "@/content/guides/why-cant-i-edit-a-pdf";
import whyBlurry from "@/content/guides/why-is-my-pdf-blurry";
import fixCorrupted from "@/content/guides/how-to-fix-a-corrupted-pdf";
import fixPrinting from "@/content/guides/how-to-fix-pdf-printing-issues";
import fixUploadErrors from "@/content/guides/how-to-fix-pdf-upload-errors";
import fixFormatting from "@/content/guides/how-to-fix-pdf-formatting-problems";
import fixScannedQuality from "@/content/guides/how-to-fix-scanned-pdf-quality";
import fixFontIssues from "@/content/guides/how-to-fix-pdf-font-issues";

// Wave 2 — Group 2: business & office workflow
import toolsRemoteWork from "@/content/guides/best-pdf-tools-for-remote-work";
import toolsOfficeDocuments from "@/content/guides/best-pdf-tools-for-office-documents";
import workflowTeams from "@/content/guides/best-pdf-workflow-for-teams";
import shareWithClients from "@/content/guides/how-to-share-pdfs-with-clients";
import prepareForBusiness from "@/content/guides/how-to-prepare-pdf-for-business-use";
import sendContractsAsPdf from "@/content/guides/how-to-send-contracts-as-pdf";
import organizeWorkDocs from "@/content/guides/how-to-organize-work-documents-as-pdf";
import manageInvoices from "@/content/guides/how-to-manage-invoices-as-pdf";
import createClientReady from "@/content/guides/how-to-create-client-ready-pdf-files";
import workflowSmallBusiness from "@/content/guides/pdf-workflows-for-small-business";
import workflowConsultants from "@/content/guides/pdf-workflows-for-consultants";
import workflowAgencies from "@/content/guides/pdf-workflows-for-agencies";

// Wave 2 — Group 3: student & education workflow
import submitHomework from "@/content/guides/how-to-submit-homework-as-pdf";
import scanNotes from "@/content/guides/how-to-scan-notes-to-pdf";
import compressForSchool from "@/content/guides/how-to-compress-pdf-for-school-portals";
import convertLectureNotes from "@/content/guides/how-to-convert-lecture-notes-to-pdf";
import organizeStudyMaterials from "@/content/guides/how-to-organize-study-materials-as-pdf";
import shareStudyNotes from "@/content/guides/how-to-share-study-notes-as-pdf";
import editClassDocs from "@/content/guides/how-to-edit-class-documents-as-pdf";
import workflowUniversity from "@/content/guides/pdf-workflow-for-university-students";
import createStudyPdfs from "@/content/guides/how-to-create-digital-study-pdfs";

// Wave 2 — Group 4: privacy & trust
import areOnlineSafe from "@/content/guides/are-online-pdf-tools-safe";
import protectSensitive from "@/content/guides/how-to-protect-sensitive-pdf-files";
import sharePrivately from "@/content/guides/how-to-share-pdf-files-privately";
import privacyFirstWorkflows from "@/content/guides/privacy-first-document-workflows";
import localProcessingExplained from "@/content/guides/local-browser-pdf-processing-explained";
import doToolsStore from "@/content/guides/do-online-pdf-tools-store-files";
import avoidUploading from "@/content/guides/how-to-avoid-uploading-sensitive-documents";
import securePdfBusiness from "@/content/guides/secure-pdf-workflows-for-business";
import browserBasedBenefits from "@/content/guides/browser-based-document-processing-benefits";

export const GUIDES: Record<string, GuideContent> = {
  // Existing
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

  // Group 1 — conversion
  "how-to-convert-pdf-to-word": convertPdfToWord,
  "how-to-convert-word-to-pdf": convertWordToPdf,
  "how-to-convert-jpg-to-pdf": convertJpgToPdf,
  "how-to-convert-png-to-pdf": convertPngToPdf,
  "how-to-convert-webp-to-pdf": convertWebpToPdf,
  "how-to-convert-pdf-to-jpg": convertPdfToJpg,
  "how-to-convert-pdf-to-png": convertPdfToPng,
  "how-to-convert-photos-to-pdf-on-iphone": convertPhotosIphone,
  "how-to-convert-photos-to-pdf-on-android": convertPhotosAndroid,
  "how-to-convert-scanned-documents-to-pdf": convertScanned,

  // Group 2 — editing & organization
  "how-to-split-pdf-files": splitPdf,
  "how-to-extract-pages-from-pdf": extractPages,
  "how-to-reorder-pdf-pages": reorderPages,
  "how-to-rotate-pdf-pages": rotatePages,
  "how-to-add-watermark-to-pdf": addWatermark,
  "how-to-remove-unwanted-pages-from-pdf": removeUnwanted,
  "how-to-organize-pdf-files": organizeFiles,
  "how-to-prepare-pdf-before-sharing": prepareBeforeSharing,
  "how-to-fix-sideways-pdf-pages": fixSideways,

  // Group 3 — compression & file size
  "how-to-compress-pdf-online": compressOnline,
  "how-to-reduce-pdf-file-size-for-email": reduceForEmail,
  "how-to-make-pdf-smaller-on-iphone": smallerIphone,
  "how-to-make-pdf-smaller-on-android": smallerAndroid,
  "why-is-my-pdf-so-large": whyLarge,
  "compress-pdf-without-losing-too-much-quality": withoutTooMuchQuality,
  "how-to-compress-scanned-pdf": compressScanned,
  "best-pdf-compression-settings": bestCompressionSettings,
  "how-to-send-large-pdf-files": sendLargeFiles,
  "how-to-reduce-pdf-size-before-uploading": reduceBeforeUploading,

  // Group 4 — mobile workflows
  "how-to-sign-pdf-on-iphone": signIphone,
  "how-to-sign-pdf-on-android": signAndroid,
  "how-to-fill-pdf-forms-on-phone": fillForms,
  "how-to-annotate-pdf-on-mobile": annotateMobile,
  "how-to-manage-pdfs-on-phone": managePhone,
  "how-to-create-pdf-from-camera": createFromCamera,
  "how-to-share-pdf-from-phone": sharePhone,

  // Group 5 — use cases & comparisons
  "best-pdf-tools-for-students": toolsForStudents,
  "best-pdf-workflow-for-freelancers": workflowFreelancers,
  "best-pdf-tools-for-small-business": toolsSmallBusiness,
  "pdf-vs-jpg-for-documents": pdfVsJpgDocuments,
  "when-to-use-pdf-instead-of-docx": whenPdfInsteadDocx,
  "browser-based-pdf-tools-vs-upload-tools": browserVsUpload,
  "privacy-first-pdf-tools": privacyFirst,
  "common-pdf-mistakes-to-avoid": commonMistakes,

  // Wave 2 — Group 1: problem & fix
  "why-wont-my-pdf-open": whyWontOpen,
  "why-is-my-pdf-blank": whyBlank,
  "why-cant-i-edit-a-pdf": whyCantEdit,
  "why-is-my-pdf-blurry": whyBlurry,
  "how-to-fix-a-corrupted-pdf": fixCorrupted,
  "how-to-fix-pdf-printing-issues": fixPrinting,
  "how-to-fix-pdf-upload-errors": fixUploadErrors,
  "how-to-fix-pdf-formatting-problems": fixFormatting,
  "how-to-fix-scanned-pdf-quality": fixScannedQuality,
  "how-to-fix-pdf-font-issues": fixFontIssues,

  // Wave 2 — Group 2: business & office workflow
  "best-pdf-tools-for-remote-work": toolsRemoteWork,
  "best-pdf-tools-for-office-documents": toolsOfficeDocuments,
  "best-pdf-workflow-for-teams": workflowTeams,
  "how-to-share-pdfs-with-clients": shareWithClients,
  "how-to-prepare-pdf-for-business-use": prepareForBusiness,
  "how-to-send-contracts-as-pdf": sendContractsAsPdf,
  "how-to-organize-work-documents-as-pdf": organizeWorkDocs,
  "how-to-manage-invoices-as-pdf": manageInvoices,
  "how-to-create-client-ready-pdf-files": createClientReady,
  "pdf-workflows-for-small-business": workflowSmallBusiness,
  "pdf-workflows-for-consultants": workflowConsultants,
  "pdf-workflows-for-agencies": workflowAgencies,

  // Wave 2 — Group 3: student & education workflow
  "how-to-submit-homework-as-pdf": submitHomework,
  "how-to-scan-notes-to-pdf": scanNotes,
  "how-to-compress-pdf-for-school-portals": compressForSchool,
  "how-to-convert-lecture-notes-to-pdf": convertLectureNotes,
  "how-to-organize-study-materials-as-pdf": organizeStudyMaterials,
  "how-to-share-study-notes-as-pdf": shareStudyNotes,
  "how-to-edit-class-documents-as-pdf": editClassDocs,
  "pdf-workflow-for-university-students": workflowUniversity,
  "how-to-create-digital-study-pdfs": createStudyPdfs,

  // Wave 2 — Group 4: privacy & trust
  "are-online-pdf-tools-safe": areOnlineSafe,
  "how-to-protect-sensitive-pdf-files": protectSensitive,
  "how-to-share-pdf-files-privately": sharePrivately,
  "privacy-first-document-workflows": privacyFirstWorkflows,
  "local-browser-pdf-processing-explained": localProcessingExplained,
  "do-online-pdf-tools-store-files": doToolsStore,
  "how-to-avoid-uploading-sensitive-documents": avoidUploading,
  "secure-pdf-workflows-for-business": securePdfBusiness,
  "browser-based-document-processing-benefits": browserBasedBenefits,
};
