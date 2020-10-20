import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://pokeapi.co',
});
// Estou criando uma URL base para não precisar digitar a url inteira ao fazer uma Request

export default api;
