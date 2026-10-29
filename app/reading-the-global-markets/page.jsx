import ArticleHero from "@/components/ArticleHero";

/* =========================================
   SEO
========================================= */

const SITE_URL = "https://www.julioherreravelutini.xyz";
const SLUG = "/reading-the-global-markets";
const PAGE_URL = `${SITE_URL}${SLUG}`;
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

const META_TITLE = "Reading the Global Markets | Julio Herrera Velutini";
const META_DESCRIPTION =
  "Global markets move at different speeds. Julio Herrera Velutini on separating signal from noise, slower forces like inflation, and diversifying across regions.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "reading the global markets",
    "global markets",
    "investing",
    "diversification",
    "inflation and liquidity",
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
      name: "Reading the Global Markets",
      item: `${SITE_URL}/reading-the-global-markets`,
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
        headingItalic="Reading the"
        headingRest="Global Markets"
        paragraphs={[
          "Global markets are not one story but many, moving at different speeds. Interest rates, currencies, commodity prices, and political events all feed into one another, and a development in one region can reshape conditions in another within days. Reading them well begins with separating signal from noise.",
          "Disciplined investors look past daily headlines to the slower forces underneath, such as inflation, productivity, demographics, and liquidity. They diversify across regions and asset classes, because no one can predict which will lead next.",
        ]}
        ctaLabel="Building a Lasting Legacy"
        ctaHref="/building-a-lasting-legacy"
      />
    </>
  );
}
