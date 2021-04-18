import React from "react";
import IconAwesome from "react-native-vector-icons/Entypo";

const FavButton = ({ size, color }) => {
  return <IconAwesome name="star-outlined" size={size} color={color} />;
};

export default FavButton;
