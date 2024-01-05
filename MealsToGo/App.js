import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import RestaurantsScreen from "./src/pages/RestaurantsScreen";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestaurantsScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
