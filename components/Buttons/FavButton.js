import React from "react";
import IconAwesome from "react-native-vector-icons/Entypo";

const FavButton = ({ size, color }) => {
  return (
    <IconAwesome
      style={{ backgroundColor: "red" }}
      name="star-outlined"
      size={size}
      color={color}
    />
  );
};

export default FavButton;
