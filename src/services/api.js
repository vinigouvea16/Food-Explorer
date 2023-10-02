import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://foodexplorer-api-devini.koyeb.app/',
  withCredentials: true,
})
