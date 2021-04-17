import React from "react";
import { Modal, Alert, Text, View, StyleSheet } from "react-native";

import SimpleButton from "../../components/SimpleButton";

import config from "../../config";
const colors = config.colors;

const OnboardingScreen = () => {
  return (
    <View style={styles.mainView}>
      <SimpleButton text="Register" />
      <SimpleButton text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkPurple,
    flex: 1,
  },
});

export default OnboardingScreen;
