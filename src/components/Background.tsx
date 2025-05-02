import React from 'react';

interface BackgroundProps {
  showGrid: boolean;
}

const Background: React.FC<BackgroundProps> = ({ showGrid }) => {
  if (!showGrid) return null;
  
  return (
    <>
      <div className="grid-background" />
      <div className="grid-dots" />
      <div className="grid-overlay" />
    </>
  );
};

export default Background;