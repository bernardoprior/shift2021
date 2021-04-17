import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";

import config from "../../config";

const { colors } = config;

const ProfileScreen = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      {/* <Info /> */}
      {/* <SamplesList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.lightPurple,
    height: "100%",
  },
});

export default ProfileScreen;
