import { Builder } from "@builder.io/react";
import { Button } from "~/src/button";

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [{ name: "title", type: "text" }],
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
});
