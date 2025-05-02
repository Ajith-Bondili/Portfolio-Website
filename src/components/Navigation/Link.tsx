import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Handle scroll to section for anchor links
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    
    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };
  
  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;