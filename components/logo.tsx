// components/Logo.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Logo = () => {
  const logoRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;

    gsap.to(mask, {
      attr: { y: "110%" }, // Animate the mask position
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: logoRef.current,
        start: "-15% bottom",
        end: "bottom 30%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="logo-container overflow-hidden absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg
        className="w-[100%]"
        ref={logoRef}
        width="660.06384"
        height="660.45514"
        viewBox="0 0 447.06384 431.45514"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="white"
        strokeWidth="0.5"
      >
        <defs>
          {/* Define the blur filter */}
          <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            {/* Adjust stdDeviation for more/less blur */}
          </filter>

          {/* Define the mask with a blurred rectangle */}
          <mask id="reveal-mask">
            <rect
              ref={maskRef}
              x="0"
              y="-120"
              width="100%"
              height="120"
              transform="rotate(30 50% 50%)"
              fill="white"
              filter="url(#blur-filter)" // Apply the blur filter
            />
          </mask>
        </defs>
        <g opacity="0.7" mask="url(#reveal-mask)">
          <path
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: 2.414,
              strokeOpacity: 1,
            }}
            d="M 2.856742,43.350886 178.01074,428.36719 h 67.909 l 122.936,-270.232 -84.232,35.879 -72.659,159.715 -111.4626,-245.014 z"
          />
          <path
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: 2.414,
              strokeOpacity: 1,
            }}
            d="m 302.82574,154.01819 31.092,-75.214804 111.939,-76.5162003 -0.022,364.7910043 -58.613,61.379 -1.377,-315.98 z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
