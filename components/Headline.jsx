const WORDS = ["WELCOME", "ITZFIZZ"];

// Every letter is its own <span class="ch"> so GSAP can animate them one by one.
// The visual letters are hidden from screen readers; aria-label carries the text.
export default function Headline() {
  return (
    <h1
      aria-label="Welcome ItzFizz"
      className="relative z-10 mt-[9vh] flex gap-[0.9em] whitespace-nowrap px-4 font-display text-[clamp(1.4rem,7vw,7rem)] font-bold leading-none"
      data-headline
    >
      {WORDS.map((word) => (
        <span key={word} aria-hidden="true" className="flex gap-[0.3em]">
          {[...word].map((letter, i) => (
            <span key={i} className="ch inline-block">
              {letter}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
