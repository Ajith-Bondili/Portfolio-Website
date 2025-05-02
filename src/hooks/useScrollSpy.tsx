import { useState, useEffect, RefObject } from 'react';

interface ScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSpy<T extends HTMLElement>(
  sectionRefs: Record<string, RefObject<T>>,
  options?: ScrollSpyOptions
) {
  const [activeSection, setActiveSection] = useState<string>("");
  
  useEffect(() => {
    const { threshold = 0.3, rootMargin = "0px 0px -70% 0px" } = options || {};
    
    const observers: IntersectionObserver[] = [];
    
    const callback = (entries: IntersectionObseriesEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find which section this element belongs to
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
    });
    
    // Observe all section elements
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    observers.push(observer);
    
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionRefs, options]);
  
  return activeSection;
}

// Fix TypeScript error
interface IntersectionObseriesEntry extends IntersectionObserverEntry {}