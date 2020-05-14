import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.90/api/v1/mobile',
});

export default api;
