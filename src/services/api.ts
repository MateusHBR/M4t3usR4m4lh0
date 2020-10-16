import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://pokeapi.co',
});

export default api;
