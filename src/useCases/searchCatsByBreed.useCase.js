export class SearchCatsByBreedUseCase {
  constructor({ catsRepository }) {
    this.catsRepository = catsRepository;
  }

  async execute(searchInput) {
    if (searchInput === "") {
      throw new Error("No search input");
    }
    if (searchInput.match(/\d+/g)) {
      throw new Error("No numbers allowed");
    }

    const data = await this.catsRepository.searchByBreed(searchInput);

    if (data.length === 0) {
      throw new Error("No data found");
    }

    return data;
  }
}
