import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Modal,
    TextInput,
} from "react-native";

import SimpleButton from "../../components/SimpleButton";
import Icon from "../../components/IconWithLabel";
import config, { rfvalue } from "../../config";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { color } from "react-native-reanimated";
const colors = config.colors;

const Register = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.icon}>
                <Icon
                    icon={require("../../assets/logo.png")}
                />
            </View>
            <InputText title="Full Name" placeholder="Jimmy McGill" />
            <InputText
                title="Email Address"
                placeholder="jimmymcgill@gmail.com"
            />
            <View style={{ ...styles.dropdowns }}>
                <Dropdown title="Phone Number" options={["+ 351"]} />
                <PhoneNumber title="Phone Number" placeholder="Enter Phone Number" />
            </View>
            <InputText
                title="Password"
                placeholder="Enter New Password"
            />
            <View style={styles.buttonsCol}>
                <SimpleButton style={{ marginTop: rfvalue(25) }} text="Continue" />
            </View>
        </View>
    );
};

const PhoneNumber = ({ title, placeholder }) => {
    const [text, setText] = useState("");

    return (
        <View style={{ ...styles.phoneNumber }}>
            <View style={{ width: "78%" }}>
                <Text style={{ color: colors.darkPurple, paddingTop: rfvalue(34) }}>{title}</Text>
                <View style={{ ...styles.dropdownValue }}>
                    <TouchableOpacity style={{ ...styles.dropdownValueTouchable }}>
                        <Text style={{ ...styles.text, color: "#9A9A9A" }}>{placeholder}</Text>
                        <Icon
                            name="arrow-down"
                            size={rfvalue(16)}
                            color={"#9A9A9A"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const InputText = ({ title, placeholder }) => {
    const [text, setText] = useState("");

    return (
        <View style={{ ...styles.inputText }}>
            <Text style={{ ...styles.text, ...styles.title }}>{title}</Text>
            <View style={{ ...styles.inputTextInput }}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#9A9A9A"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    style={{ ...styles.text, marginLeft: rfvalue(10) }}
                />
            </View>
        </View>
    );
};

const Dropdown = ({ title, options }) => {
    const [option, setOption] = useState(options[0]);

    return (
        <View style={{ ...styles.dropdown }}>
            <View style={{ width: "110%" }}>
                <Text style={{ ...styles.text, ...styles.title, paddingBottom: rfvalue(12) }}>{title}</Text>
                <View style={{ ...styles.dropdownValue }}>
                    <TouchableOpacity style={{ ...styles.dropdownValueTouchable }}>
                        <Text style={{ ...styles.text }}>{option}</Text>
                        <Icon
                            name="arrow-down"
                            size={rfvalue(16)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.darkPurple,
        flex: 1,
    },
    icon: {
        paddingTop: rfvalue(70),
    },
    motto: {
        color: colors.white,
        fontFamily: "PoppinsBold",
        fontSize: rfvalue(40),
        marginBottom: rfvalue(80)
    },
    buttonsCol: {
        alignItems: "center",
        width: "100%",
        paddingBottom: rfvalue(100),
    },
    text: {
        fontFamily: "PoppinsRegular",
        color: colors.white,
    },

    title: {
        fontFamily: "PoppinsBold",
        fontSize: rfvalue(15),
    },

    inputText: {
        marginTop: rfvalue(30),
        width: "85%"
    },

    inputTextInput: {
        marginTop: rfvalue(13),

        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },

    dropdowns: {
        marginTop: rfvalue(10),
        flexDirection: "row",
    },

    dropdown: {
        flex: 0.3,
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: rfvalue(35),
        marginTop: rfvalue(20),
    },

    phoneNumber: {
        flex: 0.8,
        flexDirection: "column",
        alignItems: "center",
    },

    dropdownValue: {
        width: "100%",

        marginTop: rfvalue(5),

        borderBottomColor: colors.white,
        borderBottomWidth: 1,
    },

    dropdownValueTouchable: {
        marginLeft: rfvalue(10),
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default Register;
