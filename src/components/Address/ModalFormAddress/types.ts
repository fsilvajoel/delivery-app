export interface IAddressData {
  name: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  reference: string;
  uf: string;
  district: string;
  main: boolean;
}
export interface DataSendAddress extends IAddressData {
  user: string;
}
