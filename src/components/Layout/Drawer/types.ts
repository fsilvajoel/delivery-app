export interface IDrawerProps {
  className?: string;
  direction: 'left' | 'right' | 'bottom';
  buttonContent: React.ReactNode;
  children: React.ReactNode;
  size: number;
}
