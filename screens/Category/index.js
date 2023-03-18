import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { ScrollView } from "react-native";
import { categories } from "../../constants/data";
import { Divider } from "react-native-paper";

const Category = () => {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryTitle}>
        <Text style={styles.title}>ALL CATEGORIES</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {categories.map((category, index) => (
          <View
            style={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <View
              key={index}
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {category.icon()}
              <Text
                style={{
                  alignSelf: "center",
                  marginLeft: 15,
                  fontSize: 18,
                  //   fontWeight: "bold",
                }}
              >
                {category.name}
              </Text>
            </View>
            <Divider style={{ height: 0.8, flex: 1 }} />
          </View>
        ))}
        {/* <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={24}
              color="white"
            />
          </View> */}
      </ScrollView>
    </View>
  );
};

export default Category;
