import { StyleSheet, View } from "react-native";
import Header from "../components/header";
import { StatusBar } from "expo-status-bar";

const HomeTemplate = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header></Header>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: "white",
  },
});

export default HomeTemplate;
