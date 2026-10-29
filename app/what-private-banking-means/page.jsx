import ArticleHero from "@/components/ArticleHero";

/* =========================================
   SEO
========================================= */

const SITE_URL = "https://www.julioherreravelutini.xyz";
const SLUG = "/what-private-banking-means";
const PAGE_URL = `${SITE_URL}${SLUG}`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const META_TITLE = "What Private Banking Means | Julio Herrera Velutini";
const META_DESCRIPTION =
  "Private banking is built on trust, discretion and long-term thinking. Julio Herrera Velutini explains what a good private banker does for a family.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "what private banking means",
    "private banking",
    "private banker",
    "wealth management",
    "Julio Herrera Velutini",
    "family wealth advisory",
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
      name: "What Private Banking Means",
      item: `${SITE_URL}/what-private-banking-means`,
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
        headingItalic="What Private"
        headingRest="Banking Means"
        paragraphs={[
          "Private banking is often described through its products: accounts, credit lines, custody, portfolio management. At its core, though, it is a relationship built on trust, discretion, and long-term thinking. A good private banker listens first, learning how a family earns, spends, protects, and passes on what it has before recommending a single instrument.",
          "The strongest relationships are advisory rather than transactional: clear fees, honest conversations about risk, and plans that still make sense when markets turn.",
        ]}
        ctaLabel="Reading the Global Markets"
        ctaHref="/reading-the-global-markets"
      />
    </>
  );
}
