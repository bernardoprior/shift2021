import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SoundCard, { SoundCardAvatar } from "../../components/SoundCard";
import { rfvalue } from "../../config";

const INFO = [
  {
    musicName: "Guitar Solo",
    musicTimeLength: 10000,
    favs: "1000",
    shares: "123",
    faved: true,
    recordedWhen: "Today",
    userTag: "colier",
    avatar:
      "https://scontent.fopo2-2.fna.fbcdn.net/v/t1.6435-9/60699165_2268414479861742_5825497553562501120_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xndwKOK_o_oAX-TIWAH&_nc_ht=scontent.fopo2-2.fna&oh=8621e3dae9aa240674d810717c526ef9&oe=60A1020A",
  },
  {
    musicName: "Vibing wit flute",
    musicTimeLength: 10000,
    favs: "1000",
    shares: "123",
    faved: true,
    recordedWhen: "2w ago",
    userTag: "colier",
    avatar:
      "https://scontent.fopo2-2.fna.fbcdn.net/v/t1.6435-9/60699165_2268414479861742_5825497553562501120_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=xndwKOK_o_oAX-TIWAH&_nc_ht=scontent.fopo2-2.fna&oh=8621e3dae9aa240674d810717c526ef9&oe=60A1020A",
  },
];

const Scrollable = () => {
  const renderCards = () => {
    return INFO.map((info, i) => <SoundCardAvatar key={i} {...info} />);
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
