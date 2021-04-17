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
import Scrollable from "./Scrollable";

const { colors } = config;

const Search = () => {
  const [show, setShow] = useState(false);

  const onPressSearch = () => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.searchbar}>
        <SearchBar width="70%" onPress={onPressSearch} />
        <TouchableOpacity>
          <Image source={require("../../assets/filter.png")} />
        </TouchableOpacity>
      </View>
      {!show && <Scrollable />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.mediumPurple,
    height: "100%",
  },

  searchbar: { marginTop: rfvalue(60), flexDirection: "row" },
});

export default Search;
