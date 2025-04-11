// components/animations/FadeInOnScroll.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInOnScroll = ({
  children,
  direction = "up", // or 'left', 'right', 'down'
  delay = 0,
  duration = 0.8,
  className = "",
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Direction-based variants
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "down":
        return { y: -100, opacity: 0 };
      case "up":
      default:
        return { y: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
