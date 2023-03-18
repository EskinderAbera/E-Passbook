import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OTPVerification from "../screens/OTPVerification";
import SignUpScreen1 from "../screens/SignUpSceen1";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import RootTab from "./RootTab";
import { ProductsList } from "../screens/ProductList";
import EarlyPayScreen from "../screens/EarlyPayScreen";
import { SigniturePad } from "../components/OnBoarding";
import { FormPagination } from "../components/Forms";
import AgreementPolicy from "../components/OnBoarding/AgreementPolicy";
import ImageViewer from "../components/OnBoarding/ImageViewer";
import SignUpModal from "../components/Modals/SignupModal";
import Budget from "../screens/Budget";
import Records from "../screens/Records";
import { COLORS } from "../constants/theme";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Category from "../screens/Category";

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Category"
      >
        <Stack.Screen name="modal" component={SignUpModal} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={RootTab} />
        <Stack.Screen name="ProductList" component={ProductsList} />
        <Stack.Screen name="EarlyPay" component={EarlyPayScreen} />
        <Stack.Screen name="Registeration" component={FormPagination} />
        <Stack.Screen name="Signiture" component={SigniturePad} />
        <Stack.Screen name="Budget" component={Budget} />
        <Stack.Screen
          name="Records"
          component={Records}
          options={{
            headerShown: true,
            title: "Records",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                }}
              >
                <Feather
                  name="search"
                  size={24}
                  color={COLORS.white}
                  style={{ marginRight: 20 }}
                />
                <Feather name="more-vertical" size={24} color={COLORS.white} />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            headerShown: true,
            title: "Category",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",

            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                }}
              >
                <Feather
                  name="search"
                  size={24}
                  color={COLORS.white}
                  style={{ marginRight: 30 }}
                />
                <Feather name="settings" size={24} color={COLORS.white} />
              </View>
            ),
          }}
        />
        <Stack.Screen
          options={{
            title: "Agreements and Policy",
            headerShown: true,
          }}
          name="Agreement"
          component={AgreementPolicy}
        />
        <Stack.Screen name="ImageViewer" component={ImageViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
