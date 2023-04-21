import { View, Text, FlatList } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import NedajSkeleton from "./NedajSkeleton";

const NedajHistory = () => {
  const RecordItem = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            backgroundColor: "lightgray",
            marginRight: 10,
          }}
        >
          <FontAwesome5
            name="gas-pump"
            size={24}
            color="#00adef"
            // style={styles.icon}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.name}>Petroleum</Text>
            <Text style={[styles.subTitle, { color: "red" }]}>- ETB 300</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.name, styles.subTitle]}>January</Text>
            <Text style={styles.subTitle}>20 Litres</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.Totalcontainer}>
      <Text style={styles.recordTitle}>Last Record Overview</Text>
      <FlatList
        data={Array(12)}
        renderItem={({ item }) => <RecordItem />}
        // renderItem={({ item }) => <NedajSkeleton />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NedajHistory;
