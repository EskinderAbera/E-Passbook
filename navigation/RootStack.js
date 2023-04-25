import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen1 from "../screens/SignUpSceen1";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import AccountsDetail from "../screens/AccountDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChangePassword from "../screens/ChangePassword";

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="Accounts" component={HomeScreen} />
        <Stack.Screen name="AccountDetail" component={AccountsDetail} />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: true, title: "Change Password" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Accounts" component={HomeScreen} />
      <Stack.Screen name="AccountDetail" component={AccountsDetail} />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return <Tab.Navigator screenOptions={{ headerShown: false }}></Tab.Navigator>;
};

export default RootStackScreen;
