import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import icons from "../../constants/icons";

const Setting = () => {
  return (
    <>
      <View style={{ flex: 1, margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            //   marginVertical: 10,
          }}
        >
          <View
            style={{
              width: 55,
              height: 55,
              backgroundColor: "lightgray",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              marginRight: 10,
            }}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/6386/6386976.png",
              }}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>John Doe</Text>
            <Text>0931653136</Text>
          </View>
          <AntDesign
            name="right"
            size={15}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomColor: "lightgray",
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingVertical: 10,
            }}
          >
            <Image
              source={icons.changePassword}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
                tintColor: "gray",
              }}
            />
            <Text style={{ fontSize: 15 }}>Change Password</Text>
            <AntDesign
              name="right"
              size={15}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomColor: "lightgray",
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingVertical: 10,
            }}
          >
            <Entypo
              name="share"
              size={24}
              color="black"
              style={{ marginRight: 25 }}
            />
            <Text style={{ fontSize: 15 }}>Share</Text>
            <AntDesign
              name="right"
              size={15}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomColor: "lightgray",
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingVertical: 10,
            }}
          >
            <Entypo
              name="share"
              size={24}
              color="black"
              style={{ marginRight: 25 }}
            />
            <Text style={{ fontSize: 15 }}>Contact Us</Text>
            <AntDesign
              name="right"
              size={15}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginTop: "auto",
            backgroundColor: "#00adef",
            paddingVertical: 10,
            marginBottom: 20,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Setting;
