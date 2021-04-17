import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

import config, { rfvalue } from "../config";

const { colors } = config;

const IconWithLable = ({
  icon,
  text = "",
  onPress,
  imgStyles = {},
  textStyles = {},
  styles = {},
  flexDirection,
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
        <Image style={imgStyles} source={icon} />
      </TouchableOpacity>
      <Text
        style={{
          ...textStyles,
          //fontFamily: "PoppinsRegular",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default IconWithLable;
