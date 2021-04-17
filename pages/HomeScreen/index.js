import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import config from "../../config";
import Header from "./Header";
import Scrollable from "./Scrollable";
const colors = config.colors;

export default function HomeScreen() {
  const [option, setOption] = useState(false);

  const onPressHeader = (bool) => {
    if (option != bool) setOption(bool);
  };

  return (
    <View style={styles.mainView}>
      <Header option={option} onPress={onPressHeader} />
      <Scrollable />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.lightPurple,
    height: "100%",
    position: "relative",
  },
});
