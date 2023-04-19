import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { isIphoneX } from "react-native-iphone-x-helper";
// import { COLORS, icons } from "../constants";
import { HomeScreenNavigator } from "./CustomNavigation";
// import { icons } from "../constants";
import { COLORS } from "../constants/theme";
import icons from "../constants/icons";
import ProfileScreen from "../screens/Settings";
import NedajScreen from "../screens/NedajScreen";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 0,
          }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary,
            ...styles.shadow,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const RootTab = () => {
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator
        // screenOptions={{
        //   // tabBarShowLabel: false,
        //   tabBarStyle: {
        //     postion: "absolute",
        //     bottom: 0,
        //     left: 0,
        //     right: 0,
        //     backgroundColor: "transparent",
        //     elevation: 0,
        //   },
        // }}
        // tabBar={(props) => <CustomTabBar props={props} />}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator}
          options={{
            tabBarLabelStyle: {
              fontSize: 13,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.more}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
            // tabBarButton: (props) => <TabBarCustomButton {...props} />,
            title: "Home",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          // component={SettingScreenNavigator}
          component={ProfileScreen}
          options={{
            tabBarLabelStyle: {
              fontSize: 13,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
            // tabBarButton: (props) => <TabBarCustomButton {...props} />,
            // headerShown: true,
          }}
        />
        <Tab.Screen
          name="Nedaj Payment"
          component={NedajScreen}
          options={{
            headerShown: true,
            tabBarLabelStyle: {
              fontSize: 13,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.gasStation}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
            // tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default RootTab;
