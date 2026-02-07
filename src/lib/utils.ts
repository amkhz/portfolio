import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with clsx and resolves Tailwind conflicts with twMerge.
 * Use this whenever you need to conditionally apply or merge Tailwind classes.
 *
 * Example:
 *   cn("px-4 py-2", isActive && "bg-accent-primary", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
