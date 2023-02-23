import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <ContextProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <RootStackScreen />
          </SafeAreaView>
        </NativeBaseProvider>
      </Provider>
    </ContextProvider>
  );
}
