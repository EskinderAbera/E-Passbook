import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
export default function App() {
  useEffect(() => {
    const checkBiometric = async () => {
      let result = await LocalAuthentication.hasHardwareAsync();
      console.log("====================================");
      console.log(result);
      console.log("====================================");
      if (result !== null) {
        await SecureStore.setItemAsync("isBiometric", result.toString());
      }
    };
    checkBiometric();
  }, []);
  return (
    <ContextProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            {/* <StatusBar hidden={true}/> */}
            <RootStackScreen />
          </SafeAreaView>
        </NativeBaseProvider>
      </Provider>
    </ContextProvider>
  );
}
