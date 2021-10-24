import { partner } from '../apiConstants';
import { instance } from '../http';
import { IDeliverySend } from './type';

export const getAllCategories = async () => {
  const response = await instance.get(`/produtos${partner}/categorias/`);
  const data = await response.data;
  return data;
};

export const getAllProductsData = async () => {
  const response = await instance.get(`/produtos/${partner}/`);
  const data = await response.data;
  return data;
};

// export async function getProductBySearch(search: string) {
//   try {
//     const response = await axios.get(`${apiUrl}${partner}/produtos/`, {
//       params: {
//         q: search,
//       },
//     });
//     if (response.data) {
//       console.log('retorno do GetProductBySearch', response.data);
//       return true;
//     }
//   } catch (error) {
//     return error;
//   }
// }

// export async function getComplements() {
//   const response = await instance.get(`${partner}/complements/`);
//   console.log('resposta COMPLEMENTOS', response.data);
//   return response.data;
// }

export const sendDeliveryRequest = async (data: IDeliverySend) => {
  const response = await instance.post<any>(`pedidos`, data);
  return response.data;
};
