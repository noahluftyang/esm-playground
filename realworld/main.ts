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

    // login
    router.post("/users/login", async (request) => {
      const body = await request.json();

      const BodySchema = z.object({
        user: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
      });
      const { user: userBody } = BodySchema.parse(body);

      const { error, session, user } = await supabase.auth.signIn(userBody);

      if (error != null) {
        return new Response("Invalid login credentials.", { status: 401 });
      }

      return new JsonResponse({
        user: {
          bio: null,
          email: user?.email,
          image: null,
          token: session?.access_token,
          username: null,
        },
      });
    });

    // signup
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

      const { error, session, user } = await supabase.auth.signUp(
        {
          email: userBody.email,
          password: userBody.password,
        },
        {
          data: {
            username: userBody.username,
          },
        }
      );

      if (error != null) {
        return new Response("Invalid login credentials.", {
          status: 401,
        });
      }

      return new JsonResponse({
        user: {
          bio: null,
          email: user!.email,
          image: null,
          token: session!.access_token,
          username: user?.user_metadata.username,
        },
      });
    });

    // get current user
    router.get("/user", async (request) => {
      const [_prefix, token] = (
        request.headers.get("Authorization") ?? ""
      ).split("Token ");

      const { error, user } = await supabase.auth.api.getUser(token);

      if (error != null) {
        return new Response(error.message, { status: error.status });
      }

      return new JsonResponse({
        user: {
          bio: null,
          email: user?.email,
          image: null,
          token,
          username: user?.user_metadata.username,
        },
      });
    });

    // update user
    router.put("/user", async (request) => {
      const [_prefix, token] = (
        request.headers.get("Authorization") ?? ""
      ).split("Token ");

      const body = await request.json();

      const BodySchema = z.object({
        userBody: z.object({
          bio: z.string(),
          email: z.string().email(),
          image: z.string().url(),
          password: z.string(),
          username: z.string(),
        }),
      });
      const { userBody } = BodySchema.parse(body);

      const { error, user } = await supabase.auth.update({
        password: userBody.password,
        data: {
          bio: userBody.bio,
          image: userBody.image,
          username: userBody.username,
        },
      });

      if (error != null) {
        return new Response(error.message, { status: error.status });
      }

      return new JsonResponse({
        user: {
          bio: user?.user_metadata.bio,
          email: user?.email,
          image: user?.user_metadata.image,
          token,
          username: user?.user_metadata.username,
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
