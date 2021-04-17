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

const mixData = [
  {
    nSamples: 5,
    title: "Cool Beats",
    samplesData: [
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg:
          "https://scontent.fopo2-2.fna.fbcdn.net/v/t1.6435-9/60699165_2268414479861742_5825497553562501120_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xndwKOK_o_oAX-TIWAH&_nc_ht=scontent.fopo2-2.fna&oh=8621e3dae9aa240674d810717c526ef9&oe=60A1020A",
      },
      {
        type: "Vocals",
        title: "It was a Good Day",
        userImg: "https://i.imgur.com/7RBF3Xk.jpg",
      },
    ],
    draftsData: [
      {
        title: "Draft 1",
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
    draftsData: [
      {
        title: "Draft 1",
      },
    ],
  },
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
  const onPressCard = () => {
    //ADD STUDIO
  };

  const changePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <TouchableOpacity onPress={onPressCard} style={styles.sampleCardView}>
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
  const { samples, drafts } = props;
  return (
    <View style={styles.labelView}>
      <ScrollView horizontal style={styles.scrollView}>
        {samples && (
          <>
            {samples.map((sample, index) => (
              <SampleCard key={index} sample={sample} />
            ))}
          </>
        )}
        {drafts && (
          <>
            {drafts.map((draft, index) => (
              <View style={{ paddingBottom: RFValue(8, 812) }}>
                <DraftCard key={index} draft={draft} />
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
          <ScrollerSamples samples={item.samplesData} />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.label}>Mixes Drafts</Text>
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
          <ScrollerSamples drafts={item.draftsData} />
        </>
      )}
    </View>
  );
};

const MixFolderContainer = () => {
  return (
    <View style={{ marginTop: RFValue(24, 812), width: "100%" }}>
      {mixData.map((item) => {
        return <Folder item={item} />;
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

export default MixFolderContainer;
