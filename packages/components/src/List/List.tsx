import { ForwardedRef, OlHTMLAttributes, forwardRef } from "react";

interface Props extends OlHTMLAttributes<HTMLUListElement> {}

export const List = forwardRef(function List(
  props: Props,
  ref: ForwardedRef<HTMLUListElement>
) {
  return (
    <ul
      css={{
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
      ref={ref}
      {...props}
    />
  );
});
