import axios from 'axios'
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  // headers: {
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT,HEAD',
  //   'Access-Control-Allow-Headers':
  //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  // },
})
