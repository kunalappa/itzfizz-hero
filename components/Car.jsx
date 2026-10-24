import Wheel from "./Wheel";

// Flat-colour SVG car, so no image files are needed.
// Swap this for an <img> if you want to use a real car photo.
export default function Car() {
  return (
    <svg viewBox="0 0 520 190" className="block h-auto w-full" role="img" aria-label="Sports car">
      <ellipse cx="260" cy="177" rx="235" ry="7" fill="#000" opacity=".3" />

      {/* body */}
      <path
        d="M22 140 C22 118 40 108 80 102 L150 94 C180 62 220 50 270 50 C320 50 358 66 384 94 L452 102 C490 108 502 122 500 140 L500 150 C500 158 494 162 486 162 L36 162 C28 162 22 158 22 150 Z"
        fill="#1f6f6b"
      />
      {/* windows */}
      <path d="M168 94 C192 68 226 60 268 60 C312 60 342 72 364 94 Z" fill="#12191d" />
      <path d="M268 60 L268 94" stroke="#1f6f6b" strokeWidth="4" />
      {/* lights and door line */}
      <rect x="470" y="118" width="26" height="9" rx="4" fill="#fff6d6" />
      <rect x="26" y="120" width="20" height="8" rx="4" fill="#c7372f" />
      <path d="M120 140 L400 140" stroke="#154d4a" strokeWidth="2" />

      <Wheel cx={120} />
      <Wheel cx={400} />
    </svg>
  );
}
