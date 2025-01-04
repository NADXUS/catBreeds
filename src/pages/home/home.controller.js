import { CatsRepository } from "../../repository/cats.repository";
import { GetAllCatsUseCase } from "../../useCases/getAllCats.useCase";
import { SearchCatsByBreedUseCase } from "../../useCases/searchCatsByBreed.useCase";

export class HomeController {
  catsRepository = new CatsRepository();

  getAllCatsUseCase = new GetAllCatsUseCase({
    catsRepository: this.catsRepository,
  });

  SearchCatsByBreedUseCase = new SearchCatsByBreedUseCase({
    catsRepository: this.catsRepository,
  });

  async getAllCats(setcats) {
    try {
      const response = await this.getAllCatsUseCase.execute();
      setcats(response);

      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async searchCats(searchInput, setcats, setsearchInput) {
    try {
      const response = await this.SearchCatsByBreedUseCase.execute(searchInput);

      setcats(response);

      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
