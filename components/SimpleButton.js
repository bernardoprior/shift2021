import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import config from "../config";
const colors = config.colors;

const SimpleButton = (props) => {
  const { text } = props;
  return (
    <TouchableOpacity style={{ ...styles.container, ...props.style }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: RFValue(12, 812),
    width: "85%",
    alignItems: "center",
    backgroundColor: colors.lightPurple,
    paddingVertical: RFValue(14, 812),
  },

  text: {
    fontSize: RFValue(20, 812),
    color: colors.white,
  },
});

export default SimpleButton;
