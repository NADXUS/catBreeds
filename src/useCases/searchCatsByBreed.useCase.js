export class SearchCatsByBreedUseCase {
  constructor({ catsRepository }) {
    this.catsRepository = catsRepository;
  }

  async execute(searchInput) {
    if (searchInput == "") {
      const data = await this.catsRepository.getAll();
      if (data.length === 0) {
        throw new Error("No data found");
      }
      return data;
    }

    const data = await this.catsRepository.searchByBreed(searchInput);

    return data;
  }
}
