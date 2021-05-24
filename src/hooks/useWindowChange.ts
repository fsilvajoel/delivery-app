import { useEffect } from 'react';

export function useWindowWidthChange(callback: any) {
  useEffect(() => {
    const handleResize = () => callback(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
}
