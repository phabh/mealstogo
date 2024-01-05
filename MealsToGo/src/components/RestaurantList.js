import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RestaurantInfo } from "./RestaurantInfo";

export default function RestaurantList() {
  return (
    <View style={styles.container}>
      <RestaurantInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00f",
    padding: 16,
  },
});
