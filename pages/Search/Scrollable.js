import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SoundCard from "../../components/SoundCard";

const Scrollable = () => {
  return (
    <ScrollView>
      <SoundCard
        {...{
          musicName: "Sweet Child o'mine",
          musicTimeLength: 10000,
          favs: "1000",
          shares: "123",
          faved: true,
          recordedWhen: "Today",
        }}
      />
      <SoundCard
        {...{
          musicName: "Yesterday",
          musicTimeLength: 10000,
          favs: "1000",
          shares: "123",
          faved: true,
          recordedWhen: "2w ago",
        }}
      />
      {/* <SoundCard /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Scrollable;
