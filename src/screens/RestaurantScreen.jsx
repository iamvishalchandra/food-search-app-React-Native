import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import yelp from "../api/yelp";
import { useState } from "react/cjs/react.development";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restaurantData, setRestaurantData] = useState(null);
  const getRestaurant = async (id) => {
    try {
      const { data } = await yelp.get(`/${id}`);
      setRestaurantData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRestaurant(id);
  }, []);
  return !restaurantData ? (
    <></>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurantData.name}</Text>
      <View style={styles.iamgeList}>
        <FlatList
          data={restaurantData.photos}
          showsVerticalScrollIndicator={false}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />
      </View>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: 20 },
  container: { flexGrow: 1, padding: 10, alignItems: "center" },
  iamgeList: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: { height: 200, width: 250, marginTop: 10, borderRadius: 10 },
});
