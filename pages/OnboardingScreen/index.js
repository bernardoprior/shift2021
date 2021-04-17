import React from "react";
import { Modal, Alert, Text, View, StyleSheet } from "react-native";

import SimpleButton from "../../components/SimpleButton";
import Icon from "../../components/IconWithLabel";
import config, { rfvalue } from "../../config";
import { Colors } from "react-native/Libraries/NewAppScreen";
const colors = config.colors;

const OnboardingScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.icon}>
        <Icon
          icon={require("../../assets/logo.png")}
        />
      </View>
      <Text style={styles.motto}>
        To aid all your {'\n'} music needs
      </Text>
      <View style={styles.buttonsCol}>
        <SimpleButton text="Register" />
        <SimpleButton style={{ marginTop: rfvalue(25), backgroundColor: colors.darkPurple }} text="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.darkPurple,
    flex: 1,
  },
  icon: {
    paddingTop: rfvalue(150),
  },
  motto: {
    color: colors.white,
    fontFamily: "PoppinsBold",
    fontSize: rfvalue(40),
    marginBottom: rfvalue(80)
  },
  buttonsCol: {
    alignItems: "center",
    width: "100%",
    paddingBottom: rfvalue(100),
  }
});

export default OnboardingScreen;
