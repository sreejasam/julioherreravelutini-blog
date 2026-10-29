import ArticleHero from "@/components/ArticleHero";

/* =========================================
   SEO
========================================= */

const SITE_URL = "https://www.julioherreravelutini.xyz";
const SLUG = "/principles-for-a-lasting-future";
const PAGE_URL = `${SITE_URL}${SLUG}`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const META_TITLE = "Principles for a Lasting Future | Julio Herrera Velutini";
const META_DESCRIPTION =
  "Lasting financial futures are built on habits: spend less than you earn, keep liquidity, diversify and let compounding work. Read Julio Herrera Velutini.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "principles for a lasting future",
    "financial habits",
    "long-term investing",
    "compounding",
    "financial discipline",
    "Julio Herrera Velutini",
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
    type: "article",
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

/* JSON-LD: page schema */
const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: META_TITLE,
  description: META_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Julio Herrera Velutini" },
  about: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Julio Herrera Velutini" },
  primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
  mainEntityOfPage: PAGE_URL,
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
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
      name: "Principles for a Lasting Future",
      item: `${SITE_URL}/principles-for-a-lasting-future`,
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
        headingItalic="Principles for"
        headingRest="a Lasting Future"
        paragraphs={[
          "Lasting financial futures are rarely built on brilliance; they are built on habits. Spend less than you earn, keep liquidity for the unexpected, diversify, keep costs low, and let compounding work across decades rather than quarters. These ideas are simple, which is precisely why they are so often neglected.",
          "Just as important is the discipline of learning: reading widely, questioning assumptions, and taking advice from people whose incentives are aligned with yours. A well-informed mind makes calmer decisions, especially under pressure.",
        ]}
        ctaLabel="Back to Home"
        ctaHref="/"
      />
    </>
  );
}
