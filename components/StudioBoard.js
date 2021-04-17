import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import config from "../config";
const colors = config.colors;

const Field = () => {
  return <View style={styles.fieldView}></View>;
};

const FieldRow = ({ index }) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          ...styles.studioLabel,
          ...{
            color: index % 4 != 1 ? colors.darkPurple : colors.white,
          },
        }}
      >
        {index}
      </Text>
      <Field />
      <Field />
      <Field />
      <Field />
    </View>
  );
};

const StudioBoard = (props) => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      <FieldRow index={1} />
      <FieldRow index={2} />
      <FieldRow index={3} />
      <FieldRow index={4} />
      <FieldRow index={5} />
      <FieldRow index={6} />
      <FieldRow index={7} />
      <FieldRow index={8} />
      <FieldRow index={9} />
      <FieldRow index={10} />
      <FieldRow index={11} />
      <FieldRow index={12} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fieldView: {
    height: RFValue(80, 812),
    width: RFValue(60, 812),
    backgroundColor: colors.lightPurple,
    marginVertical: RFValue(3, 812),
    marginHorizontal: RFValue(2, 812),
  },
  scrollView: {
    marginHorizontal: 20,
    paddingTop: RFValue(20, 812),
  },
  studioLabel: {
    fontFamily: "PoppinsBold",
    fontSize: RFValue(18, 812),
    color: "white",
  },
});

export default StudioBoard;
