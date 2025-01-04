import { HttpServices } from "../commons/httpServices";

export class CatsRepository {
  constructor() {
    this.httpService = HttpServices.instance();
  }

  async getAll() {
    try {
      const response = await this.httpService.get("/breeds");

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async searchByBreed(searchInput) {
    try {
      const response = await this.httpService.get(
        `/breeds/search?q=${searchInput}`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
