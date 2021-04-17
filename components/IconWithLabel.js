import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import config, { rfvalue } from "../config";

const { colors } = config;

const IconWithLable = ({
  icon = null,
  text = "",
  onPress,
  imgStyles = {},
  textStyles = {},
  styles = {},
  flexDirection,
  children,
}) => {
  return (
    <View
      style={{
        flexDirection,
        justifyContent: "center",
        alignItems: "center",
        ...styles,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        {icon != null ? <Image style={imgStyles} source={icon} /> : children}
      </TouchableOpacity>
      <Text
        style={{
          ...textStyles,
          fontFamily: "PoppinsRegular",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default IconWithLable;
