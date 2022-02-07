import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { withNavigation } from "react-navigation";
const Restaurants = ({ title, restaurants, price, navigation }) => {
  const restaurantList = restaurants.filter(
    (restaurant) => restaurant.price === price
  );
  return (
    restaurantList.length > 0 && (
      <View style={styles.container}>
        <View style={styles.category}>
          <Text style={styles.title}>{title} : </Text>
          <Text>({restaurantList.length} Results)</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={restaurantList}
          keyExtractor={(res) => res.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Restaurant", { id: item.id })}
            >
              <RestaurantCard restaurant={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  );
};

export default withNavigation(Restaurants);

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginLeft: 10, marginBottom: 5 },
  category: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 2,
  },
});
