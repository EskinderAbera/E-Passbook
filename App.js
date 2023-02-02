import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackScreen from "./navigation/RootStack";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <RootStackScreen />
      </SafeAreaView>
    </Provider>
  );
}
