import { View } from "react-native";
import { COLORS } from "./theme";
import {
  FontAwesome5,
  Feather,
  FontAwesome,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const record = [
  {
    id: 1,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Food & Drinks",
    name: "Boo",
    balance: "ETB 500.00",
    date: "Yesterday",
    type: "income",
  },
  {
    id: 2,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Bar, cafe",
    name: "Faz",
    balance: "10,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 3,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Bar, cafe",
    name: "Foo",
    balance: "100,000.00",
    date: "Yesterday",
    type: "income",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },

  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
  {
    id: 4,
    icon: () => (
      <View
        style={[
          {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <FontAwesome5 name="wine-glass-alt" size={24} color={COLORS.white} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 20,
            height: 20,
            borderRadius: 12,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={16} color="white" />
        </View>
      </View>
    ),
    category: "Refunds (tax, purchase)",
    name: "Fazzie",
    balance: "500,000.00",
    date: "Yesterday",
    type: "expense",
  },
];

export const accounts = [
  // {
  //   id: 1,
  //   name: "Cash",
  //   amount: "ETB 50, 000",
  //   color: COLORS.darkgray,
  // },
  // {
  //   id: 2,
  //   name: "Boo",
  //   amount: "ETB 100, 000",
  //   color: COLORS.primary,
  // },
  // {
  //   id: 3,
  //   name: "Faz",
  //   amount: "ETB 3400",
  //   color: COLORS.emerald,
  // },
  // {
  //   id: 4,
  //   name: "Foo",
  //   amount: "ETB 100",
  //   color: COLORS.yellow,
  // },
];

export const categories = [
  {
    name: "Food & Drinks",
    icon: () => (
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <MaterialCommunityIcons
          name="silverware-fork-knife"
          size={24}
          color="white"
        />
      </View>
    ),
  },
  {
    name: "Shopping",
    icon: () => (
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: "aqua",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <FontAwesome name="shopping-bag" size={24} color="white" />
      </View>
    ),
  },
  {
    name: "Housing",
    icon: () => (
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: "orange",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <FontAwesome5 name="house-user" size={24} color="white" />
      </View>
    ),
  },
  {
    name: "Transportation",
    icon: () => (
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: "silver",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <Ionicons name="bus-outline" size={24} color="white" />
      </View>
    ),
  },
  {
    name: "Financial Expenses",
    icon: () => (
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <Fontisto name="money-symbol" size={24} color="white" />
      </View>
    ),
  },
  {
    name: "Income",
    icon: () => (
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
        }}
      >
        <MaterialCommunityIcons name="finance" size={24} color="white" />
      </View>
    ),
  },
];

export const filterDate = ["7D", "30D", "12W", "6M", "1Y"];
