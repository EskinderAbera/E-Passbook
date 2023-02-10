import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { Product } from "../../components/Product";

export function ProductsList({ navigation }) {
  function renderProduct({ item: product }) {
    return <Product {...product} />;
  }

  const products = [
    {
      id: 100,
      name: "Michuu",
      price: 350,
      image:
        "https://coopbankoromia.com.et/wp-content/uploads/2022/08/Michu-Launch-Pic.jpg",
      description:
        "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
    },
    {
      id: 101,
      name: "Gammee",
      price: 600,
      image:
        "https://coopbankoromia.com.et/wp-content/uploads/2022/08/Michu-Launch-Pic.jpg",
      description:
        "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
    },
    {
      id: 102,
      name: "Sinqee",
      price: 2,
      image:
        "https://coopbankoromia.com.et/wp-content/uploads/2022/08/Michu-Launch-Pic.jpg",
      description:
        "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: products[0].image }} style={styles.image} />
        <Text style={{ margin: 10 }}>Hello</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={{ uri: products[0].image }} style={styles.image} />
        <Text style={{ margin: 10 }}>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  innerContainer: {
    // flex: 1,
    margin: 20,
    flexDirection: "row",
    backgroundColor: "red",
  },
  image: {
    height: 100,
    width: 100,
  },
});
