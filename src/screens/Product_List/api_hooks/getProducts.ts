import axios from 'axios';

export const getProducts = async () => {
  return await axios.get('https://dummyjson.com/products?limit=100');
};
