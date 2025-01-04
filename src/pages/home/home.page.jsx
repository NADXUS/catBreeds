import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../../components/search";
import CatsList from "../../components/catsList";
import { HomeController } from "./home.controller";
import HomeTemplate from "../../templates/cardList.template";

const $homeController = new HomeController();

const Home = () => {
  const [cats, setcats] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    $homeController.getAllCats(setcats);
  }, []);

  return (
    <HomeTemplate>
      <Search
        handleSearch={() =>
          $homeController.searchCats(searchInput, setcats, setsearchInput)
        }
        setsearchInput={setsearchInput}
        searchInput={searchInput}
      ></Search>

      <CatsList cats={cats} navigation={navigation}></CatsList>
    </HomeTemplate>
  );
};

export default Home;
