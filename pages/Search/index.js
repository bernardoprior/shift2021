import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconIonic from "react-native-vector-icons/Ionicons";

import SearchBar from "../../components/SearchBar";

import config, { rfvalue } from "../../config";
import Filter from "./Filter";
import Scrollable from "./Scrollable";

const { colors } = config;

const Search = () => {
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const onPressSearch = () => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const openFilter = () => {
    setShowFilter(true);
  };

  return (
    <View style={{ ...styles.mainView }}>
      <Filter visible={showFilter} hide={closeFilter} />
      <View style={styles.searchbar}>
        <SearchBar width="70%" onPress={onPressSearch} />
        <TouchableOpacity onPress={openFilter}>
          <IconIonic name="filter" size={rfvalue(32)} color={colors.pink} />
        </TouchableOpacity>
      </View>
      {show ? (
        <Scrollable />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.pink, fontSize: rfvalue(20) }}>
            No results
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.lightPurple,
    height: "100%",
  },

  searchbar: {
    marginTop: rfvalue(60),
    marginBottom: rfvalue(30),
    flexDirection: "row",
  },
});

export default Search;
