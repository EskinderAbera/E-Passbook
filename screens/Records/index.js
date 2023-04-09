import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import RecordsComponent from "../../components/RecordsComponent";
import { ScrollView } from "react-native";
import { filterDate } from "../../constants/data";

const Records = ({ route }) => {
  const { acct } = route.params;
  // const [data, setData] = useState({
  //   7: true,
  //   30: false,
  //   W: false,
  //   Y: false,
  //   M: false,
  // });
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  // const [selectedItem, setSelectedItem] = useState({});

  const handlePress = (index) => {
    setSelectedCategoryIndex(index);
    if (index === 0) {
      setData({
        ...data,
        7: true,
        30: false,
        W: false,
        Y: false,
        M: false,
      });
    } else if (index === 1) {
      setData({
        ...data,
        7: false,
        30: true,
        W: false,
        Y: false,
        M: false,
      });
    } else if (index === 2) {
      setData({
        ...data,
        7: false,
        30: false,
        W: true,
        Y: false,
        M: false,
      });
    } else if (index === 3) {
      setData({
        ...data,
        7: false,
        30: false,
        W: false,
        Y: false,
        M: true,
      });
    } else {
      setData({
        ...data,
        7: false,
        30: false,
        W: false,
        M: false,
        Y: true,
      });
    }
  };
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
            <Text
              style={{ color: COLORS.white }}
            >{` ETB ${acct?.amount}`}</Text>
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
            <Text>Days 7</Text>
            <Text>Balance {`ETB ${acct?.amount}`}</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", margin: 10 }}
          >
            <MaterialCommunityIcons name="sigma" size={20} />
            <Text>{`ETB ${acct?.amount}`}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <RecordsComponent acct={acct} />
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 40,
            flexDirection: "row",
            margin: 10,
            borderWidth: 2,
            borderRadius: 15,
            borderColor: COLORS.primary,
          }}
        >
          {filterDate.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={{
                  width: filterDate[index + 1] ? "20%" : "18%",
                  borderTopLeftRadius: index === 0 ? 15 : 0,
                  borderBottomLeftRadius: index === 0 ? 15 : 0,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.white,
                  borderTopRightRadius: filterDate[index + 1] ? 0 : 15,
                  borderBottomRightRadius: filterDate[index + 1] ? 0 : 15,
                  // borderLeftWidth: 2,
                }}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex(index)}
              >
                <Text
                  style={{
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
              {filterDate[index + 1] && (
                <View
                  style={{
                    height: 38,
                    width: 2,
                    backgroundColor: COLORS.primary,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Records;
