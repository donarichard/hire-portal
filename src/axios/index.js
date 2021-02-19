import axios from "axios";
const instance = axios.create({
  // .. where we make our configurations
  baseURL: 'http://localhost:8081/api/v1',
});
export default instance;