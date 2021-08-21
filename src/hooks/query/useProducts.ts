import { useQuery } from 'react-query';

import {
  getAllCategories,
  getAllProductsData,
} from '~services/Api/productsApi';

export function useAllProducts() {
  const { isLoading, error, data } = useQuery('productsData', () =>
    getAllProductsData()
  );
  if (isLoading) return 'loading';

  if (error) return console.log('houve um erro', error);
  return data;
}

export function useAllCategoryes() {
  const { isLoading, error, data } = useQuery('categoryesData', () =>
    getAllCategories()
  );
  if (isLoading) return 'loading';

  if (error) return console.log('houve um erro', error);
  return data;
}
