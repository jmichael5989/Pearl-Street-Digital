"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="relative h-10 w-px bg-white/10 overflow-hidden"
    >
      <motion.span
        className="absolute left-0 top-0 h-2 w-px bg-brand-teal"
        initial={{ y: -8 }}
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
