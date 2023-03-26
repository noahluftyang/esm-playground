import withMDX from "@next/mdx";

export default withMDX()({
  experimental: {
    appDir: true,
    mdxRs: true,
  },
});
