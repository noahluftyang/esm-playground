import { z } from "zod";

const Environments = z.object({
  BUILDER_API_KEY: z.string(),
  GOOGLE_ANALYTICS_ID: z.string(),
});

export const environments = Environments.parse({
  BUILDER_API_KEY: "2ebf954836244d35adb08bf401b5c37e",
  GOOGLE_ANALYTICS_ID: "G-WSCH49D0HP",
});
