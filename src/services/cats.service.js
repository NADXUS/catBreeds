import axios from "axios";
import constants from "../constants/constants";

const api = axios.create({
  baseURL: constants.API_URL,
  headers: {
    "x-api-key": constants.API_KEY,
  },
});

export const GetAllCats = async () => {
  try {
    const response = await api.get(
      "/breeds?api_key=live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const SearchCats = async (searchInput) => {
  try {
    const response = await api.get(
      `/breeds/search?q=${searchInput}&api_key=live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
