import { ScrollView, Text, StyleSheet, View } from "react-native";

const DescriptionInformation = ({ description }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
    fontWeight: "400",
  },
});

export default DescriptionInformation;
