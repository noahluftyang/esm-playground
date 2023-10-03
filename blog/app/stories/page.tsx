import { builder } from "@builder.io/sdk";
import { Container } from "~/src/Container";
import { Header } from "~/src/Header";
import { environments } from "~/src/environments";

builder.init(environments.BUILDER_API_KEY);

export default async function Page() {
  const items = await getStories();

  return (
    <>
      <Header />
      <Container asChild={true}>
        {items.map((item) => {
          return <div key={item.id}>{item.data!.title}</div>;
        })}
      </Container>
    </>
  );
}

function getStories() {
  return builder.getAll("story");
}
