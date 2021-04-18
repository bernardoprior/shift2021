import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Audio from "./Audio";
import ModalHoc from "./ModalHoc";
import IconIonic from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";

import config, { rfvalue } from "../config";
import { useState } from "react";

const { colors } = config;

const SaveSample = ({ visible, hide }) => {
  return (
    <ModalHoc {...{ visible }}>
      <View style={styles.mainView}>
        <View style={{ ...styles.innerView }}>
          <Audio />
          <Input />
          <Buttons hide={hide} />
        </View>
      </View>
    </ModalHoc>
  );
};

const Buttons = ({ hide }) => {
  const size = 32;
  const color = colors.mediumPurple;

  const horizontalMargin = rfvalue(60);

  return (
    <View
      style={{
        ...styles.buttons,
        marginLeft: horizontalMargin,
        marginRight: horizontalMargin,
      }}
    >
      <Button onPress={hide}>
        <IconIonic size={rfvalue(size)} color={color} name="arrow-back" />
      </Button>
      <Button onPress={hide}>
        <IconAnt size={rfvalue(size)} color={color} name="checkcircle" />
      </Button>
    </View>
  );
};

const Button = ({ children, onPress }) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <View
      style={{
        borderBottomColor: colors.darkPurple,
        borderBottomWidth: 1,
        marginTop: rfvalue(30),
      }}
    >
      <Text
        style={{
          fontFamily: "PoppinsRegular",
          color: colors.darkPurple,
        }}
      >
        Folder
      </Text>
      <TextInput
        placeholder="Choose a folder to save this sample in"
        onChangeText={(text) => setValue(text)}
        value={value}
        style={{
          marginBottom: rfvalue(5),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    marginHorizontal: rfvalue(20),
    borderRadius: 20,
  },
  innerView: {
    marginHorizontal: rfvalue(20),
    marginVertical: rfvalue(20),
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: rfvalue(20),
  },
});

export default SaveSample;
