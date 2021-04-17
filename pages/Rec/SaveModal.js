import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome5";
import IconAnt from "react-native-vector-icons/AntDesign";

import MusicProgression from "../../components/MusicProgression";
import { rfvalue } from "../../config";
import usePlay from "../../hooks/usePlay";

import config from "../../config";

const { colors } = config;

const SaveModal = ({ visible, hide }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={{ ...styles.modalView }}>
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
              <Dropdown title="Genre" options={["Rap"]} />
            </View>
            <Buttons hide={hide} />
          </View>
        </View>
      </View>
    </Modal>
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
          style={{ marginLeft: rfvalue(10) }}
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
          <TouchableOpacity style={{ ...styles.dropdownValueTouchable }}>
            <Text>{option}</Text>
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

  const color = colors.darkPurple;
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
          <IconAnt name="play" size={size} color={color} />
        ) : (
          <IconAwesome name="pause-circle" size={size} color={color} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const Buttons = ({ hide }) => {
  const size = 48;
  const color = colors.darkPurple;

  return (
    <View style={{ ...styles.buttons }}>
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
  modalView: {
    flex: 1,
    justifyContent: "center",
  },

  mainView: {
    borderRadius: 20,

    backgroundColor: colors.white,
    marginLeft: rfvalue(20),
    marginRight: rfvalue(20),
  },

  innerView: {
    marginLeft: rfvalue(20),
    marginRight: rfvalue(20),

    paddingTop: rfvalue(30),
    paddingBottom: rfvalue(20),
  },

  audio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    //fontFamily: "PoppinsRegular",
    color: colors.darkPurple,
  },

  title: {
    //fontFamily: "PoppinsBold",
    fontWeight: "bold",
    fontSize: rfvalue(15),
  },

  inputText: {
    marginTop: rfvalue(30),
  },

  inputTextInput: {
    marginTop: rfvalue(13),

    borderBottomWidth: 1,
    borderBottomColor: colors.darkPurple,
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

    borderBottomColor: colors.darkPurple,
    borderBottomWidth: 1,
  },

  dropdownValueTouchable: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: rfvalue(60),
    marginBottom: rfvalue(10),

    marginLeft: rfvalue(80),
    marginRight: rfvalue(80),
  },
});

export default SaveModal;
