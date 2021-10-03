import { useQuery } from 'react-query';

import { getUserData } from '~services/Api/userApi';

export function useUserData() {
  const userData = useQuery('userData', () => getUserData());
  return userData;
}
