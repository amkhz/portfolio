import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left — copyright */}
          <p className="font-body text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Justin Hernandez
          </p>

          {/* Right — links */}
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="font-heading text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent-primary"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="font-heading text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent-primary"
            >
              About
            </Link>
            <a
              href="mailto:hello@justinhernandez.design"
              className="font-heading text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-accent-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
