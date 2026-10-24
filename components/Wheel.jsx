// One wheel, drawn around (cx, 156). transform-box keeps the rotation
// centred on the wheel itself instead of the SVG origin.
export default function Wheel({ cx }) {
  const cy = 156;
  return (
    <g className="wheel" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
      <circle cx={cx} cy={cy} r="32" fill="#0b0d12" />
      <circle cx={cx} cy={cy} r="19" fill="#c9ced8" />
      <path
        d={`M${cx} ${cy - 16}v32M${cx - 16} ${cy}h32M${cx - 11} ${cy - 11}l22 22M${cx + 11} ${cy - 11}l-22 22`}
        stroke="#59606d"
        strokeWidth="3"
      />
    </g>
  );
}
