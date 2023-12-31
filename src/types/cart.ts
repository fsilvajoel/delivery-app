/* eslint-disable camelcase */
export interface IProductsInCart {
  name: string;
  product: number;
  unitary_value: number;
  quantity: number;
  observation?: string;
  unity: 'fractioned' | 'integer';
}
