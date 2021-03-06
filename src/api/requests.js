import axios from 'axios'
import https from 'https'

axios.defaults.httpAgent = new https.Agent({ rejectUnauthorized: false })
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export async function callApiGet(path) {
  if (localStorage.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
  }
  return await axios.get(`${API_ENDPOINT}/${path}`)
}

export async function callApiPost(path, payload, authRequired) {
  if (authRequired) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`
  }
  return await axios.post(`${API_ENDPOINT}/${path}`, payload)
}

export async function callApiPut(path, payload, param) {
  return await axios.put(`${API_ENDPOINT}/${path}/${param}`, payload)
}

export async function callApiDelete(path, param) {
  return await axios.delete(`${API_ENDPOINT}/${path}/${param}`)
}
