import { GetCatFromUrlUseCase } from "../useCases/getCatFromUrl.useCase";

export class InformationController {
  GetCatFromUrlUseCase = new GetCatFromUrlUseCase();

  async getFromUrlParams(navigation, setqueryParams) {
    try {
      const response = await this.GetCatFromUrlUseCase.execute(navigation);
      console.log("response", response);

      setqueryParams(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
