import React from 'react';
import { Link } from './Navigation';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-sky-400">
              Ajith<span className="text-white">.dev</span>
            </Link>
          </div>

          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Ajith Bondili. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;