import { View, StyleSheet } from "react-native";

const InformationTemplate = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
});

export default InformationTemplate;
