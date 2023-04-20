import { createStackNavigator } from "@react-navigation/stack";
import AccountsDetail from "../screens/AccountDetail";
import Home from "../screens/Home";
import ProfileScreen from "../screens/Settings";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeAccount" component={Home} />
      <Stack.Screen
        name="Account"
        component={AccountsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeScreenNavigator };

const SettingsScreenNavigator = () => {
  return <Stack.Screen name="TabSetting" component={ProfileScreen} />;
};

export { SettingsScreenNavigator };
