import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import styles from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { ScrollView } from "react-native";
import RecordsComponent from "../../components/RecordsComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import PieCharts from "../../components/PieCharts";
import { Divider } from "react-native-elements";
import { chooseAccount, chooseType } from "../../store/Actions";
import AdjustBalance from "../../components/Modals/AdjustModal";
import { useEffect } from "react";
import { setacct } from "../../store";

const Budget = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const { accounts, acct } = useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(chooseAccount(acct?.name));
  }, [acct]);
  const MyComponent = () => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const dispatch = useDispatch();

    const { open } = state;

    return (
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            visible
            icon={open ? "close" : "plus"}
            color={COLORS.white}
            style={[styles.fabContainer]}
            fabStyle={{ backgroundColor: COLORS.primary }}
            actions={[
              {
                icon: "transfer",
                label: "Transfer",
                onPress: () => {
                  navigation.navigate("ExpenseTracker", { acct });
                  dispatch(chooseType("TRANSFER"));
                },
                style: { backgroundColor: COLORS.yellow },
              },
              {
                icon: "pencil",
                label: "New Record",
                onPress: () => {
                  navigation.navigate("ExpenseTracker", { acct });
                  dispatch(chooseType("EXPENSE"));
                },
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
      {showModal && <AdjustBalance setShowModal={setShowModal} acnt={acct} />}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topCard}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>List of Accounts</Text>
            <View style={styles.iconContainer}>
              <Feather name="settings" size={24} color={COLORS.primary} />
            </View>
          </View>
          <View style={styles.accountsContainer}>
            {accounts?.map((act, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.accounts,
                  backgroundColor:
                    activeIndex === index ? COLORS.primary : COLORS.darkgray,
                  width: accounts.length > 2 ? "40%" : "30%",
                  margin: accounts.length <= 2 ? 0 : 5,
                  marginLeft: accounts.length <= 3 ? 10 : 15,
                }}
                onPress={() => {
                  setActiveIndex(index);
                  dispatch(setacct(act));
                }}
              >
                <Text style={{ color: "white" }}>{act?.name}</Text>
                <Text style={{ color: "white" }}>{`ETB ${act?.amount}`}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                ...styles.accounts,
                backgroundColor: COLORS.white,
                width: accounts.length > 2 ? "40%" : "30%",
                margin: accounts.length <= 2 ? 0 : 5,
                marginLeft: accounts.length <= 3 ? 10 : 15,
                borderRadius: 10,
                borderColor: COLORS.primary,
                borderWidth: 1,
              }}
              onPress={() => navigation.navigate("NewAccount")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Text style={{ alignSelf: "center" }}>ADD</Text>
                  <Text>ACCOUNT</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    marginRight: 5,
                  }}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20,
              marginLeft: 15,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 0.2,
                borderColor: "black",
                borderRadius: 30,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setShowModal(true)}
              disabled={acct ? false : true}
            >
              <Text style={{ paddingHorizontal: 10, fontSize: 15 }}>
                ADJUST BALANCE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row-reverse",
                borderWidth: 0.2,
                borderColor: "black",
                borderRadius: 30,
                alignItems: "center",
                right: 7,
              }}
              onPress={() => navigation.navigate("Records", { acct })}
              disabled={acct ? false : true}
            >
              <Text style={{ paddingHorizontal: 14, fontSize: 15 }}>
                RECORDS
              </Text>
              <Feather
                name="list"
                size={24}
                color="black"
                style={{ paddingLeft: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.card, styles.elevation, styles.expenseContainer]}>
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 15,
            }}
          >
            <View>
              <Text style={{ margin: 10 }}>THIS WEEK</Text>
              <Text
                style={{ marginLeft: 10, fontWeight: "bold", fontSize: 20 }}
              >
                {`ETB ${acct?.amount}.00`}
              </Text>
            </View>
            <View>
              <Text style={{ margin: 10, color: COLORS.backgroundDark }}>
                vs past period
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  // fontWeight: "bold",
                  fontSize: 20,
                  color: "red",
                  alignSelf: "center",
                }}
              >{`> + 100%`}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <PieCharts />
          </View>
          <Divider bold={true} style={styles.divider} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log("expense")}
          >
            <Text style={styles.buttontxt}>SHOW MORE</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.elevation]}>
          <View style={styles.recordContainer}>
            <Text style={styles.recordTitle}>Last Records Overview</Text>
            <Feather name="more-vertical" size={24} color="gray" />
          </View>
          <Text style={styles.recordSubtitle}>LAST 30 DAYS</Text>
          <RecordsComponent type="budget" acct={acct} />
          <Divider bold={true} style={styles.divider} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Records", { acct })}
            disabled={acct ? false : true}
          >
            <Text
              style={{
                ...styles.buttontxt,
                color: acct ? COLORS.primary : COLORS.darkgray,
              }}
            >
              SHOW MORE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 100, width: "100%" }} />
      </ScrollView>
      <MyComponent />
    </SafeAreaView>
  );
};

export default Budget;
