"use client";

import { signin } from "@realworld/sdk";
import { useForm } from "react-hook-form";

export function SigninForm() {
  const { handleSubmit, register } = useForm<{
    email: string;
    password: string;
  }>();

  return (
    <form
      onSubmit={handleSubmit(async (fields) => {
        const result = await signin(fields);
      })}
    >
      <fieldset className="form-group">
        <input
          autoFocus={true}
          className="form-control form-control-lg"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
    </form>
  );
}
