import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../../components/search";
import CatsList from "../../components/catsList";
import { HomeController } from "./home.controller";
import HomeTemplate from "../../templates/cardList.template";
import Loading from "../../components/loading";

const $homeController = new HomeController();

const Home = () => {
  const [cats, setcats] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    $homeController.getAllCats(setcats, setloading);
  }, []);

  return (
    <HomeTemplate>
      <Search
        handleSearch={() =>
          $homeController.searchCats(searchInput, setcats, setloading)
        }
        setsearchInput={setsearchInput}
        searchInput={searchInput}
      ></Search>

      {loading ? (
        <Loading></Loading>
      ) : (
        <CatsList cats={cats} navigation={navigation}></CatsList>
      )}
    </HomeTemplate>
  );
};

export default Home;
