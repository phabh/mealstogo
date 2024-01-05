import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = function ({ restaurant }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://img.restaurantguru.com/r518-Pizzaria-Portugal-pizza.jpg",
    ],
    address = "Random Street 100",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return <Text>RestaurantInfo</Text>;
};
