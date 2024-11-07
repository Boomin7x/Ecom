"use client";
import { useAnimation, motion } from "framer-motion";
import React, { HTMLAttributes, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const slideFrom = {
  left: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  },
  right: {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 },
  },
  bottom: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
  },
  top: {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  },
};

type TDir = keyof typeof slideFrom;

const AnimateSlideIn = ({
  children,
  dir,
  className,
}: {
  children: ReactNode;
  dir: TDir;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Adjusts how much of the element should be in view to trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
      variants={{
        visible: slideFrom[dir]?.visible,
        hidden: slideFrom[dir]?.hidden,
      }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSlideIn;
