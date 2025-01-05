import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderInformation = ({ catName, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
      </TouchableOpacity>
      <Text style={styles.title}>{catName}</Text>
      <View style={styles.actionButton}>
        <Ionicons name="bookmark-outline" size={24} color="#1A1A1A" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    color: "#1A1A1A",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 16,
  },
});
export default HeaderInformation;
