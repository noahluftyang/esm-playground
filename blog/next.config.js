import withMDX from "@next/mdx";

export default withMDX()({
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true,
  },
});
