import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GetAllCats, SearchCats } from "../services/cats.service";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [cats, setcats] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [searchInputPlaceholder, setsearchInputPlaceholder] = useState(
    "Search cats here by race..."
  );
  const navigation = useNavigation();

  function getCats() {
    GetAllCats()
      .then((data) => {
        setcats(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearch() {
    //not numbers
    if (searchInput.match(/\d+/g)) {
      alert("No numbers allowed");
      return;
    }

    if (searchInput === "") {
      getCats();
      return;
    }

    SearchCats(searchInput)
      .then((data) => {
        setcats(data);
        setsearchInputPlaceholder(`looking for "${searchInput}" breed cats`);
        setsearchInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCats();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          marginBottom: 20,
          alignItems: "center",
          backgroundColor: "lightblue",
          padding: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
          Catbreeds
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          marginBottom: 20,
        }}
      >
        <TextInput
          placeholder={"Search cats here by race..."}
          onChangeText={(text) => setsearchInput(text)}
          value={searchInput}
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            flex: 1,
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {
            handleSearch();
          }}
          style={{
            backgroundColor: "lightblue",
            padding: 10,
            borderRadius: 5,
            marginLeft: 10,
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        {searchInputPlaceholder !== "Search cats here by race..." && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
              backgroundColor: "lightgray",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ marginRight: 10 }}>{searchInputPlaceholder}</Text>
            <TouchableOpacity
              onPress={() => {
                setsearchInputPlaceholder("Search cats here by race...");
                getCats();
              }}
              style={{
                backgroundColor: "red",
                padding: 5,
                borderRadius: 5,
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                width: 30,
              }}
            >
              <Text style={{ color: "white" }}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        <FlatList
          style={{ marginBottom: 20 }}
          data={cats}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "column",
                marginBottom: 20,
                backgroundColor: "lightblue",
                padding: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 20,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.name}
                </Text>
                <Button
                  title="More"
                  onPress={() => {
                    navigation.navigate("Information", { cat: item });
                  }}
                ></Button>
              </View>
              <Image
                source={{ uri: item.image?.url }}
                style={{ width: "100%", aspectRatio: "1/1" }}
              ></Image>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {item.origin}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  IQ: {item.intelligence}
                </Text>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default Home;
