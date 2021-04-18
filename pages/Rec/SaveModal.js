import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome5";
import IconAnt from "react-native-vector-icons/AntDesign";

import MusicProgression from "../../components/MusicProgression";
import { rfvalue } from "../../config";
import usePlay from "../../hooks/usePlay";

import PlayButton from "../../components/Buttons/PlayButton";
import PauseButton from "../../components/Buttons/PauseButton";

import config from "../../config";
import ModalHoc from "../../components/ModalHoc";

const { colors } = config;

const SaveModal = ({ visible, hide }) => {
  return (
    <ModalHoc {...{ visible }}>
      <View style={{ ...styles.mainView }}>
        <View style={{ ...styles.innerView }}>
          <Audio />
          <InputText title="Title" placeholder="Hypnotize" />
          <InputText
            title="Description"
            placeholder="Lorem Ipsum is simply dummy text"
          />
          <View style={{ ...styles.dropdowns }}>
            <Dropdown title="Scale" options={["A Maj"]} />
            <Dropdown title="Genre" options={["Indie Rock"]} />
          </View>
          <Buttons hide={hide} />
        </View>
      </View>
    </ModalHoc>
  );
};

const InputText = ({ title, placeholder }) => {
  const [text, setText] = useState("");

  return (
    <View style={{ ...styles.inputText }}>
      <Text style={{ ...styles.text, ...styles.title }}>{title}</Text>
      <View style={{ ...styles.inputTextInput }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#DDE1F0"
          value={text}
          onChangeText={(text) => setText(text)}
          style={{
            ...styles.text,
            marginLeft: rfvalue(10),
            marginBottom: rfvalue(10),
          }}
        />
      </View>
    </View>
  );
};

const Dropdown = ({ title, options }) => {
  const [option, setOption] = useState(options[0]);

  return (
    <View style={{ ...styles.dropdown }}>
      <View style={{ width: "70%" }}>
        <Text style={{ ...styles.text, ...styles.title }}>{title}</Text>
        <View style={{ ...styles.dropdownValue }}>
          <TouchableOpacity
            style={{
              marginBottom: rfvalue(10),
              ...styles.dropdownValueTouchable,
            }}
          >
            <Text style={{ ...styles.text }}>{option}</Text>
            <Icon
              name="arrow-down"
              size={rfvalue(16)}
              color={colors.darkPurple}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
        <IconAwesome size={rfvalue(size)} color={color} name="trash" />
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

const styles = StyleSheet.create({
  mainView: {
    borderRadius: 20,

    backgroundColor: colors.white,
    marginLeft: rfvalue(20),
    marginRight: rfvalue(20),
  },

  innerView: {
    marginLeft: rfvalue(20),
    marginRight: rfvalue(20),

    paddingTop: rfvalue(20),
    paddingBottom: rfvalue(20),
  },

  audio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontFamily: "PoppinsRegular",
    color: colors.mediumPurple,
  },

  title: {
    fontFamily: "PoppinsBold",
    fontSize: rfvalue(15),
  },

  inputText: {
    marginTop: rfvalue(30),
  },

  inputTextInput: {
    marginTop: rfvalue(13),

    borderBottomWidth: 1,
    borderBottomColor: colors.mediumPurple,
  },

  dropdowns: {
    marginTop: rfvalue(30),
    flexDirection: "row",
  },

  dropdown: {
    flex: 0.5,

    flexDirection: "column",
    alignItems: "center",
  },

  dropdownValue: {
    width: "100%",

    marginTop: rfvalue(5),

    borderBottomColor: colors.mediumPurple,
    borderBottomWidth: 1,
  },

  dropdownValueTouchable: {
    marginLeft: rfvalue(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: rfvalue(40),
  },
});

export default SaveModal;
