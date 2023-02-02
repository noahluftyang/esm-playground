import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
export default withMDX()({
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
});
