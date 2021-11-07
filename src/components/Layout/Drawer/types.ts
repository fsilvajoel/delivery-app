export interface IDrawerProps {
  className?: string;
  direction: 'left' | 'right' | 'bottom';
  buttonContent: string;
  children: React.ReactNode;
  size: number;
}
