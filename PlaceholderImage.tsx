"use client";

type PlaceholderImageProps = {
  alt: string;
  className?: string;
  variant?: "warm" | "sage" | "dark";
};

/**
 * Placeholder élégant en attendant les vraies photos du gîte.
 * Reprend le motif des colombages normands en filigrane plutôt
 * qu'une icône générique, pour rester ancré dans le sujet.
 * À remplacer par de vraies photos dans /public/images/.
 */
export default function PlaceholderImage({
  alt,
  className,
  variant = "warm",
}: PlaceholderImageProps) {
  const palettes = {
    warm: { base: "#efe6d8", line: "#b5673a", tint: "#f8f3ec" },
    sage: { base: "#e9e0d2", line: "#b3946f", tint: "#f4efe6" },
    dark: { base: "#2a2018", line: "#cd8a5f", tint: "#1d1610" },
  };
  const p = palettes[variant];

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: p.base,
      }}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <rect width="400" height="300" fill={p.base} />
        <g stroke={p.line} strokeWidth="1.4" opacity="0.35" fill="none">
          <line x1="0" y1="0" x2="160" y2="300" />
          <line x1="400" y1="0" x2="240" y2="300" />
          <line x1="80" y1="0" x2="0" y2="180" />
          <line x1="320" y1="0" x2="400" y2="180" />
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="150" x2="400" y2="150" />
          <line x1="0" y1="230" x2="400" y2="230" />
        </g>
        <g opacity="0.5">
          <circle cx="200" cy="150" r="1.5" fill={p.line} />
        </g>
      </svg>
    </div>
  );
}
