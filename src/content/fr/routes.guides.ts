import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * French route manifest for the guide library.
 *
 * Slugs follow the way French users actually phrase the query rather than a
 * literal rendering of the English slug: "comment-compresser-un-pdf",
 * "pourquoi-mon-pdf-est-si-lourd", "pdf-vers-word". Titles carry the
 * question or the task in the words a French reader would type into Google.
 * Terminology policy: docs/localization/fr-terminology.md.
 */
export const FR_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "guides/comment-modifier-un-pdf-sur-iphone",
    title: "Comment modifier un PDF sur iPhone (guide 2026)",
    description:
      "Corrigez le texte, ajoutez des images et réorganisez les pages d'un PDF directement sur iPhone. Marche à suivre complète avec l'application PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "guides/comment-modifier-un-pdf-sur-android",
    title: "Comment modifier un PDF sur Android (guide 2026)",
    description:
      "Modifiez vos PDF sur Android : changer le texte, insérer des pages et signer un document. Instructions claires, étape par étape, avec l'application PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "guides/comment-compresser-un-pdf",
    title: "Comment compresser un PDF sans perdre en qualité",
    description:
      "Réduisez la taille d'un PDF pour l'envoyer par e-mail ou le déposer sur un portail, sans sacrifier la lisibilité. Tutoriel pensé pour le mobile avec l'application PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "guides/comment-fusionner-des-pdf",
    title: "Comment fusionner des fichiers PDF sur téléphone ou ordinateur",
    description:
      "Assemblez plusieurs PDF en un seul document. Marche à suivre depuis un mobile, étape par étape, avec l'application PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "guides/comment-signer-un-pdf-sur-telephone",
    title: "Comment signer un PDF depuis son téléphone",
    description:
      "Ajoutez une signature électronique à un PDF depuis votre iPhone ou votre Android. Guide pratique avec l'application PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "guides/comment-numeriser-un-document-en-pdf",
    title: "Comment numériser un document en PDF avec son téléphone",
    description:
      "Utilisez l'appareil photo de votre téléphone pour numériser un document de plusieurs pages en un PDF net. Détection des bords et OCR expliqués.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "guides/meilleure-application-pdf-pour-etudiants",
    title: "Quelle application PDF choisir quand on est étudiant (2026)",
    description:
      "Ce qu'un étudiant attend vraiment d'une application PDF : annotations, surlignage, signature et conversions gratuites. Des critères d'évaluation honnêtes.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "guides/meilleure-application-pdf-pour-entreprise",
    title: "Quelle application PDF choisir en entreprise (2026)",
    description:
      "Ce qu'une petite équipe doit exiger d'une application PDF : signature, contrats, sécurité et travail à plusieurs depuis un mobile.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "guides/pdf-ou-docx",
    title: "PDF ou DOCX — quel format utiliser ?",
    description:
      "Quand choisir le PDF plutôt que le DOCX, et l'inverse. Comparaison claire sur la modification, la fidélité, la signature et le partage.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "guides/comment-proteger-un-pdf-par-mot-de-passe",
    title: "Comment protéger un PDF par mot de passe",
    description:
      "Ajoutez un mot de passe et un chiffrement à un PDF sur mobile ou sur ordinateur. Guide pratique avec l'application PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "guides/comment-convertir-un-pdf-en-word",
    title: "Comment convertir un PDF en Word, gratuitement et dans le navigateur",
    description:
      "Récupérez le texte d'un PDF dans un document Word modifiable, sans rien envoyer. Ce qui passe proprement, ce qu'il faut reprendre, et pourquoi un document numérisé ne fonctionne pas.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "guides/comment-convertir-un-word-en-pdf",
    title: "Comment convertir un Word en PDF, gratuitement et sans envoi",
    description:
      "Transformez un .docx ou un .txt en PDF propre et partageable dans votre navigateur. Pourquoi le PDF est le bon format à envoyer, et quoi vérifier avant l'export.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "guides/comment-convertir-un-jpg-en-pdf",
    title: "Comment convertir un JPG en PDF — images vers document",
    description:
      "Réunissez une ou plusieurs photos JPG en un seul PDF dans votre navigateur. Idéal pour les reçus, les pièces d'identité et les documents photographiés, avec les limites de qualité et le cas HEIC de l'iPhone.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "guides/comment-convertir-un-png-en-pdf",
    title: "Comment convertir un PNG en PDF — captures et graphiques nets",
    description:
      "Transformez vos captures d'écran, schémas et graphiques PNG en un seul PDF dans votre navigateur. Pourquoi le PNG garde le texte net, et ce que devient la transparence.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "guides/comment-convertir-un-webp-en-pdf",
    title: "Comment convertir un WebP en PDF — images du web vers un document",
    description:
      "Transformez les images WebP enregistrées depuis le web en un seul PDF dans votre navigateur. Pourquoi d'autres applications les refusent, et comment la conversion règle le problème.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "guides/comment-convertir-un-pdf-en-jpg",
    title: "Comment convertir un PDF en JPG — exporter les pages en images",
    description:
      "Exportez les pages d'un PDF en images JPG dans votre navigateur. Quand le JPG vaut mieux que le PNG, l'effet de l'échelle sur la qualité, et quand une image bat un PDF.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "guides/comment-convertir-un-pdf-en-png",
    title: "Comment convertir un PDF en PNG — des pages nettes et sans perte",
    description:
      "Exportez les pages d'un PDF en images PNG de haute qualité dans votre navigateur. Pourquoi le PNG garde textes et schémas nets, avec les points sur l'échelle et la transparence.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "guides/comment-convertir-des-photos-en-pdf-sur-iphone",
    title: "Comment convertir des photos en PDF sur iPhone (et régler le cas HEIC)",
    description:
      "Réunissez vos photos iPhone en un seul PDF, y compris le format HEIC qui bloque tant de monde. La voie du navigateur et la voie plus rapide dans l'application.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "guides/comment-convertir-des-photos-en-pdf-sur-android",
    title: "Comment convertir des photos en PDF sur Android",
    description:
      "Réunissez vos photos Android en un seul PDF avec un outil dans le navigateur ou l'impression en PDF intégrée. Et la méthode plus rapide dans l'application, avec numérisation.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "guides/comment-convertir-des-documents-numerises-en-pdf",
    title: "Comment convertir des documents numérisés en PDF",
    description:
      "Vous avez déjà des images de numérisation ou des photos de papier ? Réunissez-les en un PDF dans votre navigateur, et comprenez à quoi sert l'OCR pour rendre le texte consultable.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "guides/comment-diviser-un-pdf",
    title: "Comment diviser un PDF en plusieurs fichiers (gratuit)",
    description:
      "Découpez un gros PDF en fichiers plus petits par plage de pages, dans votre navigateur. Quand diviser plutôt qu'extraire, et comment préserver l'original.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "guides/comment-extraire-des-pages-d-un-pdf",
    title: "Comment extraire des pages d'un PDF (gratuit, sans envoi)",
    description:
      "Sortez des pages ou des plages précises d'un PDF dans un nouveau fichier, depuis votre navigateur. Parfait pour n'envoyer que les pages attendues.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "guides/comment-reorganiser-les-pages-d-un-pdf",
    title: "Comment réorganiser les pages d'un PDF (gratuit, dans le navigateur)",
    description:
      "Remettez les pages d'un PDF dans le bon ordre depuis votre navigateur. Rattrapez une numérisation à l'envers ou une fusion qui a mal tourné.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "guides/comment-faire-pivoter-les-pages-d-un-pdf",
    title: "Comment faire pivoter les pages d'un PDF (gratuit, sans envoi)",
    description:
      "Faites pivoter toutes les pages d'un PDF ou seulement certaines, de 90, 180 ou 270 degrés, dans votre navigateur. Redressez une numérisation en paysage ou une page à l'envers.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "guides/comment-ajouter-un-filigrane-a-un-pdf",
    title: "Comment ajouter un filigrane à un PDF (gratuit)",
    description:
      "Apposez une mention comme BROUILLON ou CONFIDENTIEL sur chaque page d'un PDF, dans votre navigateur. Ce qu'un filigrane protège vraiment, et ce qu'il ne protège pas.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "guides/comment-supprimer-des-pages-inutiles-d-un-pdf",
    title: "Comment supprimer les pages inutiles d'un PDF",
    description:
      "Retirez les pages blanches, les pages de garde ou les sections hors sujet d'un PDF en ne gardant que les pages voulues. Un fichier propre, sans rien envoyer.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "guides/comment-organiser-ses-fichiers-pdf",
    title: "Comment organiser ses fichiers PDF — une méthode qui tient",
    description:
      "Remettez de l'ordre dans des PDF en vrac : fusionner ce qui va ensemble, réordonner les pages, retirer le superflu et nommer correctement. Une routine avec des outils gratuits.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "guides/comment-preparer-un-pdf-avant-de-l-envoyer",
    title: "Comment préparer un PDF avant de l'envoyer (check-list)",
    description:
      "La vérification à faire avant d'envoyer un PDF : retirer les pages parasites, corriger l'orientation, réduire le poids et signaler un brouillon. Un document propre et calibré.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "guides/comment-redresser-les-pages-d-un-pdf",
    title: "Comment redresser un PDF dont les pages sont de travers ou à l'envers",
    description:
      "Redressez définitivement les pages d'un PDF qui s'ouvrent couchées ou à l'envers, dans votre navigateur. Pourquoi tourner l'écran ne change rien, et ce qui corrige vraiment le fichier.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "guides/comment-compresser-un-pdf-en-ligne-sans-l-envoyer",
    title: "Comment compresser un PDF en ligne sans l'envoyer sur un serveur",
    description:
      "Réduisez un PDF directement dans votre navigateur, sans transfert ni compte. En quoi la compression sur l'appareil diffère des outils en ligne classiques, et ce qu'elle coûte en qualité.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "guides/comment-reduire-la-taille-d-un-pdf-pour-l-email",
    title: "Comment réduire la taille d'un PDF pour l'envoyer par e-mail",
    description:
      "Passez sous les limites de pièce jointe de Gmail et d'Outlook. Les plafonds réels, pourquoi les documents numérisés les dépassent, et comment alléger un fichier pour qu'il parte.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "guides/comment-reduire-un-pdf-sur-iphone",
    title: "Comment réduire la taille d'un PDF sur iPhone",
    description:
      "Allégez un PDF sur iPhone avec un outil dans le navigateur ou l'application PDF Editor. Pourquoi les numérisations iPhone sont si lourdes et comment repasser sous les limites d'envoi.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "guides/comment-reduire-un-pdf-sur-android",
    title: "Comment réduire la taille d'un PDF sur Android",
    description:
      "Compressez un PDF sur n'importe quel Android avec un outil de navigateur sans installation, ou avec l'application PDF Editor. Passez sous les limites d'e-mail et de dépôt.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "guides/pourquoi-mon-pdf-est-si-lourd",
    title: "Pourquoi mon PDF est-il si lourd ? Causes et solutions",
    description:
      "Les vraies raisons du poids d'un PDF — numérisations, photos intégrées, polices et le reste — et la bonne correction pour chacune, avec des outils gratuits.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "guides/compresser-un-pdf-sans-trop-perdre-en-qualite",
    title: "Compresser un PDF sans trop perdre en qualité",
    description:
      "Trouvez le bon équilibre entre poids et qualité. Comment les niveaux de compression échangent du détail contre des mégaoctets, et lequel choisir.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "guides/comment-compresser-un-pdf-numerise",
    title: "Comment compresser un PDF numérisé (des gains spectaculaires)",
    description:
      "Les PDF numérisés sont les plus faciles à alléger et les plus encombrants. Comment les réduire fortement, et ce qu'il advient du texte consultable.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "guides/quel-niveau-de-compression-pdf-choisir",
    title: "Quel niveau de compression PDF choisir — guide de décision",
    description:
      "Quel réglage pour l'e-mail, l'impression, l'archivage ou le web ? Un tableau pratique qui associe chaque niveau à un usage, avec les compromis assumés.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "guides/comment-envoyer-un-pdf-trop-lourd",
    title: "Comment envoyer un PDF trop lourd (5 méthodes fiables)",
    description:
      "Cinq façons fiables d'envoyer un PDF trop volumineux pour un e-mail — compresser, diviser, lien de partage et le reste — et comment choisir entre elles.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "guides/comment-reduire-un-pdf-avant-de-le-deposer",
    title: "Comment réduire un PDF avant de le déposer sur un portail",
    description:
      "Les portails de dépôt sont plus stricts que la messagerie. Comment passer sous des plafonds serrés sans perdre la lisibilité qu'ils vérifient.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "guides/comment-signer-un-pdf-sur-iphone",
    title: "Comment signer un PDF sur iPhone (guide 2026)",
    description:
      "Signez un PDF sur iPhone avec Annotation ou l'application PDF Editor. Les limites de l'outil natif, et quand une application dédiée signe mieux.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "guides/comment-signer-un-pdf-sur-android",
    title: "Comment signer un PDF sur Android (guide 2026)",
    description:
      "Signez un PDF sur Android, où aucun outil de signature n'est universel. La voie fiable par application, les options variables des constructeurs et les bases juridiques.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "guides/comment-remplir-un-formulaire-pdf-sur-telephone",
    title: "Comment remplir un formulaire PDF depuis son téléphone",
    description:
      "Remplissez un formulaire PDF sur iPhone ou Android, qu'il ait de vrais champs ou qu'il s'agisse d'une simple numérisation. Saisir, ajouter du texte et signer au même endroit.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "guides/comment-annoter-un-pdf-sur-mobile",
    title: "Comment annoter un PDF sur mobile",
    description:
      "Surlignez, commentez et dessinez sur vos PDF depuis un téléphone ou une tablette. Les outils d'annotation qui comptent, et comment garder des annotations lisibles.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "guides/comment-gerer-ses-pdf-sur-telephone",
    title: "Comment gérer ses PDF sur son téléphone",
    description:
      "Évitez que les PDF de votre téléphone tournent au chaos : renommer, classer, synchroniser et libérer de l'espace. Une routine d'entretien réaliste.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "guides/comment-creer-un-pdf-avec-son-appareil-photo",
    title: "Comment créer un PDF avec l'appareil photo de son téléphone",
    description:
      "Transformez une photo en PDF — et comprenez pourquoi une vraie numérisation vaut mieux qu'un cliché brut. La capture rapide pour les reçus, la numérisation pour les documents.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "guides/comment-partager-un-pdf-depuis-son-telephone",
    title: "Comment partager un PDF depuis son téléphone",
    description:
      "Partagez un PDF depuis iPhone ou Android comme il faut — e-mail, AirDrop, messagerie ou lien — et préparez-le pour qu'il arrive vraiment.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "guides/meilleurs-outils-pdf-gratuits-pour-etudiants",
    title: "Les meilleurs outils PDF gratuits pour les étudiants (2026)",
    description:
      "Les outils PDF gratuits et sans inscription qui couvrent les vrais besoins étudiants — assembler des lectures, alléger un rendu, convertir, annoter — sans mur payant.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "guides/meilleure-organisation-pdf-pour-freelances",
    title: "La meilleure organisation PDF quand on est freelance",
    description:
      "Une routine PDF reproductible pour un freelance : devis envoyé, contrat signé, facture émise. Les outils gratuits et l'application qui gardent tout rapide et confidentiel.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "guides/meilleurs-outils-pdf-gratuits-pour-petites-entreprises",
    title: "Les meilleurs outils PDF gratuits pour une petite entreprise",
    description:
      "Gérez factures, contrats et archives avec des outils PDF gratuits et confidentiels, sans abonnement par utilisateur. Quel outil pour quelle tâche, et la place de l'application.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "guides/pdf-ou-jpg-pour-un-document",
    title: "PDF ou JPG pour un document — arrêtez d'envoyer des photos",
    description:
      "Pourquoi une photo JPG d'un document est le mauvais fichier à envoyer, quand le PDF s'impose, et comment transformer une photo en véritable document.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "guides/quand-envoyer-un-pdf-plutot-qu-un-docx",
    title: "Quand envoyer un PDF plutôt qu'un DOCX (check-list)",
    description:
      "Vous avez un document Word : faut-il l'envoyer en PDF ? Une check-list rapide des situations où le PDF s'impose, et comment convertir.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "guides/outils-pdf-dans-le-navigateur-ou-avec-envoi",
    title: "Outils PDF dans le navigateur ou avec envoi sur un serveur",
    description:
      "Tous les outils PDF « en ligne » ne se valent pas. La différence entre ceux qui travaillent dans votre navigateur et ceux qui transfèrent votre fichier — et comment les reconnaître.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "guides/outils-pdf-respectueux-de-la-confidentialite",
    title: "Des outils PDF respectueux de la confidentialité — vos documents restent chez vous",
    description:
      "Les PDF contiennent souvent vos données les plus sensibles. Comment les traiter sans rien transférer, et ce que « confidentiel » veut vraiment dire ici.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "guides/erreurs-frequentes-a-eviter-avec-les-pdf",
    title: "Les erreurs fréquentes à éviter avec les PDF",
    description:
      "Les erreurs qui font perdre du temps ou qui exposent des informations — trop compresser, envoyer des photos, transférer un fichier sensible, oublier des pages — et comment les éviter.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "guides/pourquoi-mon-pdf-ne-s-ouvre-pas",
    title: "Pourquoi mon PDF ne s'ouvre-t-il pas ? Causes et solutions",
    description:
      "Un PDF qui refuse de s'ouvrir, c'est presque toujours l'une de cinq causes. Comment reconnaître un téléchargement incomplet, un mot de passe, un bug de lecteur ou un fichier ancien — et corriger chacun.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "guides/pourquoi-mon-pdf-est-vide",
    title: "Pourquoi mon PDF est-il vide ? Les vraies causes et comment le récupérer",
    description:
      "Quand un PDF s'ouvre sur des pages blanches, le contenu est presque toujours encore là, masqué par un défaut d'affichage, une police manquante ou une numérisation ratée. Comment identifier le cas et récupérer le document.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "guides/pourquoi-je-ne-peux-pas-modifier-un-pdf",
    title: "Pourquoi je ne peux pas modifier ce PDF ? Les vraies raisons",
    description:
      "Le PDF a été conçu pour résister à la modification, mais quelques éléments précis — numérisation, protections, limites du lecteur — rendent certains fichiers plus verrouillés que d'autres. Ce qui bloque le vôtre, et ce qui marche vraiment.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "guides/pourquoi-mon-pdf-est-flou",
    title: "Pourquoi mon PDF est-il flou ? Résolution, compression et numérisation",
    description:
      "Un PDF flou vient d'une numérisation basse résolution, d'une compression trop forte ou d'un mauvais export — jamais du format lui-même. Comment identifier la cause et retrouver de la netteté.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "guides/comment-reparer-un-pdf-endommage",
    title: "Comment réparer un PDF endommagé (ce qui marche vraiment)",
    description:
      "La plupart des PDF « corrompus » ne le sont pas : ce sont des téléchargements tronqués, des lecteurs inadaptés ou des écritures incomplètes. La liste honnête des correctifs qui récupèrent le fichier, et le cas où il est vraiment perdu.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "guides/comment-resoudre-les-problemes-d-impression-pdf",
    title: "Comment résoudre les problèmes d'impression d'un PDF (pages coupées, mauvais format, texte manquant)",
    description:
      "Quand un PDF s'imprime rogné, mal mis à l'échelle ou sans une partie du texte, la solution dépend du symptôme. Un tableau court qui associe chaque problème au bon réglage.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "guides/comment-resoudre-les-erreurs-de-depot-pdf",
    title: "Comment résoudre les erreurs de dépôt d'un PDF (trop lourd, refusé, bloqué)",
    description:
      "Les portails refusent un PDF pour un petit nombre de raisons : poids, nombre de pages, format trop strict ou transfert instable. Comment identifier la vôtre et faire accepter le fichier au coup suivant.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "guides/comment-corriger-la-mise-en-page-d-un-pdf",
    title: "Comment corriger la mise en page d'un PDF (retours à la ligne, marges, espacements)",
    description:
      "Quand la mise en page d'un PDF part de travers — texte qui se replace, marges décalées, espacements incohérents — la correction se fait dans le document source, pas dans le PDF. La méthode la plus propre pour obtenir un bon export.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "guides/comment-ameliorer-la-qualite-d-un-pdf-numerise",
    title: "Comment améliorer la qualité d'un PDF numérisé (netteté, redressement, contraste)",
    description:
      "Les documents numérisés ratent toujours de la même façon : de travers, contraste délavé, fond piqueté, fichier énorme. Les réglages avant numérisation et les outils après qui nettoient vraiment.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "guides/comment-corriger-les-problemes-de-police-d-un-pdf",
    title: "Comment corriger les problèmes de police d'un PDF (manquante, remplacée, illisible)",
    description:
      "Quand un PDF affiche la mauvaise police, des carrés à la place des caractères ou un texte de substitution, c'est presque toujours une police non intégrée. Comment fonctionne l'intégration et quoi changer à l'export.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "guides/meilleurs-outils-pdf-pour-le-teletravail",
    title: "Les meilleurs outils PDF pour le télétravail (gratuits, dans le navigateur)",
    description:
      "Des outils PDF qui tiennent quand le bureau se résume à un portable et un téléphone — signer, compresser, fusionner, numériser, partager — sans installation ni licence par utilisateur.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "guides/meilleurs-outils-pdf-pour-les-documents-de-bureau",
    title: "Les meilleurs outils PDF pour les documents de bureau (Word, Excel, rapports)",
    description:
      "La boîte à outils PDF dont le travail de bureau a réellement besoin : aller-retour Word et PDF propre, fusion de plusieurs documents, réorganisation des pages et compression fiable pour les pièces jointes.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "guides/meilleure-organisation-pdf-en-equipe",
    title: "La meilleure organisation PDF en équipe (fichiers partagés, relectures, validations)",
    description:
      "Comment une petite équipe fait circuler ses documents sans abonnement PDF payant : un enchaînement reproductible pour les brouillons, les relectures et les validations signées.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "guides/comment-partager-des-pdf-avec-ses-clients",
    title: "Comment partager des PDF avec ses clients (avec sérieux et discrétion)",
    description:
      "Un mode d'emploi court pour envoyer un PDF à un client — poids adapté à l'e-mail, choix du mot de passe, identité visuelle, accusé de réception — sans rien confier à un tiers.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "guides/comment-preparer-un-pdf-professionnel",
    title: "Comment préparer un PDF avant de l'envoyer à un client (check-list)",
    description:
      "Avant qu'un PDF quitte le bureau : retirer les brouillons, vérifier la pagination, corriger l'orientation, intégrer les polices et alléger le fichier. La vérification finale des documents qui vous représentent.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "guides/comment-envoyer-un-contrat-en-pdf",
    title: "Comment envoyer un contrat en PDF (signer, verrouiller, transmettre)",
    description:
      "Un contrat demande une méthode plus stricte : verrouiller le contenu, apposer la signature, marquer les brouillons d'un filigrane et livrer un fichier que l'autre partie peut contresigner sans allers-retours.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "guides/comment-organiser-ses-documents-professionnels-en-pdf",
    title: "Comment organiser ses documents professionnels en PDF (dossiers, noms, versions)",
    description:
      "Une convention de nommage et de classement pour les PDF de travail — devis, briefs, livrables, archives — qui évite le chaos des versions et permet à chacun de retrouver n'importe quoi.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "guides/comment-gerer-ses-factures-en-pdf",
    title: "Comment gérer ses factures en PDF (émettre, suivre, archiver)",
    description:
      "Une méthode de facturation en PDF qui ne demande aucun logiciel comptable : produire, numéroter, envoyer, suivre et archiver, avec des outils gratuits et un classement propre.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "guides/comment-creer-un-pdf-pret-pour-le-client",
    title: "Comment créer un PDF prêt à envoyer au client (soigné, à vos couleurs)",
    description:
      "Ce qui sépare un PDF interne d'un PDF client : page de garde, pagination, identité visuelle, poids du fichier, nom du fichier. Les finitions rapides qui donnent l'impression d'un document abouti.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "guides/organisation-pdf-pour-petites-entreprises",
    title: "Organisation des PDF dans une petite entreprise (devis, contrats, archives)",
    description:
      "Comment une petite entreprise fait circuler ses documents en PDF — devis envoyés, contrats retournés, archives classées — sans s'offrir une pile d'abonnements pour autant.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "guides/organisation-pdf-pour-consultants",
    title: "Organisation des PDF quand on est consultant (propositions, rapports, factures)",
    description:
      "Le rythme PDF d'un consultant : des propositions qui aboutissent, des rapports lisibles sur un téléphone, des factures parties en quelques secondes. Les outils dans le navigateur qui gardent tout léger.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "guides/organisation-pdf-pour-agences",
    title: "Organisation des PDF en agence (présentations, briefs, validations)",
    description:
      "La chaîne PDF d'une agence — recommandations, briefs créatifs, validations client, livrables — rendue rapide et prévisible avec des outils gratuits, confidentiels et dans le navigateur.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "guides/comment-rendre-un-devoir-en-pdf",
    title: "Comment rendre un devoir en PDF sans galérer avec le portail",
    description:
      "Les plateformes de rendu refusent les devoirs pour des raisons prévisibles : poids, nombre de pages, format. Le chemin le plus simple entre le devoir terminé et le dépôt accepté.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "guides/comment-numeriser-ses-notes-manuscrites-en-pdf",
    title: "Comment numériser ses notes manuscrites en PDF (net et consultable)",
    description:
      "Transformez des pages de notes de cours manuscrites en PDF nets de plusieurs pages, avec l'appareil photo du téléphone. Les réglages qui donnent une numérisation lisible du premier coup.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "guides/comment-compresser-un-pdf-pour-un-portail-scolaire",
    title: "Comment compresser un PDF pour un portail scolaire (limites strictes)",
    description:
      "Les portails de dépôt des écoles et des universités plafonnent les PDF plus sévèrement que la messagerie. Comment alléger un devoir sans détruire la lisibilité que le correcteur va justement examiner.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "guides/comment-convertir-ses-notes-de-cours-en-pdf",
    title: "Comment convertir ses notes de cours en PDF (Word, photos, diapositives)",
    description:
      "Les notes de cours arrivent dans tous les formats : document Word, diaporama, capture d'écran, photo du tableau. Comment réunir chacun en un PDF lisible sans perdre la structure.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "guides/comment-organiser-ses-supports-de-revision-en-pdf",
    title: "Comment organiser ses supports de révision en PDF (dossiers, noms, sommaire)",
    description:
      "Les PDF d'un semestre s'accumulent vite. Une convention simple de dossiers, de noms et de fusion qui garde tout retrouvable de la première semaine aux partiels.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "guides/comment-partager-ses-notes-de-cours-en-pdf",
    title: "Comment partager ses notes de cours en PDF (groupe, messagerie, cloud)",
    description:
      "Partagez vos notes avec un groupe de révision sans perdre la mise en forme ni le suivi des versions. Les habitudes PDF qui évitent le chaos des captures d'écran.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "guides/comment-annoter-et-remplir-ses-documents-de-cours-en-pdf",
    title: "Comment annoter et remplir ses documents de cours en PDF",
    description:
      "Polycopiés, séries d'exercices et autorisations arrivent souvent en PDF. Comment les annoter, les remplir et les renvoyer sans imprimer, depuis un téléphone ou un portable.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "guides/organisation-pdf-pour-etudiants-a-l-universite",
    title: "Organisation des PDF à l'université (notes, devoirs, rendus)",
    description:
      "Un rythme PDF qui tient tout un semestre, jusqu'aux partiels : notes de cours numérisées, devoirs rendus, dossiers de révision partagés. Dans le navigateur et gratuit.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "guides/comment-creer-ses-fiches-de-revision-en-pdf",
    title: "Comment créer ses fiches de révision en PDF (fiches, synthèses, dossiers)",
    description:
      "Construisez vos propres PDF de révision à partir de notes, de diapositives et de surlignages : consultables, transportables, prêts à annoter sur tablette. La structure qui les rend vraiment utiles en période d'examens.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "guides/les-outils-pdf-en-ligne-sont-ils-surs",
    title: "Les outils PDF en ligne sont-ils sûrs ? Un regard honnête sur le risque",
    description:
      "La plupart des outils PDF « en ligne » transfèrent votre fichier sur un serveur. Certains non. Les risques réels, les familles d'outils qui traitent vos données différemment, et comment les distinguer.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "guides/comment-proteger-ses-pdf-sensibles",
    title: "Comment protéger ses PDF sensibles (stockage, partage, fin de vie)",
    description:
      "Un PDF sensible doit être protégé à trois moments : quand il est stocké, quand il est partagé, et une fois que le destinataire n'en a plus besoin. Une méthode qui couvre les trois.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "guides/comment-partager-un-pdf-en-toute-discretion",
    title: "Comment partager un PDF en toute discrétion (sans le confier à des inconnus)",
    description:
      "La façon discrète de partager un PDF ne passe pas par un site public d'« outils PDF ». Les canaux qui gardent le document entre vous et le destinataire, avec des réglages raisonnables.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "guides/organisation-documentaire-sans-transfert",
    title: "Une organisation documentaire sans aucun transfert (de bout en bout)",
    description:
      "Toute une chaîne documentaire — capture, retouche, signature, envoi, archivage — qui garde les fichiers sur vos appareils et hors des serveurs tiers. À quoi elle ressemble concrètement, et avec quels outils.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "guides/le-traitement-pdf-local-dans-le-navigateur-explique",
    title: "Le traitement PDF local dans le navigateur, expliqué",
    description:
      "Comment un outil PDF peut fonctionner dans un navigateur sans envoyer votre fichier nulle part. La technologie, les compromis, et comment vérifier qu'un outil travaille vraiment en local.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "guides/les-outils-pdf-en-ligne-conservent-ils-vos-fichiers",
    title: "Les outils PDF en ligne conservent-ils vos fichiers ? Ce qu'il faut vérifier",
    description:
      "Certains outils PDF en ligne suppriment les fichiers immédiatement, d'autres les gardent quelques heures, d'autres indéfiniment. Comment lire vite une politique de confidentialité et quoi y chercher.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "guides/comment-eviter-de-transferer-des-documents-sensibles",
    title: "Comment éviter de transférer des documents sensibles (les alternatives concrètes)",
    description:
      "Quand une tâche vous pousse à envoyer un PDF sensible sur un serveur, il existe presque toujours une solution locale. Les familles de tâches et l'outil sans transfert correspondant.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "guides/securiser-ses-pdf-en-entreprise",
    title: "Sécuriser ses PDF en entreprise (sans infrastructure lourde)",
    description:
      "Une petite entreprise n'a pas besoin d'un coffre-fort documentaire certifié pour travailler sereinement. Le socle réaliste — stockage chiffré, envois maîtrisés, traitement local — qui répond au risque réel.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "guides/avantages-du-traitement-documentaire-dans-le-navigateur",
    title: "Les avantages du traitement documentaire dans le navigateur (vitesse, confidentialité, coût)",
    description:
      "Pourquoi traiter un PDF dans le navigateur change l'équation entre vitesse, confidentialité et coût par rapport aux outils dans le cloud — et où sont les vraies limites du traitement local.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "guides/pdf-ou-google-docs",
    title: "PDF ou Google Docs — quand utiliser l'un et l'autre",
    description:
      "Google Docs sert à travailler à plusieurs ; le PDF sert à livrer. Quand utiliser lequel, concrètement, et comment passer proprement de l'un à l'autre au bon moment.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "guides/pdf-ou-docx-en-entreprise",
    title: "PDF ou DOCX en entreprise (contrats, rapports, diffusion)",
    description:
      "Pourquoi les documents professionnels circulent presque toujours en PDF mais vivent en DOCX. Le bon outil à chaque étape de la vie d'un contrat, d'un rapport ou d'une facture.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "guides/pdf-ou-image-pour-partager-un-document",
    title: "PDF ou image pour partager un document (JPG, PNG, HEIC)",
    description:
      "Quand un JPG, un PNG ou un HEIC d'un document est le mauvais choix — et ce qui fait du PDF le bon format dès qu'on dépasse la capture d'écran rapide.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "guides/pdf-ou-png",
    title: "PDF ou PNG — document de plusieurs pages ou image unique bien nette",
    description:
      "Le PDF gagne pour un document de plusieurs pages ; le PNG gagne pour une image unique, nette, à fond transparent. Les règles claires et la conversion dans les deux sens.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "guides/quel-format-choisir-pour-partager-un-document",
    title: "Quel format choisir pour partager un document (PDF, DOCX, images comparés)",
    description:
      "Quand le PDF est le bon format à envoyer, quand il ne l'est pas, et ce que valent vraiment les alternatives (DOCX, images, HTML, Markdown) dans les situations du quotidien.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "guides/pourquoi-le-pdf-reste-la-norme",
    title: "Pourquoi le PDF reste la norme pour les documents en 2026",
    description:
      "Des décennies plus tard, le PDF domine toujours l'échange de documents. Les raisons de sa longévité — fidélité, universalité, signature, archivage — et ses points faibles.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "guides/quand-utiliser-un-pdf-numerise",
    title: "Quand utiliser un PDF numérisé (et quand s'en passer)",
    description:
      "Le PDF numérisé résout un problème précis : faire passer du papier au numérique. Il est aussi plus lourd, moins consultable et plus difficile à modifier. Quand le compromis en vaut la peine.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "guides/pdf-modifiable-ou-pdf-image",
    title: "PDF modifiable ou PDF image — la vraie différence",
    description:
      "Certains PDF contiennent du vrai texte sélectionnable et une structure modifiable ; d'autres ne sont que des images de pages sans texte dessous. Comment savoir lequel vous avez, et quand chacun convient.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "guides/meilleurs-outils-pdf-gratuits",
    title: "Les meilleurs outils PDF gratuits en 2026 (sélection honnête, sans inscription)",
    description:
      "Les outils PDF gratuits qui méritent qu'on les utilise — compresser, fusionner, signer, convertir, numériser — choisis pour leur qualité réelle et leur discrétion, pas pour leur nombre de publicités.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "guides/outils-pdf-gratuits-dans-le-navigateur",
    title: "Outils PDF gratuits dans le navigateur (sans installation, sans transfert)",
    description:
      "Les outils PDF qui fonctionnent entièrement dans votre navigateur : rien à installer, aucun compte, aucun transfert. Ce qui existe, ce que cela couvre, et comment vérifier que tout se passe bien en local.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "guides/meilleurs-outils-pdf-sans-transfert",
    title: "Les meilleurs outils PDF sans transfert (vos fichiers restent chez vous)",
    description:
      "Quand vous ne voulez pas qu'un PDF quitte votre appareil, voici les outils qui font le travail en local. Compression, fusion, conversion — sans que le fichier bouge de votre machine.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "guides/meilleurs-outils-pdf-confidentiels",
    title: "Les meilleurs outils PDF confidentiels (quand la discrétion compte vraiment)",
    description:
      "Pour un contrat, un relevé bancaire ou tout autre PDF sensible, voici les outils qui respectent la confidentialité par leur architecture — et pas seulement dans leur politique affichée.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "guides/outils-pdf-gratuits-pour-iphone",
    title: "Outils PDF gratuits pour iPhone (navigateur et applications)",
    description:
      "Des outils PDF gratuits sur iPhone qui fonctionnent vraiment sans abonnement : compresser, signer, numériser, convertir. Les options dans le navigateur et l'application PDF Editor pour travailler hors connexion.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "guides/outils-pdf-gratuits-pour-android",
    title: "Outils PDF gratuits pour Android (navigateur et applications)",
    description:
      "Des outils PDF gratuits sur Android choisis pour les tâches du quotidien : compresser, signer, numériser, convertir. Les voies par le navigateur et l'application PDF Editor hors connexion.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "guides/qu-est-ce-qu-un-formulaire-pdf",
    title: "Qu'est-ce qu'un formulaire PDF ? Interactif ou non interactif",
    description:
      "Un formulaire PDF est un document conçu pour recueillir des réponses — parfois avec de vrais champs de saisie, parfois une simple page sur laquelle on écrit par-dessus. Ce que cela change et comment les distinguer.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "guides/pdf-modifiable-ou-pdf-a-remplir",
    title: "PDF modifiable ou PDF à remplir — quelle différence ?",
    description:
      "Modifier un PDF, c'est changer son contenu ; le remplir, c'est saisir des réponses dans des champs. Pourquoi ce sont deux opérations distinctes, et laquelle vous concerne vraiment.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "guides/comment-fonctionnent-les-formulaires-pdf",
    title: "Comment fonctionnent les formulaires PDF — champs, AcroForm et numérisations",
    description:
      "Sous le capot, un formulaire PDF est soit un ensemble de champs interactifs posés sur la page, soit une simple image sans aucun champ. Comment chacun est construit et pourquoi cela change tout au remplissage.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "guides/peut-on-modifier-un-formulaire-pdf",
    title: "Peut-on modifier un formulaire PDF ? Ce qui se change et ce qui résiste",
    description:
      "Modifier les questions d'un formulaire PDF n'a rien à voir avec le fait de le remplir. Ce qui reste modifiable, ce qui est verrouillé, et comment intervenir quand on n'a que le PDF final.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "guides/comment-remplir-un-formulaire-pdf",
    title: "Comment remplir un formulaire PDF (interactif ou non)",
    description:
      "Remplissez n'importe quel formulaire PDF, qu'il ait de vrais champs ou qu'il s'agisse d'une numérisation sur laquelle on écrit. La marche à suivre complète sur ordinateur et sur téléphone, signature et enregistrement compris.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "guides/comment-enregistrer-un-formulaire-pdf-rempli",
    title: "Comment enregistrer un formulaire PDF rempli sans perdre les réponses",
    description:
      "Vous remplissez un formulaire et vos réponses disparaissent ? Comment enregistrer les données de manière fiable, pourquoi certains lecteurs n'y arrivent pas, et quand aplatir avant d'envoyer.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "guides/pourquoi-je-ne-peux-pas-ecrire-dans-un-formulaire-pdf",
    title: "Pourquoi je ne peux pas écrire dans ce formulaire PDF ? Causes et solutions",
    description:
      "Vous cliquez sur un champ et rien ne se passe. Les trois causes habituelles — un formulaire non interactif, le mauvais lecteur ou un fichier verrouillé — et quoi faire dans chaque cas.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "guides/comment-creer-un-pdf-a-remplir",
    title: "Comment créer un PDF à remplir — les options honnêtes et leurs limites",
    description:
      "Ce qu'il faut vraiment pour produire un PDF que d'autres pourront remplir : de vrais champs interactifs ou un simple modèle non interactif — et l'approche adaptée aux outils dont vous disposez.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "guides/comment-diffuser-un-formulaire-pdf-a-remplir",
    title: "Comment diffuser un formulaire PDF à faire remplir",
    description:
      "Envoyer un formulaire vierge à compléter n'a rien à voir avec l'envoi d'un document fini. Comment le diffuser pour que les destinataires puissent réellement le remplir, et comment récupérer les réponses.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "guides/comment-imprimer-un-formulaire-pdf-rempli",
    title: "Comment imprimer un formulaire PDF rempli avec toutes les réponses",
    description:
      "Vous imprimez votre formulaire et les champs ressortent vides ? Pourquoi les réponses saisies ne s'impriment pas toujours, et comment obtenir une copie papier propre avec tout ce que vous avez écrit.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "guides/comment-remplir-un-formulaire-pdf-sur-iphone",
    title: "Comment remplir un formulaire PDF sur iPhone (Fichiers, Annotation, applications)",
    description:
      "Remplissez un formulaire PDF interactif ou non sur iPhone, avec Fichiers et Annotation ou avec une application dédiée. Les étapes propres à iOS, le passage par le menu de partage, et les limites d'Annotation.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "guides/comment-remplir-un-formulaire-pdf-sur-android",
    title: "Comment remplir un formulaire PDF sur Android (sur n'importe quel téléphone)",
    description:
      "Remplissez un formulaire PDF interactif ou non sur Android. Pourquoi le lecteur intégré refuse souvent la saisie, la voie fiable par application, et l'influence des différences entre constructeurs.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "guides/comment-renvoyer-un-formulaire-pdf-rempli",
    title: "Comment renvoyer un formulaire PDF rempli (aplatir et transmettre)",
    description:
      "Le formulaire est rempli : reste à le renvoyer proprement. Comment l'aplatir pour que les réponses ne bougent plus, le joindre correctement, et s'assurer qu'il est bien arrivé sans perte de données.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "guides/comment-remplir-un-formulaire-administratif-pdf-sur-telephone",
    title: "Comment remplir un formulaire administratif en PDF depuis son téléphone",
    description:
      "Les formulaires administratifs sont souvent de simples numérisations au format strict. Comment les compléter sur un téléphone, gérer les champs pénibles, et suivre les consignes de l'organisme émetteur.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "guides/methode-mobile-pour-les-formulaires-pdf",
    title: "La méthode mobile pour les formulaires PDF (de la réception à l'envoi)",
    description:
      "Une routine reproductible, pensée pour le téléphone : recevoir, ouvrir dans la bonne application, remplir, signer, aplatir, envoyer. Un enchaînement complet qui ne demande aucun ordinateur.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "guides/quelle-application-de-formulaires-pdf-sur-iphone",
    title: "Quelle application de formulaires PDF choisir sur iPhone",
    description:
      "Ce qui compte vraiment dans une application de formulaires PDF sur iPhone — détection des champs, saisie sur formulaire non interactif, signature, traitement local — et comment juger un candidat avec vos propres formulaires.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "guides/quelle-application-de-formulaires-pdf-sur-android",
    title: "Quelle application de formulaires PDF choisir sur Android",
    description:
      "Comment choisir une application de formulaires PDF sur Android : détection des champs, saisie sur formulaire non interactif, signature et traitement local — et pourquoi une application dédiée bat le lecteur par défaut.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "guides/formulaires-pdf-pour-petites-entreprises",
    title: "Les formulaires PDF dans une petite entreprise (clients, commandes, RH)",
    description:
      "Les formulaires du quotidien d'une petite entreprise — fiche client, bon de commande, réservation, RH de base — et comment les remplir, les collecter et les gérer en PDF sans acheter de plateforme.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "guides/comment-envoyer-une-fiche-client-a-remplir",
    title: "Comment envoyer une fiche client à remplir (proprement et discrètement)",
    description:
      "Obtenez les informations d'un nouveau client en une seule fois. Comment envoyer une fiche en PDF facile à remplir, qui revient complète et qui garde ses informations confidentielles.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "guides/comment-utiliser-un-formulaire-pdf-pour-un-contrat",
    title: "Comment utiliser un formulaire PDF pour un contrat (champs et signature)",
    description:
      "Transformez un contrat en PDF à remplir : champs pour les noms, les dates et les paraphes, zone de signature, puis aplatissement pour que la version signée ne bouge plus. Avec ses limites assumées.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "guides/comment-gerer-des-formulaires-de-candidature-en-pdf",
    title: "Comment gérer des formulaires de candidature en PDF (collecte et examen)",
    description:
      "Vous recevez des candidatures en PDF ? Comment les collecter, les examiner, les comparer et les archiver sans rien perdre de vue — un système simple pour traiter une pile de formulaires remplis.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "guides/formulaires-pdf-pour-consultants",
    title: "Les formulaires PDF du consultant (questionnaires et cadrage)",
    description:
      "Questionnaires de découverte, fiches de cadrage de mission et formulaires de retour — le versant formulaires du conseil, traité en PDF à remplir que le client complète sur n'importe quel appareil.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "guides/formulaires-pdf-pour-agences",
    title: "Les formulaires PDF en agence (démarrage, briefs, validations)",
    description:
      "Dossiers de démarrage client, briefs créatifs et fiches de validation — les formulaires à plusieurs mains d'une agence, traités en PDF à remplir que tout le monde peut compléter.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "guides/formulaires-pdf-pour-freelances",
    title: "Les formulaires PDF du freelance (cadrage, contrats, acomptes)",
    description:
      "Fiche de cadrage de projet, contrat de prestation simple et autorisation d'acompte — le jeu minimal de formulaires PDF à remplir dont un freelance a besoin, sans abonnement et sans rien transférer.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "guides/collecter-des-documents-en-pdf",
    title: "Collecter des documents en PDF — une méthode qui tient",
    description:
      "Vous devez récupérer des fichiers et des formulaires signés auprès de vos clients ? Construisez une collecte reproductible : une liste, des formats homogènes et un suivi clair de ce qui manque encore.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "guides/bonnes-pratiques-des-formulaires-pdf",
    title: "Bonnes pratiques des formulaires PDF (concevoir des formulaires qu'on termine)",
    description:
      "Concevez des formulaires que les gens finissent vraiment : intitulés clairs, espace suffisant, champs pertinents, zone de signature évidente et aplatissement final. Des règles concrètes pour ceux qui les créent et ceux qui les envoient.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "guides/formulaire-pdf-qui-ne-fonctionne-pas",
    title: "Formulaire PDF qui ne fonctionne pas ? Diagnostic et solutions",
    description:
      "Un formulaire PDF récalcitrant a un petit nombre de causes habituelles. Un diagnostic rapide pour identifier la vôtre — champs absents, saisie impossible, enregistrement perdu, lecture seule — et où la corriger.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "guides/champs-de-formulaire-pdf-absents",
    title: "Les champs d'un formulaire PDF ont disparu ? Pourquoi et comment les retrouver",
    description:
      "Vous ouvrez un formulaire et les champs ne sont pas là ? Pourquoi les champs interactifs disparaissent dans certains lecteurs, comment les faire réapparaître, et quoi faire s'il n'y en a jamais eu.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "guides/pourquoi-mon-formulaire-pdf-ne-s-enregistre-pas",
    title: "Pourquoi mon formulaire PDF ne s'enregistre-t-il pas ? Et comment y remédier",
    description:
      "Vous remplissez un formulaire et les réponses disparaissent à la réouverture ? Pourquoi certains lecteurs se contentent d'imprimer au lieu d'enregistrer les données, et les méthodes fiables pour que tout reste en place.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "guides/pourquoi-mon-formulaire-pdf-est-en-lecture-seule",
    title: "Pourquoi mon formulaire PDF est-il en lecture seule ? Et que faire",
    description:
      "Votre formulaire s'ouvre verrouillé, tout est grisé ? Pourquoi un formulaire est mis en lecture seule, comment distinguer une protection volontaire d'un caprice du lecteur, et les solutions honnêtes pour le compléter.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "guides/formulaire-pdf-qui-s-imprime-mal",
    title: "Formulaire PDF qui s'imprime mal ? Corriger les champs vides",
    description:
      "Le formulaire sort avec des champs vides, du texte décalé ou des bords coupés ? Les problèmes d'impression propres aux formulaires — surtout les réponses manquantes — et le réglage qui corrige chacun.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "guides/problemes-de-police-dans-un-formulaire-pdf",
    title: "Problèmes de police dans un formulaire PDF (taille auto, texte coupé, substitution)",
    description:
      "Texte trop grand, trop petit, ou qui rétrécit à mesure que vous tapez ? Les particularités de police propres aux champs de formulaire — taille automatique, substitution, rognage — et comment obtenir des réponses nettes et lisibles.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "guides/problemes-de-mise-en-page-d-un-formulaire-pdf",
    title: "Problèmes de mise en page d'un formulaire PDF (alignement et débordement)",
    description:
      "Champs décalés, réponses qui débordent, formulaire différent sur l'écran d'en face ? Les défauts de mise en page qui varient d'un lecteur à l'autre, et comment obtenir un rendu stable.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "guides/erreurs-d-envoi-d-un-formulaire-pdf",
    title: "Erreurs d'envoi d'un formulaire PDF (quand le bouton Envoyer échoue)",
    description:
      "Le bouton d'envoi du formulaire échoue ou ne fait rien ? Pourquoi ces boutons dépendent du serveur de l'émetteur, ce que signifient les messages d'erreur, et la méthode manuelle fiable pour transmettre votre formulaire.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "guides/problemes-de-compatibilite-des-formulaires-pdf",
    title: "Problèmes de compatibilité des formulaires PDF (XFA et formulaires dynamiques)",
    description:
      "Un formulaire qui s'ouvre dans un logiciel et casse dans un autre utilise en général des fonctions que tous les lecteurs ne prennent pas en charge. Comment repérer un formulaire dynamique, d'où vient le décalage, et quelles options vous restent.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "guides/corriger-les-erreurs-d-un-formulaire-pdf",
    title: "Corriger les erreurs d'un formulaire PDF — la check-list de premiers secours",
    description:
      "Les gestes de premiers secours pour un formulaire PDF récalcitrant : changer de lecteur, retélécharger, mettre à jour, écrire par-dessus, aplatir. À faire avant de chercher une cause précise.",
  },
];
