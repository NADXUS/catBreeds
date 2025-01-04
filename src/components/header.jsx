import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Ionicons name="paw" size={20} color="#ffffff" />
        </View>
      </View>
      <Text style={styles.title}>Catbreeds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoContainer: {
    marginRight: 12,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 200,
    backgroundColor: "#506bff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
    color: "#1A1A1A",
    letterSpacing: -0.5,
  },
});

export default Header;
