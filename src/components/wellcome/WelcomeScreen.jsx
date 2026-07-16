/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const WelcomeScreen = ({ onFinish , wellcomeMessage}) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen bg-blue-500 flex items-center justify-center z-[9999]"
      initial={{ scale: 0, borderRadius: "50%" }}
      animate={{ scale: 1, borderRadius: "0%" }}
      exit={{ scale: 0, borderRadius: "50%" }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={(definition) => {
        if (definition.scale === 0) onFinish();
      }}
    >
      <motion.h1
        className="text-white text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {wellcomeMessage}
      </motion.h1>
    </motion.div>
  );
};

export  {WelcomeScreen};
