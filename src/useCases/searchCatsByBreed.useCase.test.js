import { SearchCatsByBreedUseCase } from "./searchCatsByBreed.useCase";
import { CatsRepository } from "../repository/cats.repository";

describe("SearchCatsByBreedUseCase", () => {
  let searchCatsByBreedUseCase;
  let catsRepository;

  beforeEach(() => {
    catsRepository = new CatsRepository();
    searchCatsByBreedUseCase = new SearchCatsByBreedUseCase({ catsRepository });
  });

  it("should return a list of cats", async () => {
    const result = await searchCatsByBreedUseCase.execute("aby");
    expect(result.length).toBeGreaterThan(0);
  });

  it("should return all cats", async () => {
    const result = await searchCatsByBreedUseCase.execute("");
    expect(result.length).toBeGreaterThan(0);
  });

  it("should throw an error if no data is found", async () => {
    const result = await searchCatsByBreedUseCase.execute("wrong");
    expect(result.length).toEqual(0);
  });

  it("should throw an error if an error occurs", async () => {
    catsRepository.searchByBreed = jest
      .fn()
      .mockRejectedValueOnce(new Error("Error"));
    await expect(
      searchCatsByBreedUseCase.execute("wrong")
    ).rejects.toThrowError("Error");
  });

  it("should throw an error if an error occurs", async () => {
    catsRepository.getAll = jest.fn().mockRejectedValueOnce(new Error("Error"));
    await expect(searchCatsByBreedUseCase.execute("")).rejects.toThrowError(
      "Error"
    );
  });

  it("should throw an error if an error occurs", async () => {
    catsRepository.getAll = jest.fn().mockResolvedValueOnce([]);
    await expect(searchCatsByBreedUseCase.execute("")).rejects.toThrowError(
      "No data found"
    );
  });

  it("should throw an error if an error occurs", async () => {
    catsRepository.searchByBreed = jest
      .fn()
      .mockRejectedValueOnce(new Error("Error"));
    await expect(
      searchCatsByBreedUseCase.execute("wrong")
    ).rejects.toThrowError("Error");
  });
});
