import { STATS } from "@/lib/stats";

// The number inside each .count span is animated from 0 to data-to by GSAP.
export default function Stats() {
  return (
    <ul
      data-stats
      className="absolute bottom-0 left-0 right-0 z-10 m-0 grid h-[calc(30vh-26px)] list-none grid-cols-2 items-center gap-x-6 gap-y-3 p-0 px-[6vw] md:grid-cols-4"
    >
      {STATS.map((stat) => (
        <li key={stat.label} className="stat">
          <p className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none text-white">
            <span className="count" data-to={stat.value}>
              0
            </span>
            %
          </p>
          <p className="mt-2 max-w-[24ch] text-[15px] text-neutral-400">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}
