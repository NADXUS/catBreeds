import axios from "axios";
import constants from "../constants/constants";

export class HttpServices {
  static instance() {
    return axios.create({
      baseURL: constants.API_URL,
      headers: {
        "x-api-key": constants.API_KEY,
        "Content-Type": "application/json",
      },
      params: {
        "api-key": constants.API_KEY,
      },
    });
  }
}
