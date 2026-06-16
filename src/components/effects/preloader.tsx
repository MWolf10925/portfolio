"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/logo";

/**
 * Full-screen intro that draws the MW logo, then lifts away to reveal the page.
 * Shown once per browser session so return scrolls aren't interrupted.
 */
export function Preloader() {
  // Default true so the very first paint is covered (no content flash).
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("intro-seen", "1");
      setShow(false);
    }, 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.12, y: -10, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Logo animated className="h-28 w-28 sm:h-32 sm:w-32" />
          </motion.div>

          {/* subtle brand wordmark under the logo */}
          <motion.span
            className="absolute bottom-[34%] font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Matthew Wolf
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
