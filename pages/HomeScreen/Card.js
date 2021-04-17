import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MusicProgression from "../../components/MusicProgression";

import useTimer from "../../hooks/useTimer";

import config, { rfvalue } from "../../config";

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
}) => {
  const [favorite, setFavorite] = useState(faved);
  const timeConv = musicTimeLength / 100;
  const { startStop, elapsedTime, resetTimer } = useTimer(0, timeConv);

  const imgPath = `../../assets/${userImg}.png`;

  const onPressFav = () => {
    setFavorite((prev) => !prev);
  };

  const onPlayPause = () => {
    // setPerc((prev) => (prev <= 1 ? prev + 0.1 : 0));
    if (elapsedTime >= timeConv) resetTimer();
    else startStop();
  };

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.image}
        source={require("../../assets/ed-sheeran.png")}
      />
      <Text style={styles.tag}>{`@${userTag}`}</Text>
      <View style={styles.musicInfo}>
        <Image
          style={styles.colcheia}
          source={require("../../assets/colcheia.png")}
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
        percentageColored={elapsedTime / timeConv}
        onPress={onPlayPause}
      />
      <View style={styles.buttons}>
        <Icon
          icon={
            favorite
              ? require("../../assets/fav_filled.png")
              : require("../../assets/fav.png")
          }
          text={favs}
          onPress={onPressFav}
        />
        <Icon icon={require("../../assets/share.png")} text={shares} />
        <Icon icon={require("../../assets/save.png")} />
      </View>
    </View>
  );
};

const Icon = ({ icon, text = "", onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={icon} />
      </TouchableOpacity>
      <Text style={{ color: colors.white, textAlign: "center" }}>{text}</Text>
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
    fontWeight: "bold",
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
