export class GetCatFromUrlUseCase {
  async execute(navigation) {
    const params = navigation
      .getState()
      .routes.find((route) => route.name === "Information").params;

    if (!params.cat) {
      throw new Error("No cat found");
    }

    if (!params.cat.id) {
      throw new Error("No cat id found");
    }

    if (!params.cat.name) {
      throw new Error("No cat name found");
    }

    if (!params.cat.image.url) {
      throw new Error("No cat image url found");
    }

    if (!params.cat.description) {
      throw new Error("No cat description found");
    }

    if (!params.cat) {
      throw new Error("No cat found");
    }

    return params.cat;
  }
}
