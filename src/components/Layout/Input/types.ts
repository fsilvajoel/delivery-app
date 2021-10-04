import { FocusEvent } from 'react';

type TRefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export interface IInputProps {
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  value: string;
  placeholder: string;
  required: boolean;
  pattern?: RegExp;
  validate?: (value: any) => boolean | string;
  errors: boolean | undefined;
  requiredMsg?: string;
  patternMsg?: string;
  errorMessage: string | undefined;
  validateMsg?: string;
  readonly?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
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
