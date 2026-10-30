const BASE = "https://www.julioherreravelutini.xyz";

// Update the date ONLY when that page's content really changes.
const PAGES = [
  { path: "", date: "2026-10-29", priority: 1, changeFrequency: "monthly" },
  { path: "/julio-herrera-velutini-biography", date: "2026-10-29", priority: 0.9, changeFrequency: "monthly" },
  { path: "/what-private-banking-means", date: "2026-10-29", priority: 0.8, changeFrequency: "monthly" },
  { path: "/reading-the-global-markets", date: "2026-10-29", priority: 0.8, changeFrequency: "monthly" },
  { path: "/building-a-lasting-legacy", date: "2026-10-29", priority: 0.8, changeFrequency: "monthly" },
  { path: "/principles-for-a-lasting-future", date: "2026-10-29", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap() {
  return PAGES.map((p) => ({
    url: BASE + p.path,
    lastModified: new Date(p.date),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
