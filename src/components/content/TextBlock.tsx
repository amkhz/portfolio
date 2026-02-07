import React from "react";

interface TextBlockProps {
  children: string;
}

/**
 * Parses inline formatting in a text string:
 * - **bold text** → <strong> in text-primary font-semibold
 * - [link text](url) → <a> in accent color with hover underline
 */
function parseInline(text: string): React.ReactNode[] {
  // Pattern matches **bold**, [link](url), or plain text segments
  const tokenPattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenPattern);

  return parts.map((part, i) => {
    // Bold: **text**
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Link: [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-accent-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-deep"
        >
          {linkMatch[1]}
        </a>
      );
    }

    // Plain text
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export function TextBlock({ children }: TextBlockProps) {
  const paragraphs = children.split("\n\n");

  return (
    <div className="max-w-[65ch]">
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className="mb-4 font-body text-base leading-normal text-text-secondary last:mb-0"
        >
          {parseInline(paragraph)}
        </p>
      ))}
    </div>
  );
}
