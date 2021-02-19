import axios from "axios";
const instance = axios.create({
  // .. where we make our configurations
  baseURL: 'https://hire-api-portal.herokuapp.com/api/v1',
});
export default instance;