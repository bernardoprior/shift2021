import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import SearchBar from "../../components/SearchBar";

import config, { rfvalue } from "../../config";
import Filter from "../ProfileScreen/Filter";
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
    <View style={{ ...styles.mainView, filter: "blur(100px)" }}>
      <Filter visible={showFilter} hide={closeFilter} />
      <View style={styles.searchbar}>
        <SearchBar width="70%" onPress={onPressSearch} />
        <TouchableOpacity onPress={openFilter}>
          <Image source={require("../../assets/filter.png")} />
        </TouchableOpacity>
      </View>
      {!show && <Scrollable />}
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
