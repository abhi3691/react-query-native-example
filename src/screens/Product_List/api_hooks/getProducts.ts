import axios from 'axios';

export const getProducts = async () => {
  let randomLimit = Math.round(Math.random() * 99);
  return await axios.get(`https://dummyjson.com/products?limit=${randomLimit}`);
};
