"use client";

import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function Container({ asChild, className, ...props }: Props) {
  const Component = asChild ? Slot : "section";

  return (
    <Component
      className={classNames("container mx-auto", className)}
      {...props}
    />
  );
}
