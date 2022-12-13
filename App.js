import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";
import { View } from "react-native-animatable";

export default function App() {
  return (
    <ContextProvider>
      {/* <StatusBar style="light" /> */}
      <SafeAreaProvider>
        {/* <View> */}
        <RootStackScreen />
        {/* </View> */}
      </SafeAreaProvider>
    </ContextProvider>
  );
}
