import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
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
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
