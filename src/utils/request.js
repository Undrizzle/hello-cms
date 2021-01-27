import axios from 'axios'

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

instance.interceptors.request.use(

)

export default instance