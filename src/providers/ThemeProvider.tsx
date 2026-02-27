"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

function getStoredTheme(): Theme | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/);
  return match ? (match[1] as Theme) : null;
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function resolveTheme(initialTheme?: Theme): Theme {
  if (typeof window === "undefined") return initialTheme ?? "dark";
  return getStoredTheme() ?? getSystemTheme();
}

function setThemeCookie(theme: Theme) {
  document.cookie = `theme=${theme};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

export function ThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme?: Theme;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => resolveTheme(initialTheme));

  // On mount: sync DOM attribute and remove no-transition guard
  useEffect(() => {
    const resolved = resolveTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", resolved);
    requestAnimationFrame(() => {
      document.documentElement.removeAttribute("data-no-transition");
    });
  }, [initialTheme]);

  // Listen for system preference changes when no manual override
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    function handleChange(e: MediaQueryListEvent) {
      if (!getStoredTheme()) {
        const next = e.matches ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
      }
    }
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      setThemeCookie(next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
