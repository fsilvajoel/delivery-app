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
  main: boolean;
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
