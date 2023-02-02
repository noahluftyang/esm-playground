import withBundleAnalyzer from "@next/bundle-analyzer";
import withMDX from "@next/mdx";

const shouldAnalyze = (process.env.ANALYZE = "true");

/** @type {import('next').NextConfig} */
export default withBundleAnalyzer({
  enabled: shouldAnalyze,
})(
  withMDX()({
    pageExtensions: ["mdx", "ts", "tsx"],
    experimental: {
      appDir: true,
      mdxRs: true,
    },
  })
);
