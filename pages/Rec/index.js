import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { View, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";

import SimpleHeader from "../HomeScreen/Header.js";

import config from "../../config";
const colors = config.colors;

const RecPage = () => {
  const [option, setOption] = useState(false);

  const onPressHeader = (bool) => {
    if (option != bool) setOption(bool);
  };
  return (
    <View style={styles.mainView}>
      <SimpleHeader
        option={option}
        onPress={onPressHeader}
        text="Sampling"
        secText="Mix"
      />
      <Text>Tuner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: colors.mediumPurple,
  },
});
export default RecPage;
