"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(100).fill(1);
  const cols = new Array(100).fill(1);
  
  // Sky blue theme colors matching your portfolio
  const colors = [
    "#38bdf8", // sky-400 - your primary color
    "#0ea5e9", // sky-500 - slightly darker
    "#0284c7", // sky-600 - even darker
    "#0369a1", // sky-700 - darkest
    "#7dd3fc", // sky-300 - lighter
    "#bae6fd", // sky-200 - very light
    "#38bdf8", // sky-400 repeated for higher probability
    "#0ea5e9", // sky-500 repeated
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)} {...rest}>
      {/* Main boxes grid */}
      <div
        style={{
          transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(1.2) rotate(0deg) translateZ(0)`,
        }}
        className="absolute -top-1/4 left-1/4 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4"
      >
        {rows.map((_, i) => (
          <motion.div
            key={`row` + i}
            className="relative h-8 w-16 border-l border-slate-800/30"
          >
            {cols.map((_, j) => (
              <motion.div
                whileHover={{
                  backgroundColor: getRandomColor(),
                  boxShadow: `0 0 20px ${getRandomColor()}`,
                  transition: { duration: 0.1 },
                }}
                key={`col` + j}
                className="relative h-8 w-16 border-t border-r border-slate-900"
              >
                  {j % 2 === 0 && i % 2 === 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-600/20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

      {/* Subtle bottom gradient fade - much softer transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore); 