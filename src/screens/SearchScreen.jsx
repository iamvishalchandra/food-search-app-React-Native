import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Restaurants from "../components/Restaurants";
import SearchBar from "../components/SearchBar";
import useRestaurant from "../hooks/useRestaurant";

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchHandler, results, errorMessage] = useRestaurant();
  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        setValue={setSearch}
        onSubmit={() => searchHandler(search)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <Restaurants
            navigation={navigation}
            price="$"
            title="Affordable"
            restaurants={results}
          />
          <Restaurants
            navigation={navigation}
            price="$$"
            title="Fancy"
            restaurants={results}
          />
          <Restaurants
            navigation={navigation}
            price="$$$"
            title="Expensive"
            restaurants={results}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({ container: { flex: 1 } });
