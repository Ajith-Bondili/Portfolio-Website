import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

/**
 * HOVER EFFECT CUSTOMIZATION GUIDE:
 * 
 * Speed Control:
 * - duration: 0.15 (enter) / 0.1 (exit) - Lower = faster, Higher = slower
 * - delay: 0 - Add delay for staggered effects (currently 0 for instant response)
 * 
 * Animation Style:
 * - ease: "easeOut", "easeIn", "easeInOut", "linear", "anticipate"
 * - scale: 0.95 to 1 - Change for different grow effects
 * 
 * Visual Style:
 * - Gradient: from-sky-400/10 via-sky-400/5 to-transparent
 * - Border: border-sky-400/20
 * - Shadow: shadow-[0_0_30px_rgba(56,189,248,0.3)]
 */

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
          <AnimatePresence mode="wait">
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-400/10 via-sky-400/5 to-transparent rounded-xl border border-sky-400/20 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                layoutId="hoverBackground"
                // ANIMATION CUSTOMIZATION: Adjust these values for different effects
                initial={{ 
                  opacity: 0, // Start invisible (was incorrectly set to 10)
                  scale: 0.95 // Start slightly smaller
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { 
                    duration: 0.1, // How fast it appears (decrease for faster, increase for slower)
                    ease: "easeOut" // Animation curve - try "easeInOut", "linear", or "anticipate"
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { 
                    duration: 0.1, // How fast it disappears (decrease for faster)
                    delay: 0, // Remove delay for instant response (was 0.1)
                    ease: "easeIn" // Exit animation curve
                  },
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