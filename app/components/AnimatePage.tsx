import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC } from "react";

// ROUTER
import { usePathname } from "next/navigation";

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            // opacity: 0,
            x: "100vw",
          },
          animateState: {
            x: 0,
            // opacity: 1,
          },
          exitState: {
            x: "-100vw",
            // opacity: 1,
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
