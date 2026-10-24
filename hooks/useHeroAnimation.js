"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Intro animation (runs once, time-based):
 *   headline letters -> car -> stats, with the numbers counting up.
 */
function playIntro(counters) {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(".ch", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.04 })
    // The car uses xPercent so it never fights the scroll animation, which uses x.
    .fromTo(".car", { opacity: 0, xPercent: -15 }, { opacity: 1, xPercent: 0, duration: 1 }, "-=0.6")
    .fromTo(".stat", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.18 }, "-=0.5");

  counters.forEach((el, i) => {
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: Number(el.dataset.to),
        duration: 1.4,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(counter.value);
        },
      },
      1.4 + i * 0.18
    );
  });

  return tl;
}

/**
 * Scroll animation (tied to scroll progress, not time):
 * the hero is pinned for 150% of the viewport height while a scrubbed
 * timeline plays. `scrub: 1.2` smooths the motion toward the scroll position.
 */
function createScrollAnimation(trigger) {
  const letters = gsap.utils.toArray(".ch");
  const middle = (letters.length - 1) / 2;
  const carTravel = () => window.innerWidth - document.querySelector(".car").offsetWidth * 1.1;

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger,
      start: "top top",
      end: "+=150%",
      pin: ".hero",
      scrub: 1.2,
      anticipatePin: 1,
      invalidateOnRefresh: true, // re-measure the car travel on resize
    },
  });

  tl
    // Car drives from left to right
    .to(".car", { x: carTravel, ease: "power1.inOut", duration: 1 }, 0)
    // Wheels spin in proportion to the distance travelled
    .to(".wheel", { rotation: 1080, duration: 1 }, 0)
    // Lane markings stream backwards to suggest speed
    .to("[data-road-lines]", { x: "-50%", duration: 1 }, 0)
    // Letters spread outward from the centre of the headline
    .to(".ch", { x: (i) => (i - middle) * 10, duration: 0.7 }, 0.1)
    // Headline lifts and fades away
    .to("[data-headline]", { y: -40, opacity: 0, duration: 0.5 }, 0.55)
    // Stats drift down and fade at the end
    .to("[data-stats]", { y: 30, opacity: 0, duration: 0.3 }, 0.8);

  return tl;
}

export default function useHeroAnimation(scope) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // gsap.context scopes selectors to `scope` and lets us undo everything on unmount.
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".count");

      if (reduceMotion) {
        counters.forEach((el) => (el.textContent = el.dataset.to));
        return;
      }

      counters.forEach((el) => (el.textContent = "0"));
      playIntro(counters);
      createScrollAnimation(scope.current);
    }, scope);

    return () => ctx.revert();
  }, [scope]);
}
