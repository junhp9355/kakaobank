import { useCallback, useEffect, useRef } from "react";

const Scroll = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 0, 0)";
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
        current.style.transitionTimingFunction =
          "cubic-bezier(0.6, 0.2, 0.1, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, -100%, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const option = {
      root: null,
      rootmargin: "0px",
      threshold: 0.3,
    };
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, option);
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      opacity: 1,
      transform: handleDirection(direction),
    },
  };
};
export default Scroll;
