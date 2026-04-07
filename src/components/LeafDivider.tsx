"use client";

import { motion } from "framer-motion";

export default function LeafDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="leaf-divider"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-vine">
        <path
          d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8.17 20C12.76 20 17 14.58 17 8ZM8.17 18C7.68 18 7.22 17.9 6.78 17.75L8.47 13.5C9.36 14.74 10.67 15.62 12.17 15.9C11.07 17.22 9.65 18 8.17 18Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
}
