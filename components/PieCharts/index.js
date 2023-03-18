import React from "react";
import { View, Text } from "react-native";
import { VictoryPie, VictoryLabel } from "victory-native";

export default function PieCharts({ acct }) {
  const chartData = [
    { x: "Label 1", y: 25, color: "#FF6347" },
    // { x: "Label 2", y: 50, color: "#4B0082" },
    // { x: "Label 3", y: 75, color: "#20B2AA" },
  ];

  function renderText() {
    return (
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          //   justifyContent: "flex-end",
          //   flex: 1,
          top: 180,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{acct.name}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{acct.amount}</Text>
      </View>
    );
  }

  return (
    <View style={{ alignItems: "center" }}>
      <VictoryPie
        data={[{ x: "Label 1", y: acct.amount, color: "#FF6347" }]}
        innerRadius={130}
        padAngle={1}
        style={{ labels: { display: "none" } }}
        animate={{
          duration: 7000,
        }}
      />
      {/* <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20, fontWeight: "bold" }}
          x={100}
          y={100}
          text="InnerText"
        /> */}
      {renderText()}
      {/* </VictoryPie> */}
    </View>
  );
}
