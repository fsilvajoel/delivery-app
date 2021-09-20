import { ITheme } from '~interfaces/theme';

type TRefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export interface IInputProps extends Partial<ITheme> {
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  value: string;
  className?: string;
  placeholder: string;
  patternMsg?: string;
  validateMsg?: string;
  requiredMsg?: string;
  errorMessage: string | undefined;

  required: boolean;
  readonly?: boolean;
  errors: boolean | undefined;

  pattern?: RegExp;
  children?: React.ReactNode;

  onFocus?: () => void;

  validate?: (value: any) => boolean | string;
  register: ({
    required,
    pattern,
    validate,
  }: {
    required?: { value: boolean; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: any) => boolean | string;
  }) => TRefReturn;
}
