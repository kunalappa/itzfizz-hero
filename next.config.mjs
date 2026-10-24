// Static export so the site can be hosted on GitHub Pages.
// On GitHub Pages a project site lives at /<repo-name>, so the workflow
// passes that path in NEXT_PUBLIC_BASE_PATH. Locally it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
