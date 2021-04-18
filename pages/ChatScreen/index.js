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

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MusicProgression from "../../components/MusicProgression";
import ScrollerSamples from "../../components/ScrollerSamples";
import SearchBar from "../../components/SearchBar";
import MessageContainer from "./MessageContainer.js";

import config from "../../config";
const colors = config.colors;

import conversationsData from "./ChatData.js";

const ChatScreenHeader = () => {
  const onPress = () => {};
  return (
    <View style={styles.headerView}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: RFValue(8, 812),
        }}
      >
        <Text style={styles.headerText}>Recent Chats</Text>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="plus-circle-outline"
            size={RFValue(32, 812)}
            color={colors.pink}
          />
        </TouchableOpacity>
      </View>
      <SearchBar marginRight={0} marginLeft={0} />
    </View>
  );
};

const ChatScreen = (props) => {
  return (
    <View style={styles.mainView}>
      <ChatScreenHeader />
      {conversationsData.map((conversation) => {
        return <MessageContainer content={conversation} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: colors.lightPurple,
    alignItems: "center",
  },

  headerView: {
    width: "100%",
    marginTop: RFValue(64, 812),
    paddingHorizontal: RFValue(16, 812),
    paddingBottom: RFValue(16, 812),
  },

  headerText: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(26, 812),
    color: "white",
  },
});
export default ChatScreen;
