import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import OTPVerification from "../screens/OTPVerification";
import SignUpScreen1 from "../screens/SignUpSceen1";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import RootTab from "./RootTab";
import { ProductsList } from "../screens/ProductList";
import EarlyPayScreen from "../screens/EarlyPayScreen";
// import Skeleton from "../components/Skeleton";
// import { FormPagination, SigniturePad } from "../components";
// import AgreementPolicy from "../components/AgreementPolicy";
// import ImageViewer from "../components/ImageViewer";

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignUpScreen1"
      >
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={RootTab} />
        <Stack.Screen name="ProductList" component={ProductsList} />
        <Stack.Screen name="EarlyPay" component={EarlyPayScreen} />
        {/* <Stack.Screen name="Skeleton" component={Skeleton} /> */}

        {/* <Stack.Screen name="Registeration" component={FormPagination} />
        <Stack.Screen name="Signiture" component={SigniturePad} />
        <Stack.Screen
          options={{
            title: "Agreements and Policy",
            headerShown: true,
          }}
          name="Agreement"
          component={AgreementPolicy}
        />
        <Stack.Screen name="ImageViewer" component={ImageViewer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
