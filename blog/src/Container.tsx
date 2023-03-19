import classNames from "classnames";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: Props) {
  return (
    <section
      className={classNames("container mx-auto", className)}
      {...props}
    />
  );
}
