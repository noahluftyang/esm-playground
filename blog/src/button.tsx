import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = forwardRef(function Button(
  { asChild, ...props }: Props,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const Component = asChild ? Slot : "button";

  return <Component ref={ref} {...props} />;
});
