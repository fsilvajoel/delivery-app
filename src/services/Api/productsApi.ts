/* eslint-disable consistent-return */
import axios from 'axios';

import { apiUrl, partner } from './apiConstants';

export const getAllCategories = async () => {
  const response = await fetch(`${apiUrl}/produtos${partner}/categorias/`);
  const data = await response.json();
  return data;
};

export const getAllProductsData = async () => {
  const response = await fetch(`${apiUrl}/produtos${partner}/`);
  const data = await response.json();
  return data;
};

export async function getProductBySearch(search: string) {
  try {
    const response = await axios.get(`${apiUrl}${partner}/produtos/`, {
      params: {
        q: search,
      },
    });
    if (response.data) {
      console.log('retorno do GetProductBySearch', response.data);
      return true;
    }
  } catch (error) {
    return error;
  }
}

export async function getComplements() {
  const response = await axios.get(`${apiUrl}${partner}/complements/`);
  console.log('resposta COMPLEMENTOS', response.data);
  return response.data;
}
