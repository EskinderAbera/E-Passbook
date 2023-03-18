import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, FAB } from "react-native-paper";
import styles from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { ScrollView } from "react-native";

const Budget = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.topCard}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>List of Accounts</Text>
          <View style={styles.iconContainer}>
            <Feather name="settings" size={24} color={COLORS.primary} />
          </View>

          {/* <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginRight: 5,
              marginTop: 10,
            }}
          >
            Settings
          </Text> */}
        </View>
        <View style={styles.accountsContainer}>
          {accounts.map((acct, index) => (
            <View
              key={index}
              style={{
                ...styles.accounts,
                backgroundColor: acct.color,
                width: accounts.length > 3 ? "40%" : "30%",
                margin: accounts.length <= 3 ? 0 : 5,
                marginLeft: accounts.length <= 3 ? 10 : 15,
              }}
            >
              <Text>{acct.name}</Text>
              <Text>{acct.amount}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: "white",
          height: "40%",
          margin: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Expenses Structucre
          </Text>
          <Feather name="more-vertical" size={24} color="gray" />
        </View>
        <Text style={{ margin: 10 }}>THIS WEEK</Text>
        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 20 }}>
          ETB 52,233.00
        </Text>
      </View> */}
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.recordContainer}>
          <Text style={styles.recordTitle}>Last Records Overview</Text>
          <Feather name="more-vertical" size={24} color="gray" />
        </View>
        <Text style={styles.recordSubtitle}>LAST 30 DAYS</Text>
        {record.map((rec, index) => (
          <View key={index}>
            <View style={styles.recordsContainer}>
              {rec.icon()}
              <View style={styles.categoryContainer}>
                <Text style={{ fontSize: SIZES.body3 }}>{rec.category}</Text>
                <Text style={{ fontSize: SIZES.body3 }}>{rec.name}</Text>
              </View>
              <View style={styles.balanceContainer}>
                <Text
                  style={
                    rec.type === "income"
                      ? styles.incomeBalance
                      : styles.expenseBalance
                  }
                >
                  {rec.type === "income" ? rec.balance : `- ${rec.balance}`}
                </Text>
                <Text>{rec.date}</Text>
              </View>
            </View>
            <Divider bold={true} style={styles.divider} />
          </View>
        ))}
        <Divider bold={true} style={styles.divider} />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttontxt}>SHOW MORE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fabContainer}>
        <FAB icon="plus" color="white" cus style={styles.fab} />
      </View>
    </ScrollView>
  );
};

export default Budget;

const accounts = [
  {
    id: 1,
    name: "Cash",
    amount: "ETB 50, 000",
    color: COLORS.darkgray,
  },
  {
    id: 2,
    name: "Boo",
    amount: "ETB 100, 000",
    color: COLORS.primary,
  },
  {
    id: 3,
    name: "Fazazaza",
    amount: "ETB 3400",
    color: COLORS.emerald,
  },
  {
    id: 4,
    name: "bazzuzu",
    amount: "ETB 100",
    color: COLORS.yellow,
  },
];

const record = [
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
    category: "Bar, cafe",
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
];
