import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "~/src/builder";
import { environments } from "~/src/environments";

builder.init(environments.BUILDER_API_KEY);

export default async function Page({
  params,
}: {
  params: {
    story: string;
  };
}) {
  const content = await builder
    .get("story", {
      userAttributes: {
        urlPath: `/stories/${params.story}`,
      },
    })
    .toPromise();

  return (
    <div>
      hi123
      <RenderBuilderContent content={content} />
    </div>
  );
}
