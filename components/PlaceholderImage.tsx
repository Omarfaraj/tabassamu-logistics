type Props = {
  label: string;
  aspect?: string;
};

export default function PlaceholderImage({ label, aspect = "4 / 5" }: Props) {
  return (
    <figure className="plate" style={{ width: "100%" }}>
      <div className="plate-placeholder" style={{ aspectRatio: aspect }}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 7a2 2 0 0 1 2-2h2l1.5-2h7L17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
        <span>{label}</span>
      </div>
    </figure>
  );
}
