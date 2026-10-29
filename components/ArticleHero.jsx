import Hero from "@/components/Hero";

export default function ArticleHero({
  headingItalic,
  headingRest,
  paragraphs,
  ctaLabel,
  ctaHref,
}) {
  const heading = headingItalic
    ? [[{ text: headingItalic, italic: true }], headingRest]
    : [headingRest];

  return (
    <Hero
      variant="article"
      heading={heading}
      paragraphs={paragraphs}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    />
  );
}
