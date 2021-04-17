import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import config, { rfvalue } from "../config";
import useTimer from "../hooks/useTimer";
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
  const { isRunning, startStop } = useTimer();

  return (
    <TouchableOpacity style={{ ...styles.card }}>
      <View style={{ width: "75%" }}>
        <Text
          style={{
            ...styles.musicProgressionText,
          }}
        >
          {musicName}
        </Text>
        <MusicProgression
          disabled={true}
          percentageColored={0.4}
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
        <Text>{recordedWhen}</Text>
        <TouchableOpacity onPress={startStop}>
          <Image
            source={
              isRunning
                ? require("../assets/pause.png")
                : require("../assets/play.png")
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,

    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: rfvalue(20),
    marginLeft: rfvalue(30),
    marginRight: rfvalue(30),
    borderRadius: 10,

    paddingTop: rfvalue(10),
    paddingBottom: rfvalue(10),

    paddingLeft: rfvalue(25),
    paddingRight: rfvalue(25),
  },

  musicProgressionText: {
    marginBottom: rfvalue(10),
  },
});

export default SoundCard;
