import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Text>Drafts</Text>
      <Text>...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
