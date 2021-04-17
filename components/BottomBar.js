import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import config from "../config";
const colors = config.colors;

const icons = [
  [
    require("../assets/bottom-bar/0.png"),
    require("../assets/bottom-bar/0-selected.png"),
  ],
  [
    require("../assets/bottom-bar/1.png"),
    require("../assets/bottom-bar/1-selected.png"),
  ],
  [
    require("../assets/bottom-bar/2.png"),
    require("../assets/bottom-bar/2-selected.png"),
  ],
  [
    require("../assets/bottom-bar/3.png"),
    require("../assets/bottom-bar/3-selected.png"),
  ],
  [
    require("../assets/bottom-bar/4.png"),
    require("../assets/bottom-bar/4-selected.png"),
  ],
];

const BottomBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.darkPurple,
        height: RFValue(64, 812),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const imagePath = isFocused
          ? "../assets/bottom-bar/" + index + "-selected.png"
          : "../assets/bottom-bar/" + index + ".png";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={
              index == 2
                ? { marginBottom: RFValue(64, 812) }
                : { flex: 1, alignItems: "center" }
            }
          >
            <Image
              style={styles.image}
              source={isFocused ? icons[index][1] : icons[index][0]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default BottomBar;
