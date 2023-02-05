import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;

  SUPABASE_ANON_KEY: string;
  SUPABASE_URL: string;
}

const BodySchema = z.object({
  user: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Not found.", { status: 404 });
    }

    const body = await request.json();

    const { user } = BodySchema.parse(body);
    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

    const { data, error } = await supabase.auth.signInWithPassword(user);

    if (error != null) {
      return new Response("Invalid login credentials.", { status: 401 });
    }

    return new JsonResponse({
      user: {
        bio: null,
        email: data.user?.email,
        image: null,
        token: data.session?.access_token,
        username: null,
      },
    });
  },
};

class JsonResponse extends Response {
  constructor(body?: Record<string, any> | null, init?: RequestInit) {
    super(JSON.stringify(body), {
      ...init,
      headers: {
        ...init?.headers,
        "content-type": "application/json;charset=UTF-8",
      },
    });
  }
}
