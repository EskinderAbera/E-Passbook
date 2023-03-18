import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import RecordsComponent from "../../components/RecordsComponent";
import { ScrollView } from "react-native";

const Records = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.recordsContainer}>
        <View style={styles.header}>
          <Text style={styles.filterText}>LAST 30 DAYS</Text>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons
              name="sigma"
              size={20}
              color={COLORS.white}
            />
            <Text style={{ color: COLORS.white }}>ETB 100, 000</Text>
          </View>
        </View>
        <View
          style={{
            //   paddingVertical: 20,
            backgroundColor: "#ECEEF0",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ margin: 10 }}>
            <Text>Week 11</Text>
            <Text>Balance ETB 15, 711.00</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", margin: 10 }}
          >
            <MaterialCommunityIcons name="sigma" size={20} />
            <Text>ETB 100, 000</Text>
          </View>
        </View>
        <View style={styles.card}>
          <RecordsComponent />
        </View>
      </ScrollView>
      {/* <View
        style={{
          height: 50,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "black",
            borderLeftWidth: 1,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "black",
            height: 40,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "25%",
              alignItems: "center",
              borderRightWidth: 1,
              borderColor: "black",
              height: 40,
            }}
          >
            <Text>Row 1, Cell 1</Text>
          </TouchableOpacity>
          <View
            style={{
              width: "25%",
              alignItems: "center",
              borderRightWidth: 1,
              borderColor: "black",
            }}
          >
            <Text>Row 1, Cell 2</Text>
          </View>
          <View
            style={{
              width: "25%",
              alignItems: "center",
              borderRightWidth: 1,
              borderColor: "black",
            }}
          >
            <Text>Row 1, Cell 3</Text>
          </View>
          <View
            style={{
              width: "25%",
              alignItems: "center",
              borderRightWidth: 1,
              borderColor: "black",
            }}
          >
            <Text>Row 1, Cell 4</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default Records;
