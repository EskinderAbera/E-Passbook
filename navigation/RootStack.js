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
import { View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Category from "../screens/Category";
import ExpenseTracker from "../components/ExpenseTracker/ExpenseTracker";
import AccountChooser from "../components/AccountChooser/AccountChooser";
import AccountHeader from "../components/AccountChooser/Header";
import NewAccount from "../screens/NewAccount";
import ProfileScreen from "../screens/Settings";
import QRCodeScanner from "../screens/QRCodeScanner";
import NedajHistory from "../screens/NedajHistory";
import ChangePassword from "../screens/ChangePassword";

const Stack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignInScreen"
      >
        <Stack.Screen name="modal" component={SignUpModal} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerification}
          options={{
            headerShown: true,
            title: "OTP Verification",
            headerTintColor: COLORS.primary,
          }}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={RootTab} />
        <Stack.Screen name="ProductList" component={ProductsList} />
        <Stack.Screen name="EarlyPay" component={EarlyPayScreen} />
        <Stack.Screen name="Registeration" component={FormPagination} />
        <Stack.Screen name="Signiture" component={SigniturePad} />
        <Stack.Screen name="Budget" component={Budget} />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: true, title: "Change Password" }}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCodeScanner}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{
            headerShown: true,
            title: "New Account",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },
            headerRight: () => (
              <MaterialCommunityIcons
                name="check"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
                // onPress={() => console.warn(accountName)}
              />
            ),
          }}
        />
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
            // heade
            // headerStatusBarHeight: 20,

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
        <Stack.Screen name="ExpenseTracker" component={ExpenseTracker} />
        <Stack.Screen
          options={({ navigation }) => ({
            headerShown: true,
            header: () => <AccountHeader navigation={navigation} />,
          })}
          name="AccountChooser"
          component={AccountChooser}
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
        <Stack.Screen
          name="NedajHistory"
          component={NedajHistory}
          options={{
            headerShown: true,
            title: "Nedaj History",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
