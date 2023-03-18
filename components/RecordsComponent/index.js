import { View, Text } from "react-native";
import React from "react";
import { record } from "../../constants/data";
import styles from "./styles";
import { SIZES } from "../../constants/theme";
import { Divider } from "react-native-paper";

const RecordsComponent = ({ type }) => {
  function budget() {
    const newRecord = record.slice(0, 5);
    return newRecord
      .filter((recor) => recor.date === "Yesterday")
      .map((rec, index) => (
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
      ));
  }

  function records() {
    return record.map((rec, index) => (
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
    ));
  }

  return <>{type === "budget" ? budget() : records()}</>;
};

export default RecordsComponent;
