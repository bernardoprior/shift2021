import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SoundCard from "../../components/SoundCard";
import { rfvalue } from "../../config";

const INFO = [
  {
    musicName: "Sweet Child o'mine",
    musicTimeLength: 10000,
    favs: "1000",
    shares: "123",
    faved: true,
    recordedWhen: "Today",
  },
  {
    musicName: "Yesterday",
    musicTimeLength: 10000,
    favs: "1000",
    shares: "123",
    faved: true,
    recordedWhen: "2w ago",
  },
];

const Scrollable = () => {
  const renderCards = () => {
    return INFO.map((info, i) => <SoundCard key={i} {...info} />);
  };

  return (
    <ScrollView>
      {renderCards()}
      <View style={{ paddingTop: rfvalue(30) }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Scrollable;
