"use client";

import { useEffect, useRef } from "react";

interface ScrollBackgroundEffectProps {
  children: React.ReactNode;
  backgrounds: Array<{
    id: string;
    from: string;
    to: string;
  }>;
}

const ScrollBackgroundEffect: React.FC<ScrollBackgroundEffectProps> = ({
  children,
  backgrounds,
}) => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionsRef.current) return;

      const scrollPosition = window.scrollY;
      const sections = sectionsRef.current.querySelectorAll(".region-section");

      sections.forEach((section, index) => {
        if (index >= backgrounds.length) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;

        // Calculate how far through the section we've scrolled
        const scrollPercentage = Math.max(
          0,
          Math.min(
            1,
            (scrollPosition - sectionTop + window.innerHeight * 0.5) /
              (sectionHeight + window.innerHeight * 0.5)
          )
        );

        // Apply transformations based on scroll percentage
        const bgElement = document.getElementById(
          `region-bg-${backgrounds[index].id}`
        );
        if (bgElement) {
          bgElement.style.opacity = scrollPercentage.toString();
          bgElement.style.transform = `scale(${1 + scrollPercentage * 0.05})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [backgrounds]);

  return (
    <div className='relative'>
      {/* Background layers for different regions */}
      {backgrounds.map((bg) => (
        <div
          key={bg.id}
          id={`region-bg-${bg.id}`}
          className='fixed inset-0 opacity-0 transition-all duration-1000 ease-out -z-40'
          style={{
            background: `linear-gradient(to bottom, ${bg.from}, ${bg.to})`,
          }}
        />
      ))}

      {/* Content container */}
      <div ref={sectionsRef}>{children}</div>
    </div>
  );
};

export default ScrollBackgroundEffect;
