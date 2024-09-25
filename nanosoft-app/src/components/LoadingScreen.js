import React from "react";
import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 8,
        transition: {
          duration: 1,
          type: "spring",
          velocity: 2,
          // delay: 2,
          // damping: 300,
          ease: "easeInOut",
        },
      }}
      className="fixed w-full h-[100vh] top-0 left-0 z-[100] 
     flex justify-center items-center"
    >
      <motion.div className="relative h-full w-full bg-slate-100 flex items-center flex-col justify-center">
        <div className="h-[40%] text-center text-3xl">
          <img
            alt=""
            className="w-full h-full object-cover animate-spinaround"
            src="Trades with algo-6.png"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;
