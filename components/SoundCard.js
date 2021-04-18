import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
} from "react-native";

import config, { rfvalue } from "../config";
import usePlay from "../hooks/usePlay";
import useTimer from "../hooks/useTimer";
import ShareButton from "./Buttons/ShareButton";
import FavButton from "./Buttons/FavButton";
import SaveButton from "./Buttons/SaveButton";
import IconWithLable from "./IconWithLabel";
import MusicProgression from "./MusicProgression";

const { colors } = config;

const SoundCard = ({
  musicName,
  recordedWhen,
  favs,
  faved,
  shares,
  genre,
  scale,
}) => {
  const [show, setShow] = useState(false);
  const { onPlayPause, percentageTimeElapsed, isRunning } = usePlay(0, 2000);

  return (
    <TouchableOpacity
      style={{ ...styles.card }}
      onPress={() => setShow((prev) => !prev)}
    >
      <View style={styles.mainInfo}>
        <View style={{ width: "75%" }}>
          <Text
            style={{
              ...styles.text,
            }}
          >
            {musicName}
          </Text>
          <MusicProgression
            disabled={true}
            percentageColored={percentageTimeElapsed}
            uncoloredColor="#DDE1F0"
            height={40}
            fullWidth="100%"
            frequencySequence={[
              25,
              75,
              100,
              75,
              25,
              40,
              50,
              10,
              100,
              75,
              25,
              10,
              30,
              40,
              100,
              80,
              90,
              60,
              50,
              44,
              45,
              26,
              0,
            ]}
          />
        </View>
        <View>
          <Text style={styles.text}>{recordedWhen}</Text>
          <TouchableOpacity onPress={onPlayPause}>
            <Image
              source={
                isRunning
                  ? require("../assets/pause.png")
                  : require("../assets/play.png")
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      {show && <SecondaryInfo favorite={faved} />}
    </TouchableOpacity>
  );
};

const SecondaryInfo = ({ faved }) => {
  const [favorite, setFavorite] = useState(faved);

  const onPressFav = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <View style={styles.secondaryInfo}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <IconWithLable
          onPress={onPressFav}
          flexDirection="column"
          textStyles={styles.secondaryInfoText}
        >
          <FavButton color={colors.darkPurple} size={rfvalue(30)} />
        </IconWithLable>
        <IconWithLable
          styles={{ marginTop: rfvalue(20) }}
          // icon={require("../assets/shareBlack.png")}
          flexDirection="column"
          textStyles={styles.secondaryInfoText}
        >
          <ShareButton color={colors.darkPurple} size={rfvalue(30)} />
        </IconWithLable>
        <IconWithLable
          styles={{ marginTop: rfvalue(20) }}
          // icon={require("../assets/shareBlack.png")}
          flexDirection="column"
          textStyles={styles.secondaryInfoText}
        >
          <SaveButton color={colors.darkPurple} size={rfvalue(30)} />
        </IconWithLable>
      </View>
      <View style={{ marginTop: rfvalue(20) }}>
        <TitleAndText
          title="Description"
          text="Lorem Ipsum is simply dummy of the text of the printing and
          typesetting industry"
          width="100%"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TitleAndText title="Scale" text="A Maj" width="50%" />
        <TitleAndText title="Genre" text="Indie Rock" width="50%" />
      </View>
    </View>
  );
};

const TitleAndText = ({ title, text, width }) => (
  <View
    style={{
      flexDirection: "column",
      width,
    }}
  >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,

    marginTop: rfvalue(20),
    marginLeft: rfvalue(30),
    marginRight: rfvalue(30),
    borderRadius: 10,

    paddingTop: rfvalue(10),
    paddingBottom: rfvalue(10),

    paddingLeft: rfvalue(25),
    paddingRight: rfvalue(25),
  },

  mainInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  secondaryInfo: {
    justifyContent: "flex-start",
    alignItems: "flex-start",

    marginTop: rfvalue(15),

    // borderColor: "red",
    // borderWidth: 2,
  },

  secondaryInfoText: {
    marginLeft: rfvalue(15),
  },

  text: {
    //fontFamily: "PoppinsRegular",
    marginBottom: rfvalue(10),
  },

  title: {
    //fontFamily: "PoppinsBold",
    fontWeight: "bold",
  },
});

export default SoundCard;
