import { cn } from "@/lib/utils";

const colorMap = {
  brass: "oklch(0.7087 0.0845 60.96 / 0.17)",
  magenta: "oklch(0.6634 0.1052 346.74 / 0.17)",
} as const;

const colorFade = {
  brass: "oklch(0.7087 0.0845 60.96 / 0.06)",
  magenta: "oklch(0.6634 0.1052 346.74 / 0.06)",
} as const;

const sizeMap = {
  sm: "h-[200px] w-[200px]",
  md: "h-[400px] w-[400px]",
  lg: "h-[600px] w-[600px]",
} as const;

const blurMap = {
  sm: "blur(80px)",
  md: "blur(100px)",
  lg: "blur(120px)",
} as const;

export function GlowEffect({
  color = "brass",
  size = "md",
  className,
}: {
  color?: "brass" | "magenta";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full",
        sizeMap[size],
        className
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${colorMap[color]} 0%, ${colorFade[color]} 40%, transparent 70%)`,
        filter: blurMap[size],
      }}
    />
  );
}
