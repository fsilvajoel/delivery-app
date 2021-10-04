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

export interface IAddress {
  user: number;
  name: string;
  street: string;
  number: number;
  complement: string;
  reference: string;
  UF: string;
  city: string;
  cep: string;
  district: string;
  id: number;
}

export interface IDataOfCepSearch {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

export interface ICepSearch {
  res: IDataOfCepSearch[];
}
