import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SoundCard from "../../components/SoundCard";
import { rfvalue } from "../../config";

const INFO = [
  {
    musicTimeLength: 6000,
    musicName: "Coimbra? Coimbra!",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "3",
    faved: false,
    shares: 1,
    description: "Guitarra e Harmonica",
  },
  {
    musicTimeLength: 10000,
    musicName: "Chill Beat",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "1.3M",
    faved: false,
    shares: 5.521,
    description: "Lorem",
  },
];

const Scrollable = () => {
  const renderInfo = () => {
    return INFO.map((info, i) => <SoundCard {...info} key={i} />);
  };

  return <ScrollView style={styles.scrollable}>{renderInfo()}</ScrollView>;
};

const styles = StyleSheet.create({
  scrollable: {
    marginBottom: rfvalue(40),
    zIndex: 0,
  },
});

export default Scrollable;
