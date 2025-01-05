import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Loading from "./loading";
import { Ionicons } from "@expo/vector-icons";

const CatsList = ({ cats, navigation }) => {
  return (
    <View style={styles.container}>
      {cats.length === 0 ? (
        <View style={{ marginTop: 90 }}>
          <Ionicons
            name="close-circle-outline"
            size={40}
            color="#666666"
            style={styles.iconNoCats}
          />
          <Text style={styles.noCatsText}>No cats found</Text>
        </View>
      ) : (
        <FlatList
          style={styles.flatList}
          data={cats}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate("Information", { cat: item })}
            >
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>
                  <Ionicons name="paw" size={16} color="#4F6BFF" /> {item.name}
                </Text>
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={() =>
                    navigation.navigate("Information", { cat: item })
                  }
                >
                  <Ionicons name="chevron-forward" size={20} color="#4F6BFF" />
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: item.image?.url }}
                style={styles.itemImage}
              />
              <View style={styles.itemContent}>
                <View style={styles.itemFooter}>
                  <View style={styles.tagContainer}>
                    <Ionicons name="location" size={14} color="#666666" />
                    <Text style={styles.tagText}>Origin: {item.origin}</Text>
                  </View>
                  <View style={styles.tagContainer}>
                    <Ionicons name="star" size={14} color="#666666" />
                    <Text style={styles.tagText}>
                      Intelligence: {item.intelligence}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  listContent: {
    gap: 16,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#F0F0F0",
  },
  itemContent: {
    padding: 16,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    marginBottom: 12,
    zIndex: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
  },
  moreButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  itemFooter: {
    flexDirection: "row",
    gap: 8,
  },
  tagContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  tagText: {
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
  noCatsText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
    color: "#666666",
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    width: 200,
    alignSelf: "center",
    opacity: 0.5,
  },
  iconNoCats: {
    alignSelf: "center",
    marginTop: 20,
    opacity: 0.5,
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
  },
});

export default CatsList;
