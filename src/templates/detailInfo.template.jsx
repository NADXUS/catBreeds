import { View, StyleSheet } from "react-native";

const InformationTemplate = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 70,
    padding: 20,
  },
});

export default InformationTemplate;
