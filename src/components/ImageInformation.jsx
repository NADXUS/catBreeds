import { Image, View, StyleSheet } from "react-native";

const ImageInformation = ({ image }) => {
  if (!image) return null;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image || "" }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ImageInformation;
