import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header>
      <Container className="flex items-center justify-between">
        <Link className="text-xl" href="/">
          의현
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/stories">스토리</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
