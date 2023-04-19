import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, Dimensions, Text } from "react-native";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const LineChartItem = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, marginVertical: height <= 812 ? 15 : 50 }}>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
        }}
      >
        <Text>Last Record Overview</Text>
        <Text
          style={{
            color: COLORS.primary,
            marginLeft: "auto",
          }}
          onPress={() => navigation.navigate("NedajHistory")}
        >
          SHOW MORE
        </Text>
      </View>
      <LineChart
        data={chartData}
        width={width} // Width of the chart
        height={220} // Height of the chart
        chartConfig={{
          backgroundColor: "#ffffff", // Background color of the chart
          backgroundGradientFrom: "#ffffff", // Gradient start color
          backgroundGradientTo: "#ffffff", // Gradient end color
          decimalPlaces: 0, // Number of decimal places for data values
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color of the line
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color of labels
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726", // Color of dots
          },
        }}
        bezier // Use bezier curve for smoothing the line
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default LineChartItem;

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [250, 350, 400, 550, 700, 900, 800, 1000, 1100, 1200, 1400, 1600],
    },
  ],
};
