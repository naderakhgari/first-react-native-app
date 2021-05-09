import React from "react";
import { SafeAreaView, View, Dimensions, Image } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import ViewImageScreen from './app/screens/ViewImageScreen'
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return (
    <WelcomeScreen />
  );
}
