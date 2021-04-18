import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import usePlay from "../hooks/usePlay";

import config from "../config";
import MusicProgression from "./MusicProgression";
import PlayButton from "./Buttons/PlayButton";
import PauseButton from "./Buttons/PauseButton";
const { colors } = config;

const Audio = () => {
  const { isRunning, onPlayPause, percentageTimeElapsed, resetTimer } = usePlay(
    0,
    10000
  );

  const color = colors.mediumPurple;
  const size = 48;

  return (
    <View style={{ ...styles.audio }}>
      <MusicProgression
        fullWidth="80%"
        onPress={resetTimer}
        percentageColored={percentageTimeElapsed}
        uncoloredColor="#DDE1F0"
      />
      <TouchableOpacity onPress={onPlayPause}>
        {!isRunning ? (
          <PlayButton {...{ size, color }} />
        ) : (
          <PauseButton {...{ size, color }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  audio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Audio;
