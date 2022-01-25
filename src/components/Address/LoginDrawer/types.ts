export interface ILoginDrawerProps {
  isLoginDrawerOpen: boolean;
  onRequestClose: () => void;
}

export interface IToastState {
  open: boolean;
  severity: 'success' | 'error';
}

export interface IRegisterUserData {
  username: string;
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
}

export interface ILoginUserData {
  username: string;
  email: string;
  password: string;
}

export interface IUserData{
  email: string;
  first_name: string;
  last_name: string;
  cpf: string;
  phone: string;
  address: string;
  address_str: string;
  description: string;
  education: string;
  hide_education: string;
  hide_email: string;
  hide_phone: string;
  hide_position: string;
  highlighted: string;
  id: 1897
  image: string;
  is_staff: string;
  position: string;
}