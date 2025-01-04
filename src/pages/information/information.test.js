import React from "react";
import renderer, { act } from "react-test-renderer";
import { NavigationContainer } from "@react-navigation/native";
import Information from "./information.page";
import InformationTemplate from "../../templates/detailInfo.template";
import HeaderInformation from "../../components/headerInformation";
import ImageInformation from "../../components/ImageInformation";
import DescriptionInformation from "../../components/descriptionInformation";

jest.mock("expo-font");

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock("./information.controller", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getFromUrlParams: jest.fn().mockImplementation((setqueryParams) => {}),
    };
  });
});

const renderWithNavigation = (component) => {
  return renderer.create(
    <NavigationContainer>{component}</NavigationContainer>
  );
};

describe("Renderizar componentes necesarios", () => {
  test("Renderizar Information", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Information />);
    });
    expect(tree).toBeTruthy();
  });

  test("Renderizar InformationTemplate", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Information />);
    });
    const informationTemplate = tree.root.findByType(InformationTemplate);
    expect(informationTemplate).toBeTruthy();
  });

  test("Renderizar HeaderInformation", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Information />);
    });
    const headerInformation = tree.root.findByType(HeaderInformation);
    expect(headerInformation).toBeTruthy();
  });

  test("Renderizar ImageInformation", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Information />);
    });
    const imageInformation = tree.root.findByType(ImageInformation);
    expect(imageInformation).toBeTruthy();
  });

  test("Renderizar DescriptionInformation", async () => {
    let tree;
    await act(async () => {
      tree = renderWithNavigation(<Information />);
    });
    const descriptionInformation = tree.root.findByType(DescriptionInformation);
    expect(descriptionInformation).toBeTruthy();
  });
});
