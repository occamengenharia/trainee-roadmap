
import axios from 'axios'
//axios.defaults.headers.common['Accept'] = 'application/json'

const api = axios.create({
    baseURL: 'http://cep.la',
    headers: { Accept: "application/json" }
})

export default api;
