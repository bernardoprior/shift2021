import React from "react";

import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import config, { rfvalue } from "../../config";
const colors = config.colors;

const Header = ({ option, onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{ ...styles.option }}
        onPress={() => onPress(false)}
      >
        <Text
          style={{
            ...styles.headerText,
            textAlign: "right",
            opacity: option ? 0.5 : 1,
          }}
        >
          Following
        </Text>
      </TouchableOpacity>
      <Text style={{ ...styles.headerText, opacity: 0.5 }}>{`  |  `}</Text>
      <TouchableOpacity
        style={{ ...styles.option }}
        onPress={() => onPress(true)}
      >
        <Text
          style={{
            ...styles.headerText,
            textAlign: "left",
            opacity: option ? 1 : 0.5,
          }}
        >
          Shuffle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: rfvalue(60),
    // paddingBottom: rfvalue(60),
    // backgroundColor: colors.lightPurple,

    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 100,

    height: 100,

    position: "absolute",
    top: rfvalue(10),
    left: 0,
    right: 0,

    // borderWidth: 3,
    // borderColor: "orange",
  },
  option: {
    width: rfvalue(100),
    height: "auto",

    zIndex: 101,
  },
  headerText: {
    textAlign: "center",
    color: colors.white,
    fontSize: rfvalue(20),
    zIndex: 101,
  },
});

export default Header;
