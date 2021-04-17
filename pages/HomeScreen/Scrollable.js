import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { ScrollView, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

const musicData = [
  {
    musicTimeLength: 1000,
    userImg:
      "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
    userTag: "ed_sheeran",
    musicName: "It Was a Good Day",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "1.3M",
    faved: false,
    shares: 5.521,
  },
  {
    musicTimeLength: 1000,
    userImg:
      "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
    userTag: "ed_sheeran",
    musicName: "It Was a Good Day",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "1.3M",
    faved: false,
    shares: 5.521,
  },
  {
    musicTimeLength: 1000,
    userImg:
      "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
    userTag: "ed_sheeran",
    musicName: "It Was a Good Day",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "1.3M",
    faved: false,
    shares: 5.521,
  },
  {
    musicTimeLength: 1000,
    userImg:
      "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
    userTag: "ed_sheeran",
    musicName: "It Was a Good Day",
    musicStyle: "Indie Rock",
    bpm: 120,
    favs: "1.3M",
    faved: false,
    shares: 5.521,
  },
  {
    musicTimeLength: 1000,
    userImg:
      "https://i.pinimg.com/474x/ac/99/67/ac9967dc9aa51d9e12da0e756300baf0.jpg",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const renderItems = ({ index }) => {
    return (
      <Card
        musicTimeLength={1000}
        userImg={musicData[index].userImg}
        userTag="ed_sheeran"
        musicName="It Was a Good Day"
        musicStyle="Indie Rock"
        bpm={120}
        favs="1.3M"
        faved={false}
        shares={5.521}
        currentIndex={currentIndex}
        index={index}
      />
    );
  };

  return (
    <Carousel
      data={musicData}
      renderItem={renderItems}
      sliderHeight={Math.round(height * 0.8)}
      itemHeight={Math.round(height * 0.75)}
      vertical={true}
      inactiveSlideScale={1}
      onSnapToItem={(index) => setCurrentIndex(index)}
    />
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
