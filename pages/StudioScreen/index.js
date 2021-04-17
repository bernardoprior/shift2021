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
import StudioBoard from "../../components/StudioBoard";

import config from "../../config";
const colors = config.colors;

const StudioHeader = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon name="chevron-left" size={RFValue(36, 812)} color={colors.pink} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Studio</Text>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: RFValue(16, 812),
        }}
      >
        <Icon
          name="content-save"
          style={{
            marginRight: RFValue(24, 812),
          }}
          size={RFValue(32, 812)}
          color={colors.pink}
        />
        <Icon name="trash-can" size={RFValue(32, 812)} color={colors.pink} />
      </View>
    </View>
  );
};

const StudioScreen = (props) => {
  const onPressUndo = () => {};

  const onPlay = () => {};

  const onRedo = () => {};

  const { samples } = props.route.params;
  return (
    <View style={styles.mainView}>
      <StudioHeader navigation={props.navigation} />
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <ScrollerSamples samples={samples} />
      </ScrollView>
      <StudioBoard />
      <View style={styles.buttonsView}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={onPressUndo}>
            <Icon name="undo" size={RFValue(44, 812)} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.playButtonView,
              marginHorizontal: RFValue(32, 812),
            }}
            onPress={onPlay}
          >
            <Icon name="play" size={RFValue(44, 812)} color={colors.pink} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onRedo}>
            <Icon name="redo" size={RFValue(44, 812)} color={colors.white} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.publishButtonView}>
          <Text style={styles.publishButtonText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: colors.darkPurple,
    alignItems: "center",
  },
  headerText: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(24, 812),
    color: "white",
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: RFValue(46, 812),
    paddingHorizontal: RFValue(16, 812),
  },
  publishButtonView: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: RFValue(12, 812),
    paddingVertical: RFValue(8, 812),
    marginTop: RFValue(16, 812),
  },
  publishButtonText: {
    color: colors.darkPurple,
    fontSize: RFValue(24, 812),
    fontFamily: "PoppinsRegular",
  },
  buttonsView: {
    position: "absolute",
    bottom: RFValue(36, 812),
  },
  playButtonView: {
    borderRadius: RFValue(12, 812),
    borderWidth: 3,
    borderColor: colors.lightPurple,
  },
});
export default StudioScreen;
