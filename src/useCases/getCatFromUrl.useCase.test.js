import { GetCatFromUrlUseCase } from "./getCatFromUrl.useCase";

describe("GetCatFromUrlUseCase", () => {
  it("should return a cat", async () => {
    const navigation = {
      getState: () => ({
        routes: [
          {
            name: "Information",
            params: {
              cat: {
                id: 1,
                name: "Cat 1",
                image: {
                  url: "https://cat1.com",
                },
                description: "Description 1",
              },
            },
          },
        ],
      }),
    };
    const getCatFromUrlUseCase = new GetCatFromUrlUseCase();
    const result = await getCatFromUrlUseCase.execute(navigation);
    expect(result).toBeDefined();
  });

  it("should throw an error if no cat is found", async () => {
    const navigation = {
      getState: () => ({
        routes: [
          {
            name: "Information",
            params: {},
          },
        ],
      }),
    };
    const getCatFromUrlUseCase = new GetCatFromUrlUseCase();
    await expect(getCatFromUrlUseCase.execute(navigation)).rejects.toThrowError(
      "No cat found"
    );
  });

  it("should throw an error if no cat id is found", async () => {
    const navigation = {
      getState: () => ({
        routes: [
          {
            name: "Information",
            params: {
              cat: {
                name: "Cat 1",
                image: {
                  url: "https://cat1.com",
                },
                description: "Description 1",
              },
            },
          },
        ],
      }),
    };
    const getCatFromUrlUseCase = new GetCatFromUrlUseCase();
    await expect(getCatFromUrlUseCase.execute(navigation)).rejects.toThrowError(
      "No cat id found"
    );
  });

  it("should throw an error if no cat name is found", async () => {
    const navigation = {
      getState: () => ({
        routes: [
          {
            name: "Information",
            params: {
              cat: {
                id: 1,
                image: {
                  url: "https://cat1.com",
                },
                description: "Description 1",
              },
            },
          },
        ],
      }),
    };
    const getCatFromUrlUseCase = new GetCatFromUrlUseCase();
    await expect(getCatFromUrlUseCase.execute(navigation)).rejects.toThrowError(
      "No cat name found"
    );
  });
});
