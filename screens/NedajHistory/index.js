import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const NedajHistory = () => {
  const RecordItem = () => {
    return (
      <View style={styles.container}>
        <FontAwesome5
          name="gas-pump"
          size={24}
          color="#00adef"
          style={styles.icon}
        />
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
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Totalcontainer: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    padding: 10,
  },
  container: {
    flexDirection: "row",
    // marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  recordTitle: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  icon: {
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    paddingBottom: 3,
  },
  row: {
    flexDirection: "row",
    // marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default NedajHistory;
