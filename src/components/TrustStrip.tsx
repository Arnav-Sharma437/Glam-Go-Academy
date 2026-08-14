"use client";

import { useEffect, useState } from "react";

function AnimatedValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const numMatch = value.match(/^(\d+)(.*)$/);
    const ratioMatch = value.match(/^(\d+):(\d+)$/);

    if (numMatch) {
      const targetNum = parseInt(numMatch[1], 10);
      const suffix = numMatch[2];
      const duration = 1800; // 1.8 seconds duration
      const startTime = performance.now();

      const run = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress * (2 - progress); // Ease out quad
        const currentVal = Math.floor(easeProgress * targetNum);
        
        setDisplayValue(`${currentVal}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(run);
        }
      };
      requestAnimationFrame(run);
    } else if (ratioMatch) {
      const leftTarget = parseInt(ratioMatch[1], 10);
      const rightTarget = parseInt(ratioMatch[2], 10);
      const duration = 1500;
      const startTime = performance.now();

      const run = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress * (2 - progress);
        
        const currentLeft = Math.floor(easeProgress * leftTarget);
        const currentRight = Math.floor(easeProgress * rightTarget);

        setDisplayValue(`${currentLeft}:${currentRight}`);

        if (progress < 1) {
          requestAnimationFrame(run);
        }
      };
      requestAnimationFrame(run);
    } else {
      // Non-numeric words like "London" remain static
      setDisplayValue(value);
    }
  }, [value]);

  return <span>{displayValue}</span>;
}

export default function TrustStrip() {
  const highlights = [
    { value: "500+", label: "Students Trained" },
    { value: "London", label: "Est. Studio Location" },
    { value: "100%", label: "Hands-on Training" },
    { value: "1:1", label: "Expert Tutor Support" }
  ];

  return (
    <section className="border-y border-muted-light/60 bg-bg py-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-muted-light/60 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index > 1 ? "pt-4 md:pt-0" : ""
              }  ${index === 1 ? "pt-0 md:pt-0" : ""}`}
            >
              <span className="font-sans text-xl md:text-2xl text-text font-bold mb-0.5">
                <AnimatedValue value={item.value} />
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-muted font-sans font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
