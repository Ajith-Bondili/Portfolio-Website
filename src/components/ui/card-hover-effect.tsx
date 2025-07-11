import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-400/10 via-sky-400/5 to-transparent rounded-xl border border-sky-400/20 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                layoutId="hoverBackground"
                initial={{ opacity: 10, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.1, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.1, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-20">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}; 