import { Container } from "~/src/Container";
import { Header } from "~/src/Header";

export default function StoriesPage() {
  return (
    <>
      <Header />
      <Container asChild={true}>
        <main>stories</main>
      </Container>
    </>
  );
}
