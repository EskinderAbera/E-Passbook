import { View, Text } from "react-native";
import React from "react";
import { record } from "../../constants/data";
import styles from "./styles";
import { SIZES } from "../../constants/theme";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";

const RecordsComponent = ({ type, acct }) => {
  const { records, expenseCategory } = useSelector((state) => state.expense);
  function budget() {
    const newRecord = record.slice(0, 4);
    return records
      ?.filter((re) => re.name === acct?.name)
      .map((rec, index) => (
        <View key={index}>
          <View style={styles.recordsContainer}>
            {newRecord
              .filter((rec) => rec.category === expenseCategory)
              .map((re) => re.icon())}
            <View style={styles.categoryContainer}>
              <Text style={{ fontSize: SIZES.body3 }}>{rec.category}</Text>
              <Text style={{ fontSize: SIZES.body3 }}>{rec.name}</Text>
            </View>
            <View style={styles.balanceContainer}>
              <Text
                style={
                  rec.type === "INCOME"
                    ? styles.incomeBalance
                    : styles.expenseBalance
                }
              >
                {rec.type === "INCOME" ? rec.balance : `- ${rec.balance}`}
              </Text>
              <Text>{rec.date}</Text>
            </View>
          </View>
          <Divider bold={true} style={styles.divider} />
        </View>
      ));
  }

  function functionrecords() {
    // alert(expenseCategory);
    return records?.map((rec, index) => (
      <View key={index}>
        <View style={styles.recordsContainer}>
          {record.filter((rec) => rec.category == expenseCategory)[0]?.icon()}
          <View style={styles.categoryContainer}>
            <Text style={{ fontSize: SIZES.body3 }}>{rec.category}</Text>
            <Text style={{ fontSize: SIZES.body3 }}>{rec.name}</Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text
              style={
                rec.type === "INCOME"
                  ? styles.incomeBalance
                  : styles.expenseBalance
              }
            >
              {rec.type === "INCOME" ? rec.balance : `- ${rec.balance}`}
            </Text>
            <Text>{rec.date}</Text>
          </View>
        </View>
        <Divider bold={true} style={styles.divider} />
      </View>
    ));
  }

  return <>{type === "budget" ? budget() : functionrecords()}</>;
};

export default RecordsComponent;
