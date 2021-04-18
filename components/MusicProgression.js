import React, { useState, useEffect } from "react";
import { useReducer } from "react";
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

const initial_state = {
  flow: false,
  add: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set":
      return { ...state, flow: action.flow, add: action.add };
  }
};

const MusicProgression = ({
  percentageColored,
  frequencySequence = null,
  onPress,
  height = 65,
  width = 2.5,
  fullWidth = "70%",
  uncoloredColor = colors.white,
  disabled = false,
}) => {
  const [h, setH] = useState(0);

  useEffect(() => {
    if (h <= -10) setH(10);
    else setH((prev) => prev - 1);
  }, [percentageColored]);

  const renderBars = () => {
    const seq = frequencySequence || DEFAULT;

    return seq.map((s, i) => (
      <Bar
        key={i}
        height={s}
        h={h}
        colored={i / seq.length < percentageColored}
        width={width}
        uncoloredColor={uncoloredColor}
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
        width: fullWidth,
        height,
      }}
      disabled={disabled}
    >
      {renderBars()}
    </TouchableOpacity>
  );
};

const Bar = ({ height, colored, width, uncoloredColor, h }) => {
  const val = height + h;

  return (
    <Text
      style={{
        height: `${(val < 0 ? 0 : val > 100 ? 100 : val) % 101}%`,
        borderRadius: 10,
        borderColor: colored ? colors.pink : uncoloredColor,
        opacity: colored ? 1 : 0.5,
        borderWidth: width % 4,
      }}
    ></Text>
  );
};

const styles = StyleSheet.create({});

export default MusicProgression;
