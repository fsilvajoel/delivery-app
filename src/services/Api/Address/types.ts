/* eslint-disable camelcase */

export interface IAddressData {
  UF: string;
  cep: number;
  city: string;
  complement: string;
  district: string;
  id: number;
  main: boolean;
  name: string;
  number: number;
  reference: string;
  street: string;
  user: number;
  customer: number;
}

export interface IPaymentMethodsData {
  name: string;
}

export interface IAddressDeliveryDistrict {
  delivery: boolean;
  district: number;
  district_name: string;
  id: number;
  tax: number;
  tax_value: number;
}
