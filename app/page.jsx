import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Content after the hero, so the page keeps scrolling once the pin releases. */}
      <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
        <p className="max-w-[24ch] font-display text-[clamp(1.6rem,4vw,3rem)] font-bold leading-tight">
          Page content continues below the hero.
        </p>
      </section>
    </>
  );
}
