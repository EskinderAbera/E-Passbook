import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OTPVerification from "../screens/OTPVerification";
import SignUpScreen1 from "../screens/SignUpSceen1";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import RootTab from "./RootTab";
import { ProductsList } from "../screens/ProductList";

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignInScreen"
      >
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={RootTab} />
        <Stack.Screen name="ProductList" component={ProductsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
