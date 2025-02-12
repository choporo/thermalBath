"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
