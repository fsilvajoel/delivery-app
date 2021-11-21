export interface IDrawerProps {
  className?: string;
  direction: 'left' | 'right' | 'bottom';
  buttonContent: React.ReactFragment;
  children: React.ReactNode;
  size: number;
}
