import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";

import config from "../../config";
import Info from "./Info";
import Scrollable from "./Scrollable";

const { colors } = config;

const ProfileScreen = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <Info
        userTag="mikeMark"
        info={[
          { title: "Sounds", value: 29 },
          { title: "Followers", value: 334 },
          { title: "Following", value: 230 },
          { title: "likes", value: 5000 },
        ]}
      />
      <Scrollable />
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
