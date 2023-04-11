import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: { 'Content-Type': 'application/json' },
});

export default axios;
