import { useQuery } from 'react-query';

import { getAllDataPartner } from '~services/Api/Partner/partner';

export function usePartner() {
  const partnerData = useQuery('partnerData', () => getAllDataPartner());
  return partnerData;
}
