import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:6000/api/v1/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});