import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, FAB, Portal, Provider } from "react-native-paper";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { ScrollView } from "react-native";
import { accounts } from "../../constants/data";
import RecordsComponent from "../../components/RecordsComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import PieCharts from "../../components/PieCharts";

const Budget = ({ navigation }) => {
  const [acct, setAcct] = React.useState(accounts[0]);
  const MyComponent = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            visible
            icon={open ? "close" : "plus"}
            style={[styles.fabContainer]}
            actions={[
              {
                icon: "transfer",
                label: "Transfer",
                onPress: () => console.log("Pressed star"),
                style: { backgroundColor: COLORS.yellow },
              },
              {
                icon: "pencil",
                label: "New Record",
                onPress: () => console.log("Pressed email"),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topCard}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>List of Accounts</Text>
            <View style={styles.iconContainer}>
              <Feather name="settings" size={24} color={COLORS.primary} />
            </View>
          </View>
          <View style={styles.accountsContainer}>
            {accounts.map((acct, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.accounts,
                  backgroundColor: acct.color,
                  width: accounts.length > 3 ? "40%" : "30%",
                  margin: accounts.length <= 3 ? 0 : 5,
                  marginLeft: accounts.length <= 3 ? 10 : 15,
                }}
                onPress={() => setAcct(acct)}
              >
                <Text>{acct.name}</Text>
                <Text>{acct.amount}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
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
            {acct.amount}
          </Text>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <PieCharts acct={acct} />
          </View>
        </View>
        <View style={[styles.card, styles.elevation]}>
          <View style={styles.recordContainer}>
            <Text style={styles.recordTitle}>Last Records Overview</Text>
            <Feather name="more-vertical" size={24} color="gray" />
          </View>
          <Text style={styles.recordSubtitle}>LAST 30 DAYS</Text>
          <RecordsComponent type="budget" />
          <Divider bold={true} style={styles.divider} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Records")}
          >
            <Text style={styles.buttontxt}>SHOW MORE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <MyComponent />
    </SafeAreaView>
  );
};

export default Budget;
