import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen1 from "../screens/SignUpSceen1";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import AccountsDetail from "../screens/AccountDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChangePassword from "../screens/ChangePassword";
import ProfileScreen from "../screens/Settings";
import NedajScreen from "../screens/NedajScreen";
import NedajHistory from "../screens/NedajHistory";
import SignUpScreen from "../screens/SignUpScreen";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Register"
      >
        <Stack.Screen name="Dashboard" component={HomeTabs} />
        <Stack.Screen name="Register" component={RegisterStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Accounts"
    >
      <Stack.Screen name="Accounts" component={HomeScreen} />
      <Stack.Screen name="AccountDetail" component={AccountsDetail} />
    </HomeStack.Navigator>
  );
};

const RegisterStack = createStackNavigator();

const RegisterStackNavigator = () => {
  return (
    <RegisterStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignInScreen"
    >
      <RegisterStack.Screen name="SignInScreen" component={SignInScreen} />
      <RegisterStack.Screen name="SignUpScreen1" component={SignUpScreen1} />
      <RegisterStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RegisterStack.Navigator>
  );
};

const SettingStack = createStackNavigator();

const SettingStackNavigator = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="ProfileScreen"
    >
      <SettingStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: true, title: "Change Password" }}
      />
      <SettingStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </SettingStack.Navigator>
  );
};

const NedajStack = createStackNavigator();

const NedajStackNavigator = () => {
  return (
    <NedajStack.Navigator initialRouteName="NedajScreen">
      <NedajStack.Screen name="NedajScreen" component={NedajScreen} />
      <NedajStack.Screen name="NedajHistory" component={NedajHistory} />
    </NedajStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            // <Entypo
            //   size={28}
            //   style={{ marginBottom: -3 }}
            //   color={color}
            //   name="code"
            // />
            <Entypo name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            // <FontAwesome
            //   size={28}
            //   style={{ marginBottom: -3 }}
            //   color={color}
            //   name="code"
            // />
            <AntDesign name="setting" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nedaj"
        component={NedajStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            // <FontAwesome
            //   size={28}
            //   style={{ marginBottom: -3 }}
            //   color={color}
            //   name="code"
            // />
            <FontAwesome5
              name="gas-pump"
              size={25}
              color={color}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStackScreen;
