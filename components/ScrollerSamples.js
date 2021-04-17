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

const musicWaveData = [
  100,
  75,
  100,
  40,
  50,
  40,
  75,
  100,
  75,
  29,
  75,
  100,
  75,
  29,
];

const SampleCard = (props) => {
  const { sample } = props;
  return (
    <View style={styles.sampleCardView}>
      <TouchableOpacity>
        <Avatar avatarURL={sample.userImg} size={85} />
      </TouchableOpacity>
      <View style={styles.sampleInfoView}>
        <Text style={styles.cardText}>{sample.title}</Text>
        <Text style={styles.cardTypeText}>{sample.type}</Text>
        <MusicProgression
          height={30}
          fullWidth={100}
          percentageColored={100 / 25}
          frequencySequence={musicWaveData}
        />
      </View>
    </View>
  );
};

const DraftCard = (props) => {
  const { draft } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const changePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <TouchableOpacity onPress={props.onPressCard} style={styles.sampleCardView}>
      <TouchableOpacity onPress={changePlay}>
        {!isPlaying && (
          <Icon
            name="play-circle"
            size={RFValue(64, 812)}
            color={colors.darkPurple}
          />
        )}
        {isPlaying && (
          <Icon
            name="pause-circle"
            size={RFValue(64, 812)}
            color={colors.darkPurple}
          />
        )}
      </TouchableOpacity>
      <View style={styles.sampleInfoView}>
        <Text style={styles.cardText}>{draft.title}</Text>
        <MusicProgression
          height={30}
          fullWidth={100}
          percentageColored={100 / 25}
          frequencySequence={musicWaveData}
        />
      </View>
    </TouchableOpacity>
  );
};

const ScrollerSamples = (props) => {
  const { samples, drafts, onPressDraft } = props;
  return (
    <View style={styles.labelView}>
      <ScrollView horizontal style={styles.scrollView}>
        {samples && (
          <>
            {samples.map((sample, index) => (
              <SampleCard
                navigation={props.navigation}
                key={index}
                sample={sample}
              />
            ))}
          </>
        )}
        {drafts && (
          <>
            {drafts.map((draft, index) => (
              <View style={{ paddingBottom: RFValue(8, 812) }}>
                <DraftCard
                  key={index}
                  draft={draft}
                  navigation={props.navigation}
                  onPressCard={onPressDraft}
                />
              </View>
            ))}
          </>
        )}
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
    <View style={styles.FolderMainView}>
      <TouchableOpacity
        onPress={onPress}
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
      </TouchableOpacity>
      {isActive && (
        <>
          <Text style={styles.label}>Samples</Text>
          <ScrollerSamples
            navigation={props.navigation}
            samples={item.samplesData}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Drafts</Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                paddingHorizontal: RFValue(24, 812),
              }}
              onPress={() => {}}
            >
              <Icon
                name="sticker-plus-outline"
                size={RFValue(28, 812)}
                color={colors.pink}
              />
            </TouchableOpacity>
          </View>
          <ScrollerSamples
            navigation={props.navigation}
            drafts={item.draftsData}
          />
        </>
      )}
    </View>
  );
};

const MixFolderContainer = (props) => {
  return (
    <View style={{ marginTop: RFValue(24, 812), width: "100%" }}>
      {mixData.map((item) => {
        return <Folder navigation={props.navigation} item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  FolderMainView: {
    flex: 1,
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
    marginVertical: RFValue(8, 812),
  },

  labelView: {
    backgroundColor: colors.lightPurple,
  },

  sampleCardView: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: RFValue(8, 812),
    paddingHorizontal: RFValue(12, 812),
    borderRadius: RFValue(16, 812),
    marginHorizontal: RFValue(16, 812),
    marginVertical: RFValue(8, 812),
  },

  cardText: {
    fontSize: RFValue(18, 812),
    fontFamily: "PoppinsBold",
  },

  sampleInfoView: {
    marginLeft: RFValue(16, 812),
  },

  cardTypeText: {
    marginTop: RFValue(-8, 812),
    fontSize: RFValue(14, 812),
    fontFamily: "PoppinsRegular",
    opacity: 0.9,
    marginBottom: RFValue(8, 812),
  },
  scrollView: {
    width: "100%",
  },

  avatarPlay: {
    position: "absolute",
    top: "50%",
  },
});

export default ScrollerSamples;
