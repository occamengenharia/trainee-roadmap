import axios from 'axios';

const api = axios.create({
    //api pública para imagem de gatos
    baseURL: 'https://api.thecatapi.com/v1/images/search'
});

export default api;