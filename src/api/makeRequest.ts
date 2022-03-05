import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: 'Bearer ' + '43b7e62f8b5e35438a657ce267979f961dcb9670',
  },
})

export const makeRequest = <T>(config: AxiosRequestConfig<T>) =>
  instance(config)
