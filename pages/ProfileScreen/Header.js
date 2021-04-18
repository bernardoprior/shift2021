import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import { rfvalue } from "../../config";

import config from "../../config";

const { colors } = config;

const Header = ({ onPressDraft, onPressOptions }) => {
  const horizontalMargin = rfvalue(60);

  return (
    <View
      style={{
        ...styles.mainView,
        marginLeft: horizontalMargin,
        marginRight: horizontalMargin,
      }}
    >
      <Button onPress={onPressDraft}>
        <Text style={{ ...styles.text }}>Draft</Text>
      </Button>
      <Button onPress={onPressOptions}>
        <IconSimple
          name="options"
          size={rfvalue(28)}
          color={colors.darkPurple}
        />
      </Button>
    </View>
  );
};

const Button = ({ children, onPress }) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: rfvalue(60),
  },
  text: {
    fontFamily: "PoppinsBold",
    fontSize: rfvalue(15),
    color: colors.darkPurple,
  },
});

export default Header;
