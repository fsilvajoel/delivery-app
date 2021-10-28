import { useQuery } from 'react-query';

import {
  getAllDataPartner,
  getPaymentMethodsPartner,
} from '~services/Api/Partner/partner';

export function usePartner() {
  const partnerData = useQuery('partnerData', () => getAllDataPartner());
  return partnerData;
}
export function usePaymentMethod() {
  const partnerData = useQuery('paymentMethodData', () =>
    getPaymentMethodsPartner()
  );
  return partnerData;
}
