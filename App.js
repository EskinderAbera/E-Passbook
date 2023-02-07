import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <ContextProvider>
      <NativeBaseProvider>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <RootStackScreen />
        </SafeAreaView>
      </NativeBaseProvider>
    </ContextProvider>
  );
}
