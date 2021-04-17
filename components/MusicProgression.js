import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import config from "../config";

const { colors } = config;

const DEFAULT = [
  29,
  75,
  100,
  75,
  29,
  75,
  100,
  75,
  29,
  75,
  100,
  75,
  29,
  75,
  100,
  75,
  29,
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

const MusicProgression = ({
  percentageColored,
  frequencySequence = null,
  onPress,
  height = 65,
  width = 2.5,
}) => {
  const renderBars = () => {
    const seq = frequencySequence || DEFAULT;

    return seq.map((s, i) => (
      <Bar
        key={i}
        height={s}
        colored={i / seq.length < percentageColored}
        width={width}
      />
    ));
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%",
        height,
      }}
    >
      {renderBars()}
    </TouchableOpacity>
  );
};

const Bar = ({ height, colored, width }) => {
  return (
    <Text
      style={{
        height: `${height % 101}%`,
        borderRadius: 10,
        borderColor: colored ? colors.pink : colors.white,
        opacity: colored ? 1 : 0.5,
        borderWidth: width % 4,
      }}
    ></Text>
  );
};

const styles = StyleSheet.create({});

export default MusicProgression;
