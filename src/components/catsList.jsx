import { View, Text, FlatList, Button, Image, StyleSheet } from "react-native";
import Loading from "./loading";

const CatsList = ({ cats, navigation }) => {
  return (
    <View style={styles.container}>
      {cats.length === 0 ? (
        <Text style={styles.noCatsText}>No cats found</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          data={cats}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Button
                  title="More"
                  onPress={() => {
                    navigation.navigate("Information", { cat: item });
                  }}
                />
              </View>
              <Image
                source={{ uri: item.image?.url }}
                style={styles.itemImage}
              />
              <View style={styles.itemFooter}>
                <Text style={styles.itemOrigin}>{item.origin}</Text>
                <Text style={styles.itemIQ}>IQ: {item.intelligence}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "column",
    marginBottom: 20,
    backgroundColor: "lightblue",
    padding: 20,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  itemImage: {
    width: "100%",
    aspectRatio: 1,
  },
  itemFooter: {
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  itemOrigin: {
    fontWeight: "bold",
    fontSize: 20,
  },
  itemIQ: {
    fontWeight: "bold",
    fontSize: 20,
  },
  noCatsText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "black",
    opacity: 0.5,
  },
});

export default CatsList;
