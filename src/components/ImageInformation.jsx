import { useState } from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";

const ImageInformation = ({ image }) => {
  if (!image) return null;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageContainer: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#F5F5F5",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    zIndex: 1,
  },
});

export default ImageInformation;
