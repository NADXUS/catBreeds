import { StyleSheet, View } from "react-native";
import Header from "../components/header";

const HomeTemplate = ({ children }) => {
  return (
    <View style={styles.container}>
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
  },
});

export default HomeTemplate;
