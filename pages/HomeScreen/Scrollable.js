import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Card from "./Card";

const Scrollable = () => {
  return (
    <ScrollView style={styles.scrollable}>
      <Card
        musicTimeLength={10000}
        userImg="ed-sheeran"
        userTag="ed_sheeran"
        musicName="It Was a Good Day"
        musicStyle="Indie Rock"
        bpm={120}
        favs="1.3M"
        faved={false}
        shares={5.521}
      />
      <Card
        musicTimeLength={10000}
        userImg="ed-sheeran"
        userTag="ed_sheeran"
        musicName="It Was a Good Day"
        musicStyle="Indie Rock"
        bpm={120}
        favs="1.3M"
        faved={false}
        shares={5.521}
      />
      <Card
        musicTimeLength={10000}
        userImg="ed-sheeran"
        userTag="ed_sheeran"
        musicName="It Was a Good Day"
        musicStyle="Indie Rock"
        bpm={120}
        favs="1.3M"
        faved={false}
        shares={5.521}
      />
      <Card
        musicTimeLength={10000}
        userImg="ed-sheeran"
        userTag="ed_sheeran"
        musicName="It Was a Good Day"
        musicStyle="Indie Rock"
        bpm={120}
        favs="1.3M"
        faved={false}
        shares={5.521}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollable: {
    marginTop: 125,
    paddingTop: 20,
    zIndex: 0,
  },
});

export default Scrollable;
