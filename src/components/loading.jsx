import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = ({ size = "large", color = "#0000ff" }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
