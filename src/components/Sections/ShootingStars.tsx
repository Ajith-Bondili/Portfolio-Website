import React from 'react';

const ShootingStars: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="night-sky">
        <div className="shooting-star shooting-star-1"></div>
        <div className="shooting-star shooting-star-2"></div>
        <div className="shooting-star shooting-star-3"></div>
        <div className="shooting-star shooting-star-4"></div>
        <div className="shooting-star shooting-star-5"></div>
      </div>
    </div>
  );
};

export default ShootingStars;