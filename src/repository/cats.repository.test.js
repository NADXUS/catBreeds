//quiero hacerle testint a esta clase

import { CatsRepository } from "./cats.repository";

describe("CatsRepository", () => {
  test("getAll", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.getAll();
    expect(result.length).toBeGreaterThan(0);
  });

  test("searchByBreed", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed("aby");
    expect(result.length).toBeGreaterThan(0);
  });

  test("searchByBreed with empty string", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed("");
    expect(result.length).toEqual(0);
  });

  test("searchByBreed with wrong string", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed("wrong");
    expect(result.length).toEqual(0);
  });

  test("searchByBreed with null", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed(null);
    expect(result.length).toEqual(0);
  });

  test("searchByBreed with undefined", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed(undefined);
    expect(result.length).toEqual(0);
  });

  test("searchByBreed with NaN", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed(NaN);
    expect(result.length).toEqual(0);
  });

  test("searchByBreed with 0", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed(0);
    expect(result.length).toEqual(0);
  });

  test("searchByBreed with 1", async () => {
    const catsRepository = new CatsRepository();
    const result = await catsRepository.searchByBreed(1);
    expect(result.length).toEqual(0);
  });
});
