import Axios from 'axios'

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

const Client = Axios.create({
  withCredentials: true,
  baseURL: BASE_URL
})

Client.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }

    return config
  },
  error => Promise.reject(error)
)
export default Client
