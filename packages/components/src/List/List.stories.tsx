import { type Meta } from "@storybook/react";
import { List } from "./List";

const meta: Meta = {
  component: List,
  title: "List",
};

export function Basic() {
  return (
    <List>
      <li>1</li>
    </List>
  );
}

export default meta;
