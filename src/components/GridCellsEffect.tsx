import React, { useEffect, useRef } from 'react';

interface GridCellsEffectProps {
  showGrid: boolean;
}

const GridCellsEffect: React.FC<GridCellsEffectProps> = ({ showGrid }) => {
  const gridCellsRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!showGrid) return;

    // Create grid cells
    const createGridCells = () => {
      const cellSize = 40;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const numCols = Math.ceil(viewportWidth / cellSize);
      const numRows = Math.ceil(viewportHeight / cellSize);

      // Clear existing grid cells
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      } else {
        // Create grid container if it doesn't exist
        const container = document.createElement('div');
        container.className = 'grid-cells-container';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = '0';
        container.style.pointerEvents = 'none';
        document.body.appendChild(container);
        containerRef.current = container;
      }

      // Create new cells
      const cells: HTMLDivElement[] = [];
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const cell = document.createElement('div');
          cell.className = 'grid-cell';
          cell.style.left = `${col * cellSize}px`;
          cell.style.top = `${row * cellSize}px`;
          containerRef.current?.appendChild(cell);
          cells.push(cell);
        }
      }

      return cells;
    };

    // Initialize grid cells
    gridCellsRef.current = createGridCells();

    // Function to randomly highlight cells
    const highlightRandomCells = () => {
      const cells = gridCellsRef.current;
      if (!cells.length) return;

      // Number of cells to highlight (reduced to 1-4)
      const numToHighlight = Math.floor(Math.random() * 4) + 1;

      for (let i = 0; i < numToHighlight; i++) {
        // Select a random cell
        const randomIndex = Math.floor(Math.random() * cells.length);
        const cell = cells[randomIndex];

        // Add highlight class
        cell.classList.add('highlight');

        // Remove highlight class after animation completes
        setTimeout(() => {
          cell.classList.remove('highlight');
        }, 2000);
      }

      // Schedule next highlight less frequently (between 1000ms and 2500ms)
      setTimeout(highlightRandomCells, Math.random() * 1500 + 1000);
    };

    // Start highlighting cells
    const timerId = setTimeout(highlightRandomCells, 500);

    // Handle window resize
    const handleResize = () => {
      gridCellsRef.current = createGridCells();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timerId);
      if (containerRef.current) {
        containerRef.current.remove();
        containerRef.current = null;
      }
    };
  }, [showGrid]);

  return null; // This is a purely functional component with no visual output
};

export default GridCellsEffect;