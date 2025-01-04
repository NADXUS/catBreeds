import { CatsRepository } from "../repository/cats.repository";
import { GetAllCatsUseCase } from "./getAllCats.useCase";

describe("getAllCats", () => {
  it("should return a list of cats", async () => {
    const catsRepository = new CatsRepository();
    const getAllCatsUseCase = new GetAllCatsUseCase({ catsRepository });
    const result = await getAllCatsUseCase.execute();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should throw an error if no data is found", async () => {
    const catsRepository = new CatsRepository();
    catsRepository.getAll = jest.fn().mockResolvedValueOnce([]); // Simulate no data found
    const getAllCatsUseCase = new GetAllCatsUseCase({ catsRepository });
    await expect(getAllCatsUseCase.execute()).rejects.toThrowError(
      "No data found"
    );
  });

  it("should throw an error if an error occurs", async () => {
    const catsRepository = new CatsRepository();
    catsRepository.getAll = jest.fn().mockRejectedValueOnce(new Error("Error")); // Simulate an error
    const getAllCatsUseCase = new GetAllCatsUseCase({ catsRepository });
    await expect(getAllCatsUseCase.execute()).rejects.toThrowError("Error");
  });
});
