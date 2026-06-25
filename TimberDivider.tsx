type TimberDividerProps = {
  className?: string;
};

/**
 * Élément signature de la charte : un croisillon de colombage stylisé,
 * utilisé comme séparateur entre sections plutôt qu'un simple trait.
 * Ancré dans l'architecture réelle de la maison (pans de bois normands).
 */
export default function TimberDivider({ className }: TimberDividerProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <svg width="64" height="20" viewBox="0 0 64 20" fill="none">
        <line x1="0" y1="10" x2="24" y2="10" stroke="#b5673a" strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="10" x2="64" y2="10" stroke="#b5673a" strokeWidth="1" opacity="0.4" />
        <path
          d="M28 2 L36 18 M36 2 L28 18"
          stroke="#b5673a"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
