import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "~/src/builder";
import { environments } from "~/src/environments";

builder.init(environments.BUILDER_API_KEY);

interface Props {
  params: {
    page: string[];
  };
}

export default async function Page(props: Props) {
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      prerender: false,
    })
    .toPromise();

  console.log(
    "enter",
    props.params.page,
    "/" + (props?.params?.page?.join("/") || ""),
    content,
  );

  return (
    <>
      <div>hi</div>
      <RenderBuilderContent content={content} />
    </>
  );
}
