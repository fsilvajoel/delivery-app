export interface ISelectProps {
  label?: string;
  value: string | number;
  errorMessage?: string;

  errors?: boolean;
  borderless?: boolean;
  arrow?: boolean;

  children: JSX.Element[];
  onChange: (value: string) => void;
}
