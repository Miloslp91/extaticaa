"use client";

import { motion } from "framer-motion";

export function FireIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-3.527 2.07-5.965 4.243-8.293C10.72 6.098 12 4.618 12 2c0 3.027 3 5 5 8 1.5 2.25 2 4.5 2 6 0 3.866-3.134 7-7 7zm-2-7c0 1.105.895 2 2 2s2-.895 2-2c0-1.105-1-2-2-3-1 1-2 1.895-2 3z" />
    </svg>
  );
}

export function DrumIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <ellipse cx="32" cy="18" rx="22" ry="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="10" y1="18" x2="14" y2="50" stroke="currentColor" strokeWidth="2.5" />
      <line x1="54" y1="18" x2="50" y2="50" stroke="currentColor" strokeWidth="2.5" />
      <ellipse cx="32" cy="50" rx="18" ry="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="18" y1="14" x2="46" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="15" y1="18" x2="49" y2="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {/* Drum sticks */}
      <line x1="24" y1="4" x2="30" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="4" x2="34" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="4" r="2" />
      <circle cx="40" cy="4" r="2" />
    </svg>
  );
}

export function TribalPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
      <path
        d="M0 10 L10 5 L20 10 L30 5 L40 10 L50 5 L60 10 L70 5 L80 10 L90 5 L100 10 L110 5 L120 10 L130 5 L140 10 L150 5 L160 10 L170 5 L180 10 L190 5 L200 10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M0 15 L10 10 L20 15 L30 10 L40 15 L50 10 L60 15 L70 10 L80 15 L90 10 L100 15 L110 10 L120 15 L130 10 L140 15 L150 10 L160 15 L170 10 L180 15 L190 10 L200 15"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  );
}

export function TribalDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center gap-4 py-8 px-8"
    >
      <div className="flex-1 max-w-24">
        <TribalPattern className="w-full h-5 text-vine" />
      </div>
      <FireIcon className="w-5 h-5 text-accent/60" />
      <DrumIcon className="w-7 h-7 text-vine/70" />
      <FireIcon className="w-5 h-5 text-accent/60" />
      <div className="flex-1 max-w-24">
        <TribalPattern className="w-full h-5 text-vine" />
      </div>
    </motion.div>
  );
}

export function FloatingEmbers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/30"
          style={{
            left: `${15 + i * 14}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -120, -200],
            x: [0, (i % 2 === 0 ? 1 : -1) * 20, (i % 2 === 0 ? -1 : 1) * 10],
            opacity: [0.6, 0.3, 0],
            scale: [1, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
