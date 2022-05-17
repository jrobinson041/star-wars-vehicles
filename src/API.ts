import axios from "axios";

const API = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export default API;
