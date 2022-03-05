import { makeRequest } from '../makeRequest'

export const suggest = (data: string) =>
  makeRequest({
    url: 'https://dadata.ru/api/suggest/name/',
    method: 'POST',
    data,
  })
