import Hero from "@/components/Hero";

/* =========================================
   SEO
========================================= */

const SITE_URL = "https://www.julioherreravelutini.xyz";
const PAGE_URL = `${SITE_URL}/`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const META_TITLE = "Julio Herrera Velutini | Insights, Ideas & Perspectives";
const META_DESCRIPTION =
  "Thoughts on finance, global markets, family legacy, and the principles that shape a lasting future, from banker and entrepreneur Julio Herrera Velutini.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "Julio Herrera Velutini",
    "Julio Herrera Velutini blog",
    "private banking",
    "global markets",
    "family legacy",
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
    type: "website",
    locale: "en_US",
    siteName: "Julio Herrera Velutini",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
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

/* JSON-LD: website + person + home page schema */
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Julio Herrera Velutini",
      description: META_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Julio Herrera Velutini",
      jobTitle: "Banker and entrepreneur",
      url: SITE_URL,
      image: `${SITE_URL}/images/hero-portrait.jpg`,
      knowsAbout: ["Private banking", "International finance", "Global markets", "Family legacy"],
      mainEntityOfPage: `${SITE_URL}/julio-herrera-velutini-biography`,
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: META_TITLE,
      description: META_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
  ],
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
      <Hero
        variant="home"
        heading={["JULIO", "HERRERA", "VELUTINI"]}
        paragraphs={["Insights on Finance, Global Markets, and Lasting Family Legacy"]}
        ctaLabel="Julio Herrera Velutini Biography"
        ctaTitle="Julio Herrera Velutini Biography"
        ctaHref="/julio-herrera-velutini-biography"
      />
    </>
  );
}
