import { grid } from "~/styles/grid";

export default function HomePage() {
  return (
    <section className={grid()}>
      <Sidebar />
      <main>hello world123123</main>
    </section>
  );
}

function Sidebar() {
  return <aside>sidebar</aside>;
}
