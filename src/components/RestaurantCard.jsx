import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} ({restaurant.review_count} Reviews)
      </Text>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: { marginLeft: 10 },
  image: { width: 250, borderRadius: 4, height: 120 },
  name: { fontWeight: "bold" },
});
