import { IProductsInCart } from 'src/types/cart';

export interface IDeliverySend {
  partner: string;
  user: number;
  obs: string;
  address: number;
  delivery: boolean;
  paymentmethod: string;
  products: IProductsInCart[];
}
