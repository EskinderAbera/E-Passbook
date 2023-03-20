import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { categories } from "../../constants/data";
import { Divider } from "react-native-paper";
import { chooseCategory } from "../../store/Actions";

const Category = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.categoryTitle}>
        <Text style={styles.title}>ALL CATEGORIES</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {categories.map((category, index) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(chooseCategory(category.name));
              navigation.navigate("ExpenseTracker");
            }}
            key={index}
            style={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <View
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
          </TouchableOpacity>
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
