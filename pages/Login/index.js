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

const Login = (props) => {

    const onPressRegister = () => {
        props.navigation.navigate("Register")
    }

    const onPressMainScreen = () => {
        props.navigation.navigate("MainScreen")
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.icon}>
                <Icon
                    icon={require("../../assets/logo.png")}
                />
            </View>
            <View style={styles.loginArea}>
                <InputText
                    title="Email Address"
                    placeholder="jimmymcgill@gmail.com"
                />
                <InputText
                    title="Password"
                    placeholder="Enter your Password"
                />
            </View>
            <View style={styles.buttonsCol}>
                <SimpleButton onPress={onPressMainScreen} style={{ marginTop: rfvalue(25) }} text="Continue" />
            </View>
            <View style={styles.forgotPass}>
                <Text style={styles.text}> Forgot Password? </Text>
            </View>
            <View style={styles.newUser}>
                <Text style={styles.text}> New User? </Text>
                <Text onPress={onPressRegister} style={{ ...styles.text, color: colors.pink }}> Create Account </Text>
            </View>
        </View >
    );
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
                    style={{ ...styles.text, marginLeft: rfvalue(10), marginBottom: rfvalue(5) }}
                />
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
    loginArea: {
        width: "100%",
        alignItems: "center",
        marginTop: rfvalue(20),
        marginBottom: rfvalue(50),
    },
    icon: {
        paddingTop: rfvalue(70),
    },
    buttonsCol: {
        alignItems: "center",
        width: "100%",
        paddingBottom: rfvalue(30)
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

    forgotPass: {
        alignItems: "center",
        width: "100%",
    },

    newUser: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingBottom: rfvalue(120),
        paddingLeft: rfvalue(105)
    }
});

export default Login;
