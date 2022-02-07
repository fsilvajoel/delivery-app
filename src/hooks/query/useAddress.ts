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
  const { isLoading, error, data } = useQuery('deliveryDistricts', () =>
    getIsDeliveryAddress()
  );

  if (isLoading)
    return [
      {
        id: 0,
        district_name: 'Loading...',
        delivery: false,
        district: 0,
        tax: 0,
        tax_value: 0,
      },
    ];

  if (error)
    return console.log('Error in useAllEventCategories fetch hook:', error);

  return data;
}
