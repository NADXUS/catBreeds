import { View, StyleSheet } from "react-native";

const InformationTemplate = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 50,
    padding: 20,
  },
});

export default InformationTemplate;
