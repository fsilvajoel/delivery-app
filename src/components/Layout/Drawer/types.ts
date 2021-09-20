import { UIEvent } from 'react';

export interface IDrawerProps {
  className?: string;
  theme?: 'black' | 'white';
  direction?: 'left' | 'right' | 'bottom';

  open: boolean;
  fullScreen?: boolean;
  closeButton?: boolean;

  onClose: () => void;
  onScroll: (event: UIEvent<HTMLDivElement>) => void;

  children: React.ReactNode;
}
