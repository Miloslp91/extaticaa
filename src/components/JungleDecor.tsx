"use client";

import { motion } from "framer-motion";

/* Hanging vines on left and right sides of sections */
export function HangingVines({ side = "left" }: { side?: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div className={`absolute top-0 ${isLeft ? "left-0" : "right-0"} h-full pointer-events-none overflow-hidden`}>
      <svg
        className={`h-full w-16 md:w-24 text-vine/20 ${isLeft ? "" : "scale-x-[-1]"}`}
        viewBox="0 0 100 800"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Main vine */}
        <path d="M20 0 Q30 100 15 200 Q5 300 25 400 Q35 500 10 600 Q5 700 20 800" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Secondary vine */}
        <path d="M50 0 Q40 150 55 250 Q65 350 45 500 Q35 600 50 750" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* Leaves on main vine */}
        <path d="M15 120 Q5 110 0 95 Q10 100 20 115" fill="currentColor" opacity="0.4" />
        <path d="M20 280 Q30 265 40 260 Q35 275 22 285" fill="currentColor" opacity="0.3" />
        <path d="M10 420 Q0 405 -5 390 Q5 400 15 415" fill="currentColor" opacity="0.35" />
        <path d="M25 560 Q35 545 45 540 Q40 555 27 565" fill="currentColor" opacity="0.3" />
        <path d="M12 700 Q2 685 -3 670 Q7 680 17 695" fill="currentColor" opacity="0.25" />
        {/* Small leaves on secondary vine */}
        <path d="M55 180 Q65 170 70 160 Q65 175 55 182" fill="currentColor" opacity="0.2" />
        <path d="M45 380 Q35 365 30 355 Q38 365 48 378" fill="currentColor" opacity="0.2" />
        <path d="M50 600 Q60 585 65 575 Q58 590 50 602" fill="currentColor" opacity="0.2" />
      </svg>
    </div>
  );
}

/* Large tropical leaf decoration */
export function TropicalLeaf({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      viewBox="0 0 120 200"
      fill="none"
    >
      {/* Main leaf shape */}
      <path
        d="M60 10 Q90 40 95 80 Q98 120 80 160 Q70 180 60 195 Q50 180 40 160 Q22 120 25 80 Q30 40 60 10Z"
        fill="currentColor"
        opacity="0.08"
      />
      {/* Center vein */}
      <path d="M60 15 L60 190" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      {/* Side veins */}
      <path d="M60 50 Q75 45 88 55" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 50 Q45 45 32 55" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 90 Q80 82 92 95" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 90 Q40 82 28 95" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 130 Q75 125 85 135" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 130 Q45 125 35 135" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 165 Q70 162 78 170" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
      <path d="M60 165 Q50 162 42 170" stroke="currentColor" strokeWidth="0.7" opacity="0.1" />
    </motion.svg>
  );
}

/* Jungle floor ground mist effect */
export function JungleMist({ position = "bottom" }: { position?: "bottom" | "top" }) {
  const isTop = position === "top";
  return (
    <div className={`absolute ${isTop ? "top-0" : "bottom-0"} left-0 right-0 h-32 pointer-events-none ${isTop ? "rotate-180" : ""}`}>
      <div className="w-full h-full bg-gradient-to-t from-jungle/40 via-jungle/15 to-transparent" />
    </div>
  );
}

/* Fireflies / jungle particles */
export function Fireflies() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${8 + (i * 7.5) % 85}%`,
            top: `${10 + (i * 13) % 80}%`,
            backgroundColor: i % 3 === 0 ? "rgba(200, 149, 108, 0.4)" : "rgba(90, 122, 72, 0.5)",
          }}
          animate={{
            opacity: [0, 0.8, 0.3, 0.7, 0],
            scale: [0.5, 1.2, 0.8, 1, 0.5],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
