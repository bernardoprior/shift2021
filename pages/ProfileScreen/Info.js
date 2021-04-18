import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../components/Avatar";
import { rfvalue } from "../../config";

import config from "../../config";

const { colors } = config;

const Info = ({ userTag, info }) => {
  return (
    <View style={{ ...styles.mainView }}>
      <Top {...{ userTag }} />
      <Bottom info={info} />
    </View>
  );
};

const Top = ({ userTag }) => {
  const horizontalMargin = rfvalue(50);

  return (
    <View
      style={{
        ...styles.topView,
      }}
    >
      <Avatar size={100} avatarURL="https://i.imgur.com/7RBF3Xk.jpg" />
      <Text
        style={{
          ...styles.text,
          fontFamily: "PoppinsBold",
          fontSize: rfvalue(18),
        }}
      >{`@${userTag}`}</Text>
    </View>
  );
};

const Bottom = ({ info }) => {
  const renderItems = () => {
    return info.map((elem, i) => <Item key={i} {...info[i]} />);
  };

  const horizontalMargin = rfvalue(30);

  return (
    <View
      style={{
        ...styles.bottomView,
        marginLeft: horizontalMargin,
        marginRight: horizontalMargin,
      }}
    >
      {renderItems()}
    </View>
  );
};

const Item = ({ title, value }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ ...styles.text }}>{value}</Text>
      <Text style={{ ...styles.text }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {},
  topView: {
    marginTop: rfvalue(40),

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginLeft: rfvalue(50),
    marginRight: rfvalue(100),
  },
  bottomView: {
    marginTop: rfvalue(20),

    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    textAlign: "center",
    color: colors.white,
    fontFamily: "PoppinsRegular",
  },
});

export default Info;
