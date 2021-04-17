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

import MusicProgression from "./MusicProgression.js";

import Avatar from "./Avatar.js";

import config from "../config";
const colors = config.colors;

const mixData = [
  {
    nSamples: 5,
    title: "Cool Beats",
    samplesData: [
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg:
          "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
      },
    ],
  },
  {
    nSamples: 5,
    title: "Cool Beats",
    samplesData: [
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg:
          "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
      },
    ],
  },
];

const SampleCard = (props) => {
  const { sample } = props;
  return (
    <View style={styles.sampleCardView}>
      <Avatar avatarURL={sample.userImg} size={85} />
      <View>
        <Text>{sample.title}</Text>
        <MusicProgression percentageColored={100 / 25} />
      </View>
    </View>
  );
};

const ScrollerSamples = (props) => {
  const { samples } = props;
  return (
    <View style={styles.labelView}>
      <ScrollView>
        {samples.map((sample, index) => (
          <SampleCard key={index} sample={sample} />
        ))}
      </ScrollView>
    </View>
  );
};
const Folder = (props) => {
  const { item } = props;
  const [isActive, setIsActive] = useState(false);

  const onPress = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.FolderMainView}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: RFValue(12, 812),
          justifyContent: "space-between",
          paddingHorizontal: RFValue(24, 812),
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.nSamples}</Text>
        </View>
      </View>
      <Text style={styles.label}>Samples</Text>
      <ScrollerSamples samples={item.samplesData} />

      <Text style={styles.label}>Mixes Drafts</Text>
    </TouchableOpacity>
  );
};

const MixFolderContainer = () => {
  return (
    <View style={{ width: "100%" }}>
      {mixData.map((item) => {
        return <Folder item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  FolderMainView: {
    width: "100%",
    backgroundColor: colors.darkPurple,
    marginVertical: RFValue(2, 812),
    borderRadius: 6,
  },
  title: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(18, 812),
    color: colors.pink,
  },
  badge: {
    borderRadius: RFValue(32, 812),
    backgroundColor: "#2F80ED",
    alignItems: "center",
    justifyContent: "center",
    width: RFValue(32, 812),
    height: RFValue(32, 812),
  },

  badgeText: {
    fontSize: RFValue(16, 812),
    color: "white",
  },

  label: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(18, 812),
    color: "white",
    paddingHorizontal: RFValue(24, 812),
  },

  labelView: {
    backgroundColor: colors.lightPurple,
  },

  sampleCardView: {
    flexDirection: "row",
    backgroundColor: "white",
  },
});

export default MixFolderContainer;
