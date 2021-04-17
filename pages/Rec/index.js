import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import SimpleHeader from "../HomeScreen/Header.js";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MusicProgression from "../../components/MusicProgression";
import MixFolderContainer from "../../components/MixFolderContainer";

import config from "../../config";
import SaveModal from "./SaveModal.js";
const colors = config.colors;

const RecPage = (props) => {
  const [option, setOption] = useState(false);
  const [time, setTime] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [currentInterval, setCurrentInterval] = useState(null);
  const [stopWatch, setStopWatch] = useState(0);
  const [stopWatchInterval, setStopWatchInterval] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [saveModal, setSaveModal] = useState(false);

  const onPressHeader = (bool) => {
    if (option != bool) setOption(bool);
  };

  const onPressPlay = () => {
    if (!isPlaying) {
      const intervalStopWatch = setInterval(() => {
        setStopWatch((prev) => prev + 1);
        return;
      }, 1000);
      setStopWatchInterval(intervalStopWatch);
    } else {
      openSaveModal();
      setStopWatch(0);
      clearInterval(stopWatchInterval);
    }
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
      return;
    }, (1000 * 60) / bpm);
    setCurrentInterval(interval);
    return () => {
      clearInterval(currentInterval);
      if (stopWatchInterval) {
        clearInterval(stopWatchInterval);
      }
    };
  }, []);

  const addBPM = (value) => {
    setBpm((prev) => prev + value);
    clearInterval(currentInterval);
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
      return;
    }, (1000 * 60) / bpm);
    setCurrentInterval(interval);
  };

  const openSaveModal = () => {
    setSaveModal(true);
  };
  const closeSaveModal = () => {
    setSaveModal(false);
  };

  return (
    <View style={styles.mainView}>
      <SaveModal visible={saveModal} hide={closeSaveModal} />
      <SimpleHeader
        option={option}
        onPress={onPressHeader}
        text="Sampling"
        secText="Mix"
      />
      {option && (
        <ScrollView style={{ width: "100%" }}>
          <MixFolderContainer navigation={props.navigation} />
        </ScrollView>
      )}
      {!option && (
        <>
          <Text style={styles.textTuner}>Tuner</Text>
          <Text style={styles.textNote}>G</Text>
          <Image
            style={styles.tunderImage}
            source={require("../../assets/Tuner.png")}
          />
          <Text style={styles.textMetronome}>Metronome</Text>
          <View style={styles.changeBPM}>
            <Text style={styles.textBPM}>BPM</Text>
            <View style={styles.incrementBpmView}>
              <TouchableOpacity
                onPress={() => {
                  addBPM(-5);
                }}
              >
                <Icon name="minus" size={RFValue(24, 812)} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.textBPM}>{bpm}</Text>
              <TouchableOpacity
                onPress={() => {
                  addBPM(5);
                }}
              >
                <Icon name="plus" size={RFValue(24, 812)} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.metronomeBallsView}>
            <Icon
              name="checkbox-blank-circle"
              size={RFValue(30, 812)}
              color="#FF0000"
              style={{
                ...styles.metronomeBalls,
                opacity: time % 4 == 0 ? 1 : 0.3,
              }}
            />
            <Icon
              name="checkbox-blank-circle"
              size={RFValue(30, 812)}
              color="white"
              style={{
                ...styles.metronomeBalls,
                opacity: time % 4 == 1 ? 1 : 0.3,
              }}
            />
            <Icon
              name="checkbox-blank-circle"
              size={RFValue(30, 812)}
              color="white"
              style={{
                ...styles.metronomeBalls,
                opacity: time % 4 == 2 ? 1 : 0.3,
              }}
            />
            <Icon
              name="checkbox-blank-circle"
              size={RFValue(30, 812)}
              color="white"
              style={{
                ...styles.metronomeBalls,
                opacity: time % 4 == 3 ? 1 : 0.3,
              }}
            />
          </View>
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: RFValue(32, 812),
                flexDirection: "row",
                width: "80%",
              }}
            >
              <MusicProgression percentageColored={stopWatch / 25} />
              <TouchableOpacity onPress={onPressPlay}>
                {!isPlaying && (
                  <Image
                    style={{ marginLeft: RFValue(32, 812) }}
                    source={require("../../assets/rec-icon.png")}
                  />
                )}
                {isPlaying && (
                  <Image
                    style={{ marginLeft: RFValue(32, 812) }}
                    source={require("../../assets/stop-rec.png")}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.timerText}>
              {Math.round(stopWatch / 60)}:
              {(stopWatch % 60).toString().padStart(2, "0")}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    backgroundColor: colors.lightPurple,
    alignItems: "center",
  },

  textTuner: {
    fontSize: RFValue(20, 812),
    fontFamily: "PoppinsBold",
    marginTop: RFValue(16, 812),
    color: "white",
  },

  textMetronome: {
    fontSize: RFValue(20, 812),
    fontFamily: "PoppinsBold",
    color: "white",
    marginTop: RFValue(-10, 812),
    marginBottom: RFValue(16, 812),
  },

  textNote: {
    fontSize: RFValue(32, 812),
    fontFamily: "PoppinsRegular",
    marginTop: RFValue(16, 812),
    color: "white",
  },

  metronomeBallsView: {
    marginTop: RFValue(16, 812),
    flexDirection: "row",
  },
  metronomeBalls: {
    marginHorizontal: RFValue(8, 812),
  },

  changeBPM: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: colors.darkPurple,
    borderRadius: RFValue(10, 812),
    paddingHorizontal: RFValue(32, 812),
    paddingVertical: RFValue(8, 812),
  },

  textBPM: {
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(18, 812),
    color: "white",
    marginHorizontal: RFValue(10, 812),
  },

  incrementBpmView: {
    alignItems: "center",
    flexDirection: "row",
  },

  timerText: {
    alignSelf: "flex-start",
    fontFamily: "PoppinsRegular",
    fontSize: RFValue(32, 812),
    color: "white",
  },

  tunderImage: {
    height: RFValue(250, 812),
    resizeMode: "contain",
  },
});
export default RecPage;
