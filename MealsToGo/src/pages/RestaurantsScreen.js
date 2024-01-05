import React from "react";
import { StyleSheet, View } from "react-native";
import RestaurantList from "../components/RestaurantList";
import { Searchbar } from "react-native-paper";

export default function RestaurantsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Searchbar placeholder="Search" />
      </View>
      <RestaurantList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchbar: {
    padding: 16,
  },
});
