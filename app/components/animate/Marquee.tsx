import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import "./animate.css";
import { cn } from "@/lib/utils";

export interface IMarquee {
  children: React.ReactNode;
  order?: keyof typeof animateOrder;
  classnName?: HTMLAttributes<HTMLDivElement>["className"];
}
const animateOrder = {
  1: { initialX: "100%", delay: 0 },
  2: { initialX: "200%", delay: 5 },
};
const Marquee = ({ children, classnName }: IMarquee) => {
  return (
    <div className={cn("flex relative gap-16  overflow-hidden", classnName)}>
      <motion.div
        initial={{
          x: "0",
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: 30, // Adjust speed
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-full flex-direction-row flex-shrink-0 gap-16 whitespace-normal "
      >
        {children}
      </motion.div>
      <motion.div
        initial={{
          x: "0",
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: 30, // Adjust speed
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-full  flex-direction-row gap-16 whitespace-normal  flex-shrink-0"
      >
        {children}
      </motion.div>
      <div
        className="absolute w-full h-full before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] before:absolute before:left-0 before:w-[30%] before:h-full
       after:bg-gradient-to-r after:from-transparent after:to-background after:content-[''] after:absolute after:right-0 after:w-[30%] after:h-full"
      />
    </div>
  );
};

export default Marquee;
