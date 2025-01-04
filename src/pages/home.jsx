import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "../components/search";
import SearchLabel from "../components/searchLabel";
import CatsList from "../components/catsList";
import { HomeController } from "../controllers/home.controller";
import HomeTemplate from "../templates/home.template";

const $homeController = new HomeController();

const Home = () => {
  const [cats, setcats] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [searchInputPlaceholder, setsearchInputPlaceholder] = useState(
    "Search cats here by race..."
  );
  const navigation = useNavigation();

  useEffect(() => {
    $homeController.getAllCats(setcats);
  }, []);

  return (
    <HomeTemplate>
      <Search
        handleSearch={() =>
          $homeController.searchCats(
            searchInput,
            setcats,
            setsearchInputPlaceholder,
            setsearchInput
          )
        }
        setsearchInput={setsearchInput}
        searchInput={searchInput}
      ></Search>

      <SearchLabel
        searchInputPlaceholder={searchInputPlaceholder}
        setsearchInputPlaceholder={setsearchInputPlaceholder}
        getCats={() => $homeController.getAllCats(setcats)}
      ></SearchLabel>

      <CatsList cats={cats} navigation={navigation}></CatsList>
    </HomeTemplate>
  );
};

export default Home;
