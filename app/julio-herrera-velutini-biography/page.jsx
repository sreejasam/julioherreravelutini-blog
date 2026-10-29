import ArticleHero from "@/components/ArticleHero";

/* =========================================
   SEO
========================================= */

const SITE_URL = "https://www.julioherreravelutini.xyz";
const SLUG = "/julio-herrera-velutini-biography";
const PAGE_URL = `${SITE_URL}${SLUG}`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const META_TITLE = "Julio Herrera Velutini Biography: Banker and Family Legacy";
const META_DESCRIPTION =
  "Read the biography of Julio Herrera Velutini, an Italian-Venezuelan banker and entrepreneur from a family with deep roots in Latin American banking, and explore his work in private banking and international finance.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "Julio Herrera Velutini",
    "Julio Herrera Velutini biography",
    "Julio Herrera Velutini banker",
    "Herrera Velutini family",
    "private banking",
    "international finance",
  ],
  authors: [{ name: "Julio Herrera Velutini", url: SITE_URL }],
  creator: "Julio Herrera Velutini",
  publisher: "Julio Herrera Velutini",
  alternates: { canonical: PAGE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    siteName: "Julio Herrera Velutini",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    firstName: "Julio",
    lastName: "Herrera Velutini",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* JSON-LD: profile page schema */
const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: META_TITLE,
  description: META_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Julio Herrera Velutini" },
  primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Julio Herrera Velutini",
    jobTitle: "Banker and entrepreneur",
    description:
      "Italian-Venezuelan banker and entrepreneur from a family with deep roots in Latin American banking.",
    url: SITE_URL,
    mainEntityOfPage: PAGE_URL,
    image: `${SITE_URL}/images/hero-portrait.jpg`,
    knowsAbout: ["Private banking", "International finance", "Global markets", "Family legacy"],
  },
};

/* JSON-LD: breadcrumb */
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Julio Herrera Velutini Biography",
      item: PAGE_URL,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleHero
        headingItalic="Julio Herrera"
        headingRest="Velutini Biography"
        paragraphs={[
          "Julio Herrera Velutini is an Italian-Venezuelan banker and entrepreneur from a family with deep roots in Latin American banking. This biography covers his background, his work in private banking and international finance, and the family history behind it.",
          "From a banking heritage that spans generations to a career across Europe and the Americas, it offers a clear introduction to the banker behind the name, with more on private banking, global markets, and legacy planning in the articles that follow.",
        ]}
        ctaLabel="What Private Banking Means"
        ctaHref="/what-private-banking-means"
      />
    </>
  );
}
