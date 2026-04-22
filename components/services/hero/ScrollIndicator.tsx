"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="relative h-10 w-[2px] bg-white/20 overflow-hidden rounded-full"
    >
      <motion.span
        className="absolute left-0 top-0 h-3 w-[2px] bg-brand-teal rounded-full"
        initial={{ y: -12 }}
        animate={{ y: 40 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
