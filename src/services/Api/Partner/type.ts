/* eslint-disable camelcase */

export interface IPartnerData {
  id: number;
  name: string;
  slug: string;
  logo: string;
  logo_mobile: string;
  favicon: string;
  about: string;
  privacy_policy: string;
  delivery: boolean;
  open: boolean;
  take_away: boolean;
}

export interface IPaymentMethodsData {
  name: string;
}
