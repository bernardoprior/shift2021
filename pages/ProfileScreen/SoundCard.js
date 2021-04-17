import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MusicProgression from "../../components/MusicProgression";
import { ExpandableListView } from 'react-native-expandable-listview';
import useTimer from "../../hooks/useTimer";
import config, { rfvalue } from "../../config";
const colors = config.colors;

// const CONTENT = [
//     {
//         id: '42',
//         categoryName: 'Item 1',
//         subCategory: [
//             {
//                 id: '1',
//                 name:
//                     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//             },
//             { id: '2', name: 'Sub Item 2' },
//         ],
//     },
//     {
//         id: '95',
//         categoryName: 'Item 2',
//         subCategory: [{ id: '1', name: 'Sub Item 1' }],
//     },
//     {
//         id: '94',
//         categoryName: 'Item 3',
//         subCategory: [{ id: '1', name: 'Sub Item 1' }],
//     },
//     {
//         id: '93',
//         categoryName: 'Item 4',
//         subCategory: [{ id: '1', name: 'Sub Item 1' }],
//     },
//     {
//         id: '92',
//         categoryName: 'Item 5',
//         subCategory: [{ id: '1', name: 'Sub Item 1' }],
//     },
//     {
//         id: '96',
//         categoryName: 'Item 6',
//         subCategory: [{ id: '1', name: 'Sub Item 1' }],
//     },
// ];

// function SoundCard() {
//     function handleItemClick({ index }) {
//         console.log(index);
//     };

//     function handleInnerItemClick({ innerIndex, item, itemIndex }) {
//         console.log(innerIndex);
//     };

//     render() {
//         return (
//             <ExpandableListView
//                 data={CONTENT} // required
//                 onInnerItemClick={handleInnerItemClick}
//                 onItemClick={handleItemClick}
//             />
//         );
//     }
// }

const SoundCard = ({
    userImg,
    userTag,
    musicName,
    musicStyle,
    musicTimeLength, // ms
    bpm,
    favs,
    shares,
    faved,
    description,
    soundScale,
    soundGenre,
    date
}) => {
    const [favorite, setFavorite] = useState(faved);
    const timeConv = musicTimeLength / 100;
    const { startStop, elapsedTime, resetTimer } = useTimer(0, timeConv);

    const imgPath = `../../assets/${userImg}.png`;

    const onPressFav = () => {
        setFavorite((prev) => !prev);
    };

    const onPlayPause = () => {
        // setPerc((prev) => (prev <= 1 ? prev + 0.1 : 0));
        if (elapsedTime >= timeConv) resetTimer();
        else startStop();
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.soundTitleDate}>
                <Text style={{ ...styles.musicName, fontSize: rfvalue(20) }}>
                    {musicName}
                </Text>
                <Text style={{ ...styles.musicDate, fontSize: rfvalue(20) }}>
                    {date}
                </Text>
            </View>
            <View style={styles.musicRow}>
                <View style={styles.MusicProgression}>
                    <MusicProgression
                        percentageColored={elapsedTime / timeConv}
                        onPress={onPlayPause}
                        barWidth="80%"
                    />
                </View>
                <View styles={styles.playButton}>
                    <Icon icon={require("../../assets/pause.png")} />
                </View>
            </View>
            <View style={styles.soundCardExpanded}>
                <View style={styles.buttons}>
                    <Icon
                        icon={
                            favorite
                                ? require("../../assets/favFilledSmall.png")
                                : require("../../assets/favPurple.png")
                        }
                        text={favs}
                        onPress={onPressFav}
                    />
                    <Icon icon={require("../../assets/sharePurple.png")} text={shares} />
                </View>
                <View style={styles.musicInfoDetails}>
                    <Text style={styles.musicInfoTextBold}>Description</Text>
                    <Text style={{ ...styles.musicInfoText, fontSize: rfvalue(20) }}>
                        {description}
                    </Text>
                    <View style={styles.musicInfoDetailsRow}>
                        <Text style={styles.musicInfoTextBold}>Escala</Text>
                        <Text style={styles.musicInfoText}>{soundScale}</Text>
                        <Text style={styles.musicInfoTextBold}>Género</Text>
                        <Text style={styles.musicInfoText}>{soundGenre}</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const Icon = ({ icon, text = "", onPress }) => {
    return (
        <View style={styles.icon}>
            <TouchableOpacity onPress={onPress}>
                <Image style={{ alignSelf: "center", marginRight: 15 }} source={icon} />
            </TouchableOpacity>
            <Text style={{ color: colors.darkPurple, textAlign: "center", marginTop: 5 }}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        marginTop: 0,
        marginBottom: 190,
        marginLeft: 20,
        marginRight: 20,
        padding: 0,
        borderRadius: 10,
    },
    musicRow: {
        flexDirection: "row",
        marginRight: 15,
    },
    MusicProgression: {
        margin: 0,
        padding: 0,
        marginLeft: 15,
        paddingTop: 0
    },
    playButton: {
        paddingTop: 10,
    },
    soundTitleDate: {
        flexDirection: "row",
    },
    buttons: {
        color: colors.darkPurple,
    },
    musicName: {
        color: colors.darkPurple,
        fontSize: rfvalue(20),
        paddingRight: 70,
        marginLeft: 0,
        paddingBottom: 15,
    },
    musicDate: {
        paddingLeft: 30,
        color: colors.darkPurple,
        fontSize: rfvalue(20),
    },

    musicInfoText: {
        color: colors.darkPurple,
        fontSize: rfvalue(20),
    },
    musicInfoTextBold: {
        color: colors.darkPurple,
        fontSize: rfvalue(20),
        fontWeight: 'bold'
    },
    musicInfoDetails: {
        paddingTop: 10,
        paddingLeft: 5,
    },
    musicInfoDetailsRow: {
        flexDirection: "row",
    },
    icon: {
        flexDirection: "row",
        alignContent: "center",
        margin: 5,
    }
});

export default SoundCard;
