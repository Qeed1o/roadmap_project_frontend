import axios from "axios";

const URI = "http://localhost:3001/";

export default {
  getTasksList: async () => await axios.get(`${URI}`),
};
