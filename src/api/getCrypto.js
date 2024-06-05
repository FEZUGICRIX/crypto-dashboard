import axios from 'axios';
import { assets } from '../assets';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getCrypto = async () => {
  try {
    const response = await axios.get(`${BASE_URL}coins`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAssets = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(assets);
    }, 10);
  });
};
