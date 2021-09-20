import { ChangeEvent } from 'react';

import { ITheme } from '~interfaces/theme';

export interface IDdi {
  name: string;
  ddi: string;
  flag: string;
  phoneMask: string[];
  minLength: number;
}

type TRefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export interface IInputPhoneProps extends Partial<ITheme> {
  name: string;
  placeholder: string;
  required: boolean;
  value: string;
  register: ({ required, minLength }: { required?: boolean; minLength?: number }) => TRefReturn;
  errors: boolean | undefined;
  errorMsg: string;
  onChangeDdiValue: (ddi: string) => void;
  onChangePhoneValue: (phone: string) => void;
  onChangeMinLength?: (minLength: number) => void;
}

export interface IInputMaskProps {
  id: string;
  name: string;
  value: string;
  autoComplete: string;
  placeholder: string;
  className: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onFocus: () => void;
}
