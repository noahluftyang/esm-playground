import { ComponentType, ReactNode } from "react";

export function useMDXComponents(components: {
  [component: string]: ComponentType;
}) {
  return {
    ...components,
    h1: (props: { children: ReactNode }) => {
      return <h1 {...props} />;
    },
  };
}
