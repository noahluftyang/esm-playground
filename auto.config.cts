import { AutoRc } from "auto";

export default function rc(): AutoRc {
  return {
    plugins: ["git-tag", "conventional-commits", "slack"],
    owner: "noahluftyang",
    repo: "esm-playground",
    name: "noahluftyang",
    email: "euihyun.yang.9x@gmail.com",
    onlyPublishWithReleaseLabel: true,
  };
}
