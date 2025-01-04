import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const Search = ({ handleSearch, setsearchInput, searchInput }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Search cats here by race..."}
        onChangeText={(text) => setsearchInput(text)}
        value={searchInput}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default Search;
