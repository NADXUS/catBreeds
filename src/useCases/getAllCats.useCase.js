export class GetAllCatsUseCase {
  constructor({ catsRepository }) {
    this.catsRepository = catsRepository;
  }

  async execute() {
    const data = await this.catsRepository.getAll();
    if (data.length === 0) {
      throw new Error("No data found");
    }
    return data;
  }
}
