import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const SearchBar = ({ search, setSearch, onSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={search}
        onChangeText={(e) => setSearch(e)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "lightgray",
    height: 45,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  searchIcon: { fontSize: 35, alignSelf: "center", marginHorizontal: 15 },
  input: { flex: 1, fontSize: 18 },
});
