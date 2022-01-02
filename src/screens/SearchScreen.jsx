import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log(search);
  };
  return (
    <View>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSubmit={searchHandler}
      />
      <Text>Search Restaurants</Text>
      <Text>{search}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
