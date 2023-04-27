import React from "react";
import RootStackScreen from "./navigation/RootStack";
import { ContextProvider } from "./Contexts/ContextProvider";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";
import { StatusBar } from "expo-status-bar";
export default function App() {
  // useEffect(() => {
  //   const checkBiometric = async () => {
  //     let result = await LocalAuthentication.hasHardwareAsync();
  //     console.log("====================================");
  //     console.log(result);
  //     console.log("====================================");
  //     if (result !== null) {
  //       await SecureStore.setItemAsync("isBiometric", result.toString());
  //     }
  //   };
  //   checkBiometric();
  // }, []);

  return (
    <ContextProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <RootStackScreen />
          <StatusBar style="light" />
        </NativeBaseProvider>
      </Provider>
    </ContextProvider>
  );
}
