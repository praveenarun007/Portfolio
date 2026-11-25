"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EDITORIAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface MaskedRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function MaskedReveal({
  children,
  delay = 0,
  className = "",
}: MaskedRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay,
          ease: EDITORIAL_EASE,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function SectionReveal({
  children,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
