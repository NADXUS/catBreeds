import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catbreeds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});

export default Header;
