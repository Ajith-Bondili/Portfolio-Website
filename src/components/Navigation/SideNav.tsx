import React from 'react';
import Link from './Link';

interface SideNavProps {
  activeSection: string;
  navLinks: {
    title: string;
    path: string;
    id: string;
  }[];
}

const SideNav: React.FC<SideNavProps> = ({ activeSection, navLinks }) => {
  return (
    <nav className="side-nav hidden md:flex">
      {navLinks.map((link) => (
        <Link 
          key={link.id} 
          href={link.path} 
          className={`side-nav-item ${activeSection === link.id ? "active" : ""}`}
        >
          <span className="side-nav-label">{link.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SideNav;