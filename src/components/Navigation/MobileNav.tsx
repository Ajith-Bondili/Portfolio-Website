import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from './Link';

interface MobileNavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  activeSection: string;
  navLinks: {
    title: string;
    path: string;
    id: string;
  }[];
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  isMenuOpen, 
  toggleMenu, 
  closeMenu, 
  activeSection, 
  navLinks 
}) => {
  return (
    <div className="fixed top-0 left-0 w-full z-40 md:hidden">
      <div className="flex justify-between items-center p-6">
        <Link href="/" className="text-xl font-bold text-sky-400">
          Ajith<span className="text-white">.dev</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white/80 hover:text-sky-400 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-[#0F0F0F]/90 backdrop-blur-lg border-b border-white/10"
          >
            <ul className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    onClick={closeMenu}
                    className={`block py-2 transition-colors hover:text-sky-400 ${
                      activeSection === link.id ? "text-sky-400" : "text-white/80"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;