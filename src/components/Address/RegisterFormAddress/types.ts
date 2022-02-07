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
