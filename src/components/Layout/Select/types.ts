import { ITheme } from '~interfaces/theme';

export interface ISelectProps extends Partial<ITheme> {
  label?: string;
  value: string | number;
  errorMessage?: string;

  errors?: boolean;
  borderless?: boolean;
  arrow?: boolean;

  children: JSX.Element[];
  onChange: (value: string) => void;
}
