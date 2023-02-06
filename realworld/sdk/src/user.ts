import ContentType from "content-type";
import { client } from "./client";

export function signin(params: { email: string; password: string }) {
  return client.post("api/users/login", {
    json: {
      user: params,
    },
  });
}

export async function signup(params: {
  email: string;
  password: string;
  username: string;
}) {
  const result = await client.post("api/users", {
    json: { user: params },
  });

  const _contentType = result.headers.get("Content-Type");

  if (_contentType == null) {
    throw new Error("error");
  }

  const { type } = ContentType.parse(_contentType);

  if (type !== "application/json") {
    return result.text();
  }

  return result.json<{ user: { email: string; token: string } }>();
}
