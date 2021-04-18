import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SoundCard from "../../components/SoundCard";
import { rfvalue } from "../../config";

const INFO = [
  {
    musicTimeLength: 10000,
    userImg: "ed-sheeran",
    userTag: "ed_sheeran",
    musicName: "It Was a Good Day",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "1.3M",
    faved: false,
    shares: 5.521,
  },
];

const Scrollable = () => {
  const renderInfo = () => {
    return INFO.map((info, i) => <SoundCard {...info} key={i} />);
  };

  return (
    <>
      {/* <View></View> */}
      <ScrollView style={styles.scrollable}>{renderInfo()}</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollable: {
    marginBottom: rfvalue(40),
    zIndex: 0,
  },
});

export default Scrollable;
