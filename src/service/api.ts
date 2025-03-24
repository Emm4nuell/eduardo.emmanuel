import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});
