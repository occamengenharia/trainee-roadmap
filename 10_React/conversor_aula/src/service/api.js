import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.frankfurter.app'
})

export default api