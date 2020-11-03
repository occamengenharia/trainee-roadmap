import axios from 'axios';

//fazer a conexão com a api
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

export default api;