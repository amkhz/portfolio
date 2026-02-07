import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-deep/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Name / logo — left side */}
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-text-primary transition-colors duration-200 hover:text-accent-primary"
          >
            Justin Hernandez
          </Link>

          {/* Nav links — right side */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-heading text-sm font-medium tracking-wide text-text-secondary transition-colors duration-200 hover:text-accent-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
