import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.105/api/v1/mobile',
});

export default api;
