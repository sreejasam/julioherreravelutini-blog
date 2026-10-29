/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old page removed: send visitors and search engines to the new biography page
  async redirects() {
    return [
      {
        source: "/who-is-julio-herrera-velutni",
        destination: "/julio-herrera-velutini-biography",
        permanent: true,
      },
      {
        source: "/who-is-julio-herrera-velutini",
        destination: "/julio-herrera-velutini-biography",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
