const BASE = "https://www.julioherreravelutini.xyz";
const PATHS = [
  "",
  "/julio-herrera-velutini-biography",
  "/what-private-banking-means",
  "/reading-the-global-markets",
  "/building-a-lasting-legacy",
  "/principles-for-a-lasting-future",
];

export default function sitemap() {
  return PATHS.map((p) => ({
    url: BASE + p,
    lastModified: new Date(),
    priority: p === "" ? 1 : 0.8,
  }));
}
