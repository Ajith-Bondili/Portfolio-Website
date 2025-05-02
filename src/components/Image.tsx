import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className = '' }) => {
  // Simple implementation of lazy loading
  const [isLoaded, setIsLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = src;
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '100px' }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <div 
          className={`bg-white/5 animate-pulse ${className}`} 
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
        />
      )}
      <img
        ref={imgRef}
        src=""  // Set empty source initially for lazy loading
        data-src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${!isLoaded ? 'hidden' : ''}`}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

export default Image;