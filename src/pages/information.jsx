import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Information = () => {
  const navigation = useNavigation();
  const [queryParams, setqueryParams] = useState({
    cat: {
      image: {
        url: "",
      },
    },
  });

  useEffect(() => {
    const params = navigation
      .getState()
      .routes.find((route) => route.name === "Information").params;
    setqueryParams(params);
  }, []);
  return (
    <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 20,
          alignItems: "center",
          backgroundColor: "lightblue",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
          {queryParams.cat.name}
        </Text>
        <View></View>
      </View>
      <View>
        <Image
          source={{ uri: queryParams.cat.image.url }}
          style={{ width: "100%", aspectRatio: "1/1" }}
        />
      </View>
      <ScrollView
        style={{ padding: 10, backgroundColor: "white", marginTop: 20 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
          {queryParams.cat.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Information;
