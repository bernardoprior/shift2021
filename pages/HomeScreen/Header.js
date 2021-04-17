import React from "react";

import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import config, { rfvalue } from "../../config";
const colors = config.colors;

const Header = ({ option, onPress, text, secText }) => {
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
          {text}
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
          {secText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // paddingBottom: rfvalue(60),
    // backgroundColor: colors.lightPurple,

    flexDirection: "row",
    justifyContent: "center",
    zIndex: 100,

    marginTop: RFValue(64, 812),
    marginBottom: RFValue(8, 812),
    // borderWidth: 3,
    // borderColor: "orange",
  },
  //option: {
  //height: "auto",
  //zIndex: 101,
  //},
  headerText: {
    textAlign: "center",
    color: colors.white,
    fontSize: RFValue(20, 812),
    //fontFamily: "PoppinsRegular",
    zIndex: 100,
  },
});

export default Header;
