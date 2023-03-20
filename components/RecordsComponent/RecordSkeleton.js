import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const RecordSkeleton = () => {
  return (
    <View>
      {/* <View style={styles.recordsContainer}> */}
      <ShimmerPlaceholder
        shimmerStyle={{
          borderRadius: 10,
          marginTop: 2,
          backgroundColor: "black",
          width: 40,
          height: 40,
        }}
        // width={50}
        stopAutoRun
        visible={true}
      />
      {/* <View style={styles.categoryContainer}>
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
    <Divider bold={true} style={styles.divider} /> */}
      {/* </View> */}
    </View>
  );
};

export default RecordSkeleton;
