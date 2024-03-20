import axios from "axios";

const Base_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: Base_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};
export default http;
