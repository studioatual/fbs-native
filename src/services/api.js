import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.199.17/api/v1/mobile',
});

export default api;
