import { useEffect, useRef } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Optional: Remove the class if you want the animation to repeat
            // entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return elementRef;
};

// Alternative hook for multiple elements
export const useScrollAnimationMultiple = (threshold = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-in-scroll, .fade-in-scroll-left, .fade-in-scroll-right, .fade-in-scroll-top, .fade-in-scroll-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [threshold]);
};
