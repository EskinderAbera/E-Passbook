import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";
import setUpInterceptor from "./lib/axios_interceptors";

export default function App() {
  setUpInterceptor({ store });
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
