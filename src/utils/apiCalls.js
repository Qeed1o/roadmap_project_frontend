import axios from "axios";

const URI = "http://localhost:3001";
const config = {
  "Content-Type": "text/plain",
  "Access-Control-Allow-Headers": "*",
};

export default {
  getTasksList: async () => await axios.get(`${URI}`, config),
  closeTask: async (id) => await axios.post(`${URI}/close/${id}`, {}, config),
  createTask: async (name) =>
    await axios.post(`${URI}/create/${name}`, {}, config),
};
