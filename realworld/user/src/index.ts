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
    username: z.string(),
  }),
});

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

    const [_prefix, token] = (request.headers.get("Authorization") ?? "").split(
      "Token "
    );

    switch (request.method) {
      case "GET": {
        const { data, error } = await supabase.auth.getUser(token);

        if (error != null) {
          return new Response(error.message, { status: error.status });
        }

        return new JsonResponse({
          user: {
            bio: null,
            email: data.user?.email,
            image: null,
            token,
            username: null,
          },
        });
      }
      case "PUT": {
        const body = await request.json();

        const { user } = BodySchema.parse(body);

        const { data, error } = await supabase.auth.updateUser({
          password: user.password,
        });

        if (error != null) {
          return new Response(error.message, { status: error.status });
        }

        return new JsonResponse({
          user: {
            bio: null,
            email: data.user?.email,
            image: null,
            token,
            username: null,
          },
        });
      }
      default:
        return new Response("Not found.", { status: 404 });
    }
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
