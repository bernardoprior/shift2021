import React, { useState } from "react";
import {
  //   Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/AntDesign";

import config, { rfvalue } from "../../config";

const { colors } = config;

const Filter = ({ visible, hide }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalView} onPress={hide}>
        <View style={styles.mainView}>
          <BPM />
          <Dropdown title="Chord" options={["A#"]} />
          <Dropdown title="Genre" options={["Any"]} />
          <View style={{ ...styles.buttons }}>
            <Button
              title="Cancel"
              buttonColor={colors.darkPurple}
              textColor={colors.white}
              borderSide={false}
              onPress={hide}
            />
            <Button
              title="Apply"
              buttonColor={colors.white}
              textColor={colors.darkPurple}
              borderSide={true}
              onPress={hide}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Item = ({ children }) => {
  return (
    <View style={{ ...styles.bpm }}>
      <View style={{ ...styles.bpmInner }}>{children}</View>
    </View>
  );
};

const BPM = () => {
  const [bpm, setBpm] = useState(120);

  const addBpm = () => {
    setBpm((prev) => prev + 1);
  };
  const subtractBpm = () => {
    setBpm((prev) => prev - 1);
  };

  return (
    <Item>
      <Text style={{ ...styles.text }}>BPM</Text>
      <View style={styles.bpmEdit}>
        <TouchableOpacity style={{ ...styles.icon }} onPress={subtractBpm}>
          <Icon2 name="minus" size={rfvalue(32)} color={colors.white} />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.text,
            marginLeft: rfvalue(10),
            marginRight: rfvalue(10),
          }}
        >
          {bpm}
        </Text>
        <TouchableOpacity style={{ ...styles.icon }} onPress={addBpm}>
          <Icon name="add" size={rfvalue(32)} color={colors.white} />
        </TouchableOpacity>
      </View>
    </Item>
  );
};

const Dropdown = ({ title, options }) => {
  const [option, setOption] = useState(options[0]);
  return (
    <Item>
      <Text style={{ ...styles.text }}>{title}</Text>
      <Text style={{ ...styles.text, flex: 0.36 }}>{option}</Text>
    </Item>
  );
};

const Button = ({ title, onPress, buttonColor, textColor, borderSide }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        borderColor: colors.white,
        borderWidth: 1,
        backgroundColor: buttonColor,
        borderBottomLeftRadius: borderSide == false ? 20 : 0,
        borderBottomRightRadius: borderSide != false ? 20 : 0,
      }}
    >
      <Text style={{ ...styles.text, ...styles.title, color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
  },

  mainView: {
    backgroundColor: colors.darkPurple,
    flex: 0.26,
    alignItems: "center",

    marginLeft: rfvalue(20),
    marginRight: rfvalue(20),
    borderRadius: 20,
  },

  bpm: {
    width: "100%",
    borderBottomColor: colors.pink,
    borderTopColor: colors.darkPurple,
    borderLeftColor: colors.darkPurple,
    borderRightColor: colors.darkPurple,
    borderWidth: 1,
    marginTop: rfvalue(10),
  },

  bpmInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: rfvalue(25),
    marginRight: rfvalue(25),
    marginBottom: rfvalue(10),
  },

  button: {
    width: "49%",
    paddingTop: rfvalue(10),
    paddingBottom: rfvalue(10),
  },

  buttons: {
    marginTop: rfvalue(10),
    borderWidth: 1,

    width: "95%",

    flexDirection: "row",
    justifyContent: "space-between",
  },

  bpmEdit: {
    flexDirection: "row",
  },

  icon: {},

  text: {
    color: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: rfvalue(15),
  },

  title: {
    fontSize: rfvalue(20),
  },
});

export default Filter;
