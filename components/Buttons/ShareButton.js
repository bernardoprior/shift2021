import React from "react";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";

const ShareButton = ({ size, color }) => {
  return <IconMaterialCommunity name="share-variant" {...{ size, color }} />;
};

export default ShareButton;
