import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { AmberPrice, TableHeader } from '../types';

interface PriceTableProps {
  data: AmberPrice[];
  headers: TableHeader[];
}

const getHeaderClasses = (key: string): string => {
  const baseThClasses = 'px-4 py-3 text-xs font-bold text-amber-100 uppercase tracking-wider';
  switch (key) {
    case 'imageUrl':
    case 'small':
    case 'medium':
    case 'large':
    case 'extraLarge':
      return `${baseThClasses} text-center`;
    default:
      return `${baseThClasses} text-left rtl:text-right`;
  }
};


const getColumnClasses = (key: string): string => {
  const baseTdClasses = 'px-4 py-4 text-sm align-top';

  switch (key) {
    case 'imageUrl':
      return `${baseTdClasses} w-28`;
    case 'typeColor':
      return `${baseTdClasses} font-semibold text-amber-900`;
    case 'description':
      return `${baseTdClasses} text-stone-600`;
    case 'inclusion':
      return `${baseTdClasses} text-stone-600`;
    case 'small':
    case 'medium':
    case 'large':
    case 'extraLarge':
      return `${baseTdClasses} text-stone-700 font-medium text-center whitespace-nowrap`;
    case 'notes':
      return `${baseTdClasses} text-stone-600`;
    default:
      return `${baseTdClasses} text-stone-600`;
  }
};

const PriceTable: React.FC<PriceTableProps> = ({ data, headers }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const checkArrows = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const tolerance = 5;
      const hasHorizontalScroll = el.scrollWidth > el.clientWidth + tolerance;
      setShowLeftArrow(hasHorizontalScroll && el.scrollLeft > tolerance);
      setShowRightArrow(hasHorizontalScroll && el.scrollLeft < el.scrollWidth - el.clientWidth - tolerance);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkArrows();
      el.addEventListener('scroll', checkArrows, { passive: true });
      const resizeObserver = new ResizeObserver(checkArrows);
      resizeObserver.observe(el);

      return () => {
        el.removeEventListener('scroll', checkArrows);
        resizeObserver.unobserve(el);
      };
    }
  }, [checkArrows]);

  useEffect(() => {
    const wrapperEl = tableWrapperRef.current;
    if (!wrapperEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0, 
      }
    );
    observer.observe(wrapperEl);

    return () => {
      if (wrapperEl) {
        observer.unobserve(wrapperEl);
      }
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.75;
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const getArrowClasses = (side: 'left' | 'right', isVisible: boolean) => {
    const baseClasses = "top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 rounded-full shadow-lg hover:bg-amber-100/90 transition-all backdrop-blur-sm duration-300";
    const positionClasses = isSticky
      ? `fixed max-lg:fixed ${side === 'left' ? 'left-2' : 'right-2'} lg:absolute ${side === 'left' ? 'lg:left-2' : 'lg:right-2'}`
      : `absolute ${side === 'left' ? 'left-2' : 'right-2'}`;
    const visibilityClasses = isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none';
    
    return `${baseClasses} ${positionClasses} ${visibilityClasses}`;
  };

  return (
    <div ref={tableWrapperRef} className="relative">
      <button
        onClick={() => handleScroll('left')}
        className={getArrowClasses('left', showLeftArrow)}
        aria-label="Scroll table left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="bg-white shadow-xl rounded-2xl overflow-x-auto border border-amber-200/50 scrollbar-hide touch-pan-x"
      >
        <table className="w-full border-collapse min-w-[1200px]">
          <thead className="bg-amber-800 sticky top-0 z-10">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  scope="col"
                  className={getHeaderClasses(header.key)}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-amber-100">
            {data.map((item) => (
              <tr key={item.typeColor} className="transition-colors duration-200 odd:bg-amber-50/50 even:bg-white hover:bg-amber-100/60">
                {headers.map((header) => (
                  <td key={header.key} className={getColumnClasses(header.key)}>
                    {header.key === 'imageUrl' && item.imageUrl ? (
                      <div className="w-24 h-24 mx-auto bg-stone-100/50 rounded-lg flex items-center justify-center p-1 shadow-md border border-amber-100">
                        <img
                          src={item.imageUrl}
                          alt={item.typeColor}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      item[header.key as keyof AmberPrice]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => handleScroll('right')}
        className={getArrowClasses('right', showRightArrow)}
        aria-label="Scroll table right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PriceTable;