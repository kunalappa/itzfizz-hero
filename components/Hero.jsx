"use client";

import { useRef } from "react";
import Headline from "./Headline";
import Car from "./Car";
import Stats from "./Stats";
import useHeroAnimation from "@/hooks/useHeroAnimation";

export default function Hero() {
  // `scope` is the element GSAP uses as the root for all selectors
  // and as the ScrollTrigger trigger.
  const scope = useRef(null);
  useHeroAnimation(scope);

  return (
    <div ref={scope}>
      <section className="hero relative flex h-screen w-full flex-col items-center overflow-hidden">
        <Headline />

        {/* Car sits on the top edge of the road */}
        <div className="absolute bottom-[30vh] left-0 right-0 h-0">
          <div className="car absolute bottom-0 left-0 w-[clamp(220px,34vw,520px)] will-change-transform">
            <Car />
          </div>
        </div>

        {/* Lane marking, then the road surface under it */}
        <div className="absolute bottom-[30vh] left-0 right-0 translate-y-[26px] overflow-hidden">
          <div className="road-lines will-change-transform" data-road-lines />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[calc(30vh-26px)] bg-asphalt" />

        <Stats />
      </section>
    </div>
  );
}
