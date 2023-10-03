import { builder } from "@builder.io/sdk";
import { Container } from "~/src/Container";
import { Header } from "~/src/Header";
import { environments } from "~/src/environments";

builder.init(environments.BUILDER_API_KEY);

export default async function StoriesPage() {
  const items = await builder.getAll("story");

  console.log(items);

  return (
    <>
      <Header />
      <Container asChild={true}>
        <main>stories</main>
        {items.map((item) => {
          return <div key={item.id}>{item.data.title}</div>;
        })}
      </Container>
    </>
  );
}
