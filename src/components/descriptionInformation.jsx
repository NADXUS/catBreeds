import { ScrollView, Text, StyleSheet } from "react-native";

const DescriptionInformation = ({ description }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.descriptionText}>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    marginTop: 20,
  },
  descriptionText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});

export default DescriptionInformation;
