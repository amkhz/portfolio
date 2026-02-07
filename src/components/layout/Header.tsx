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
      {/* Skip-to-main link — visually hidden until focused */}
      <a
        href="#main"
        className="absolute left-4 top-3 z-[60] -translate-y-16 rounded-md bg-accent-primary px-4 py-2 font-heading text-sm font-semibold text-text-inverse transition-transform duration-normal focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
      >
        Skip to main content
      </a>

      <Container>
        <nav aria-label="Primary navigation" className="flex h-16 items-center justify-between">
          {/* Name / logo — left side */}
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-text-primary transition-colors duration-200 hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
            aria-label="Justin Hernandez — Home"
          >
            Justin Hernandez
          </Link>

          {/* Nav links — right side */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center font-heading text-sm font-medium tracking-wide text-text-secondary transition-colors duration-200 hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
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
