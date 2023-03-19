import getConfig from "next/config";
import z from "zod";

const PublicRuntimeConfigSchema = z.object({
  GOOGLE_ANALYTICS_ID: z.string(),
});

const config = getConfig();

export const environments = PublicRuntimeConfigSchema.parse(
  config.publicRuntimeConfig
);
