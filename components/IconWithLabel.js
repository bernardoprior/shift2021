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
  flexDirection,
}) => {
  return (
    <View style={{ flexDirection }}>
      <TouchableOpacity onPress={onPress}>
        <Image style={imgStyles} source={icon} />
      </TouchableOpacity>
      <Text style={textStyles}>{text}</Text>
    </View>
  );
};

export default IconWithLable;
