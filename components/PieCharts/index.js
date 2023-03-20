import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native";
import { View } from "react-native-animatable";

export default function PieCharts({ acct }) {
  const data = [100];
  const pieData = data.map((value, index) => ({
    value,
    svg: {
      fill: acct?.color,
      onPress: () => console.log("press", index),
    },
    key: `pie-${index}`,
  }));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ position: "absolute", height: 60 }}>{acct?.name}</Text>
      <Text style={{ position: "absolute" }}>{acct?.amount}</Text>
      <PieChart
        style={{ height: 200, width: 300 }}
        data={pieData}
        innerRadius={70}
      />
    </View>
  );
}
