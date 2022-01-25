export interface IAddressDrawerProps {
  isAddressDrawerOpen: boolean;
  onRequestClose: () => void;
}

export interface IToastState {
  open: boolean;
  severity: 'success' | 'error';
}
