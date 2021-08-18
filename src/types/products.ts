export interface IPrices {
  price: string;
  unit: string;
  legalIdentity: string;
}

export interface IProducts {
  category: number;
  delivery: boolean;
  description: string;
  id: number;
  image: string;
  name: string;
  obs: string;
  created: Date;
  // flavors: array<Iflavors>
  // prices: Array<IPrices>;
  stock: boolean;
}
