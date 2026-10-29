import ArticleHero from "@/components/ArticleHero";

/* =========================================
   SEO
========================================= */

const SITE_URL = "https://www.julioherreravelutini.xyz";
const SLUG = "/building-a-lasting-legacy";
const PAGE_URL = `${SITE_URL}${SLUG}`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const META_TITLE = "Building a Lasting Legacy | Julio Herrera Velutini";
const META_DESCRIPTION =
  "A family legacy is more than an inheritance. Julio Herrera Velutini on open conversations, governance, wills and trusts, and educating the next generation.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "building a lasting legacy",
    "family legacy",
    "estate planning",
    "wills and trusts",
    "family governance",
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
      name: "Building a Lasting Legacy",
      item: `${SITE_URL}/building-a-lasting-legacy`,
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
        headingItalic="Building a"
        headingRest="Lasting Legacy"
        paragraphs={[
          "A family legacy is more than an inheritance. Wealth handed down without context, purpose, or preparation rarely lasts beyond a generation or two; what endures is the understanding that travels with it. Families that last tend to talk openly about money, values, and responsibility long before any transfer takes place.",
          "Practical foundations help too: clear governance, well-drafted wills and trusts, and a shared sense of what the family is trying to sustain. Educating the next generation matters as much as the assets themselves.",
        ]}
        ctaLabel="Principles for a Lasting Future"
        ctaHref="/principles-for-a-lasting-future"
      />
    </>
  );
}
