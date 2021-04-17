import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";

import OnboardingScreen from "./pages/OnboardingScreen";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import Search from "./pages/Search";
import RecPage from "./pages/Rec";

import BottomBar from "./components/BottomBar.js";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={Search} />
      <Tab.Screen name="AddScreen" component={RecPage} />
      <Tab.Screen name="MessageScreen" component={OnboardingScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
    OpenSansRegular: OpenSans_400Regular,
    OpenSansBold: OpenSans_700Bold,
  });

  useEffect(() => {
    const keepSplashScreen = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (err) {
        console.warn(err);
      }
    };
    keepSplashScreen();
  }, []);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [fontsLoaded]);

  return (
    <NavigationContainer initialRouteName="MainScreen">
      <Stack.Navigator
        screenOptions={{
          headerLeft: null,
          ...headerOptions.noHeader,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerOptions = {
  noHeader: { title: "", headerStyle: { height: 0 } },
};
