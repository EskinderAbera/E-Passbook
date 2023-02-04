import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <RootStackScreen />
      </SafeAreaView>
    </ContextProvider>
  );
}
