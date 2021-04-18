import React, { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { ScrollView, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { Dimensions } from "react-native";
import data from "./Data.js";

const height = Dimensions.get("window").height;

const Scrollable = ({ option }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const renderItems = ({ item, index }) => {
    return (
      <Card
        musicTimeLength={5000}
        userImg={
          !option
            ? data.followingData[index].userImg
            : data.shuffleData[index].userImg
        }
        userTag={item.userTag}
        musicName={item.musicName}
        musicStyle={item.musicStyle}
        bpm={item.bpm}
        favs={item.favs}
        faved={false}
        shares={item.shares}
        currentIndex={currentIndex}
        index={index}
      />
    );
  };

  return (
    <Carousel
      data={!option ? data.followingData : data.shuffleData}
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
