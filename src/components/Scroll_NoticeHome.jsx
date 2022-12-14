import { useCallback, useEffect, useRef } from "react";

const Scroll = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 100%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(30%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      case "diagonal":
        return "translate3d(-50%, -50%, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "ease";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
        // current.style.backgroundColor = "#333b58";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 1 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      // backgroundColor: "#559cde",
      transform: handleDirection(direction),
    },
  };
};
export default Scroll;
