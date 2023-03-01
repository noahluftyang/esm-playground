import { Router } from "https://deno.land/x/http_router/mod.ts";
import { createClient } from "https://deno.land/x/supabase/mod.ts";
import { z } from "https://deno.land/x/zod/mod.ts";

export interface Env {
  SUPABASE_ANON_KEY: string;
  SUPABASE_URL: string;
}

const router = new Router({
  base: "/api",
});

export default {
  fetch(request: Request, env: Env) {
    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

    router.post("/users", async (request) => {
      const body = await request.json();

      const BodySchema = z.object({
        user: z.object({
          email: z.string().email(),
          password: z.string(),
          username: z.string(),
        }),
      });

      const { user: userBody } = BodySchema.parse(body);

      const { error, session, user } = await supabase.auth.signUp({
        email: userBody.email,
        password: userBody.password,
      });

      if (error != null) {
        return new Response("Invalid login credentials.", { status: 401 });
      }

      return new JsonResponse({
        user: {
          bio: null,
          email: user!.email,
          image: null,
          token: session!.access_token,
          username: null,
        },
      });
    });

    return router.handler(request);
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
