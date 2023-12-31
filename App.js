import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import SpacecraftScreen from "./screens/Spacecraft";
import StarMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Spacecraft_Screen" component = {SpacecraftScreen}/>
        <Stack.Screen name = "StarMap_Screen" component = {StarMapScreen}/>
        <Stack.Screen name = "DailyPic_Screen" component = {DailyPicScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
