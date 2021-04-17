import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OnboardingScreen from "./pages/OnboardingScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}
const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={OnboardingScreen} />
      <Tab.Screen name="AddScreen" component={OnboardingScreen} />
      <Tab.Screen name="MessageScreen" component={OnboardingScreen} />
      <Tab.Screen name="ProfileScreen" component={OnboardingScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
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
