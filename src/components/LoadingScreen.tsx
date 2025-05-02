import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 800); // Wait for fade-out animation
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(loadingTimer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <div className="loading-logo-circle"></div>
        <div className="loading-logo-circle"></div>
        <div className="loading-logo-circle"></div>
        <div className="loading-logo-inner"></div>
      </div>
      <div className="loading-text">AJITH BONDILI</div>
    </div>
  );
};

export default LoadingScreen;