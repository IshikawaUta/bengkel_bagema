"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "./loader";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Hide loader on initial load after a short delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // When route changes, set exiting to true to trigger exit animation
    setIsExiting(true);
    const timer = setTimeout(() => {
        // After exit animation, set loading to false and exiting to false
        setLoading(false);
        setIsExiting(false);
    }, 500); // This should match the exit animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {(loading || isExiting) && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-background"
        >
          <Loader />
        </motion.div>
      )}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
