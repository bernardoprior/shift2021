import React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import config, { rfvalue } from "../config";

const { colors } = config;

const SearchBar = ({ width, onPress, marginRight, marginLeft }) => {
  const [text, setText] = useState("");

  return (
    <View
      style={{
        ...styles.mainView,
        width,
        marginRight: marginRight != null ? marginRight : rfvalue(30),
        marginLeft: marginLeft != null ? marginLeft : rfvalue(30),
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.img} source={require("../assets/search.png")} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Search"
        placeholderTextColor={colors.lightPurple}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.darkPurple,
    borderRadius: 20,

    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",

    paddingRight: rfvalue(10),
    paddingLeft: rfvalue(10),

    paddingTop: rfvalue(5),
    paddingBottom: rfvalue(5),
  },

  img: {
    // borderColor: "red",
    // borderWidth: 2,
  },

  input: {
    marginLeft: rfvalue(10),
    color: colors.white,
    width: "80%",
  },
});

export default SearchBar;
