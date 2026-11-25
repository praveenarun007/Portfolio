"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed bottom-5 right-5 z-50"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="pointer-events-auto flex items-center gap-2.5 border border-obsidian bg-obsidian px-4 py-3 font-mono text-xs text-white"
          >
            <span className="flex h-4 w-4 items-center justify-center bg-klein text-white">
              <Check className="h-3 w-3" strokeWidth={2} />
            </span>
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
