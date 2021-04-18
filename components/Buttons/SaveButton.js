import React from "react";
import IconMaterial from "react-native-vector-icons/MaterialIcons";

const SaveButton = ({ size, color }) => {
  return <IconMaterial name="save-alt" {...{ size, color }} />;
};

export default SaveButton;
