import React from "react";
import IconAwesome from "react-native-vector-icons/FontAwesome5";

const PauseButton = ({ size, color }) => {
  return <IconAwesome name="pause-circle" size={size} color={color} />;
};

export default PauseButton;
