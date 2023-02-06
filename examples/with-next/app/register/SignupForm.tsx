"use client";

import { signup } from "@realworld/sdk/src";
import { useForm } from "react-hook-form";

export function SignupForm() {
  const { handleSubmit, register } = useForm<{
    email: string;
    password: string;
    username: string;
  }>();

  return (
    <form
      onSubmit={handleSubmit(async (fields) => {
        const result = await signup(fields);
      })}
    >
      <fieldset className="form-group">
        <input
          autoFocus={true}
          className="form-control form-control-lg"
          placeholder="Username"
          {...register("username", { required: true })}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </fieldset>
      <fieldset className="form-group">
        <input
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
      </fieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
    </form>
  );
}
