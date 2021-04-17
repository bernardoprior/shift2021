import React from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Avatar = (props) => {
  const isThereAvatar = props.avatarURL && props.avatarURL !== "";

  return (
    <Image
      source={{ uri: props.avatarURL }}
      style={{
        borderRadius: RFValue(props.size, 812),
        width: RFValue(props.size, 812),
        height: RFValue(props.size, 812),
        borderWidth: 1,
        borderColor: "white",
      }}
    />
  );
};

export default Avatar;
