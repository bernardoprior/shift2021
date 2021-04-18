import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MusicProgression from "../../components/MusicProgression";

import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterial from "react-native-vector-icons/MaterialIcons";

import useTimer from "../../hooks/useTimer";
import Avatar from "../../components/Avatar.js";
import Icon from "../../components/IconWithLabel";

import config, { rfvalue } from "../../config";
import ShareButton from "../../components/Buttons/ShareButton";
import SaveButton from "../../components/Buttons/SaveButton";
import { useFolder } from "../../context/FoldersContext";
import SaveSample from "../../components/SaveSample";

const colors = config.colors;

const Card = ({
  userImg,
  userTag,
  musicName,
  musicStyle,
  musicTimeLength, // ms
  bpm,
  favs,
  shares,
  faved,
  currentIndex,
  index,
}) => {
  const [showSaveSample, setShowSaveSample] = useState(false);

  const { addSampleToFolder } = useFolder();

  const [favorite, setFavorite] = useState(faved);
  const totalTimeConverted = musicTimeLength / 100;
  const { startStop, elapsedTime, resetTimer } = useTimer(
    0,
    totalTimeConverted
  );

  const onPressFav = () => {
    setFavorite((prev) => !prev);
  };

  const openSaveSampleModal = () => {
    setShowSaveSample(true);
  };
  const closeSaveSampleModal = () => {
    setShowSaveSample(false);
  };

  const onPressSave = () => {
    openSaveSampleModal();
    // addSampleToFolder(
    //   { type: "Flute", title: musicName, userImg },
    //   "Cool Beats"
    // );
  };

  const onPlayPause = () => {
    // setPerc((prev) => (prev <= 1 ? prev + 0.1 : 0));
    if (elapsedTime >= totalTimeConverted) resetTimer();
    else startStop();
  };

  useEffect(() => {
    if (currentIndex == index) {
      onPlayPause();
    }
  }, [currentIndex]);

  const iconTextStyles = {
    color: colors.white,
    textAlign: "center",
    fontSize: rfvalue(16),
    marginTop: rfvalue(2),
  };

  return (
    <View style={styles.mainView}>
      <SaveSample visible={showSaveSample} hide={closeSaveSampleModal} />
      <View style={styles.image}>
        <Avatar size={140} avatarURL={userImg} />
      </View>
      <Text style={styles.tag}>{`@${userTag}`}</Text>
      <View style={styles.musicInfo}>
        <IconMaterialCommunity
          name="music-note-eighth"
          color={colors.white}
          size={rfvalue(50)}
        />
        <View style={styles.musicInfoTextView}>
          <Text style={{ ...styles.musicInfoText, fontSize: rfvalue(20) }}>
            {musicName}
          </Text>
          <Text style={styles.musicInfoText}>{musicStyle}</Text>
          <Text style={styles.musicInfoText}>{`${bpm} bpm`}</Text>
        </View>
      </View>

      <MusicProgression
        percentageColored={elapsedTime / totalTimeConverted}
        onPress={onPlayPause}
      />
      <View style={styles.buttons}>
        <Icon
          textStyles={iconTextStyles}
          flexDirection="column"
          icon={
            favorite
              ? require("../../assets/fav_filled.png")
              : require("../../assets/fav.png")
          }
          text={favs}
          onPress={onPressFav}
        ></Icon>
        <Icon textStyles={iconTextStyles} flexDirection="column" text={shares}>
          <ShareButton size={rfvalue(42)} color={colors.white} />
        </Icon>
        <Icon
          onPress={onPressSave}
          textStyles={iconTextStyles}
          flexDirection="column"
        >
          <SaveButton size={rfvalue(45)} color={colors.white} />
        </Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.mediumPurple,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 10,
  },
  image: {
    marginTop: 40,
    // borderColor: "red",
    // borderWidth: 1,
  },
  tag: {
    color: colors.white,
    // fontFamily: "PoppinsBold",
    fontSize: rfvalue(20),
    marginTop: 5,
  },

  musicInfo: {
    marginTop: 40,
    marginBottom: 40,

    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  musicInfoTextView: {
    marginLeft: 15,
  },
  musicInfoText: {
    color: colors.white,
    //fontFamily: "PoppinsRegular",
    fontSize: rfvalue(15),
  },

  progression: {
    marginTop: 25,
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 30,
    marginBottom: 40,

    width: "60%",
    // borderColor: "red",
    // borderWidth: 1,
  },
});

export default Card;
