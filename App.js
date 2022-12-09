import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <StatusBar style="#00adef" hidden={true} />
        <RootStackScreen />
      </SafeAreaProvider>
    </ContextProvider>
  );
}
