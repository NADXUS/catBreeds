import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SearchLabel = ({
  searchInputPlaceholder,
  setsearchInputPlaceholder,
  getCats,
}) => {
  return (
    <View>
      {searchInputPlaceholder !== "Search cats here by race..." && (
        <View style={styles.container}>
          <Text style={styles.text}>{searchInputPlaceholder}</Text>
          <TouchableOpacity
            onPress={() => {
              setsearchInputPlaceholder("Search cats here by race...");
              getCats();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
  },
  buttonText: {
    color: "white",
  },
});

export default SearchLabel;
