import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ handleSearch, setsearchInput, searchInput, cleanSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search cats here by race..."
          placeholderTextColor="#666"
          onChangeText={(text) => setsearchInput(text)}
          value={searchInput}
          style={styles.textInput}
        />
        {searchInput.length > 0 && (
          <Ionicons
            name="close-circle-outline"
            size={20}
            color="#666"
            onPress={() => {
              setsearchInput("");
              cleanSearch();
            }}
          />
        )}
      </View>
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Ionicons
          name="paw-outline"
          size={20}
          color="#FFFFFF"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#1A1A1A",
    height: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#4F6BFF",
    paddingHorizontal: 15,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#4F6BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Search;
