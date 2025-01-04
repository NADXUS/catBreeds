// filepath: src/components/__tests__/HomeScreen.test.js
import React from "react";
import renderer, { act } from "react-test-renderer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home.page"; // Adjust the import path as necessary
import HomeTemplate from "../../templates/cardList.template";
import Search from "../../components/search";
import CatsList from "../../components/catsList";
import Loading from "../../components/loading";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock("./home.controller", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAllCats: jest.fn().mockImplementation((setCats, setLoading) => {
        setLoading(true);
        setCats([]);
        return Promise.resolve([]);
      }),
      searchCats: jest
        .fn()
        .mockImplementation((searchInput, setCats, setLoading) => {
          setLoading(true);
          setCats([]);
          setLoading(false);
          return Promise.resolve([]);
        }),
    };
  });
});

const renderWithNavigation = (component) => {
  return renderer.create(
    <NavigationContainer>{component}</NavigationContainer>
  );
};

describe("Renderizar componentes necesarios", () => {
  test("Renderizar Home", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Home />);
    });
    expect(tree).toBeTruthy();
  });

  test("Renderizar HomeTemplate", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Home />);
    });
    const homeTemplate = tree.root.findByType(HomeTemplate);
    expect(homeTemplate).toBeTruthy();
  });

  test("Renderizar Search", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Home />);
    });
    const search = tree.root.findByType(Search);
    expect(search).toBeTruthy();
  });
  test("Renderizar CatsList", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Home />);
    });
    // First ensure loading is false
    const catsListComponents = tree.root.findAllByType(CatsList);
    expect(catsListComponents).toBeTruthy();
  });

  test("Renderizar Loading", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Home />);
    });
    const LoadingComponent = tree.root.findByType(Loading);
    expect(LoadingComponent).toBeTruthy();
  });
});
