import { useQuery } from 'react-query';

import {
  getAllUserAddress,
  getIsDeliveryAddress,
} from '~services/Api/Address/addressApi';

export function useAddressData() {
  const addressData = useQuery('userAddressData', () => getAllUserAddress());
  return addressData;
}
export function useDelliveryAddress() {
  const deliveryDistricts = useQuery('deliveryDistricts', () =>
    getIsDeliveryAddress()
  );
  return deliveryDistricts;
}
