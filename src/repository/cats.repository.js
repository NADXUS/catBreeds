import { HttpServices } from "../commons/httpServices";
import constants from "../constants/constants";

export class CatsRepository {
  constructor() {
    this.httpService = HttpServices.instance();
  }

  async getAll() {
    try {
      const response = await this.httpService.get(constants.apis.getBreeds);

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async searchByBreed(searchInput) {
    try {
      const response = await this.httpService.get(
        `${constants.apis.searchBreeds}?q=${searchInput}`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
