import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Avatar from "../../components/Avatar.js";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import config from "../../config";
const colors = config.colors;

const MessageContainer = (props) => {
  const { from, content, userImg, nNewMessages, hour } = props.content;

  return (
    <View style={styles.mainView}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar avatarURL={userImg} size={60} />
        <View>
          <View style={styles.text}>
            <Text style={styles.fromText}>{from}</Text>
            <Text style={styles.contentText}>{content}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.hourText}>{hour}</Text>
        <View style={styles.ball}>
          <Text style={styles.contentText}>{nNewMessages}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkPurple,
    width: "100%",
    paddingVertical: RFValue(12, 812),
    paddingHorizontal: RFValue(12, 812),
    marginVertical: RFValue(2, 812),
  },
  text: {
    marginLeft: RFValue(16, 812),
  },
  fromText: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(16, 812),
    color: colors.pink,
  },
  contentText: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(14, 812),
    color: "white",
  },
  hourText: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(14, 812),
    color: "white",
    opacity: 0.6,
  },
  ball: {
    backgroundColor: "#2F80ED",
    alignItems: "center",
    justifyContent: "center",
    fontSize: RFValue(14, 812),
    marginTop: RFValue(4, 812),
    borderRadius: RFValue(12, 812),
  },
});
export default MessageContainer;
