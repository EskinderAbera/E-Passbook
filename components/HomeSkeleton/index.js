import { View } from "react-native";
import styles from "../ShowBalance/styles";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const HomeSkeleton = () => {
  return (
    <View>
      <ShimmerPlaceholder
        shimmerStyle={{ borderRadius: 10, width: "100%" }}
        delay={1000}
        style={{
          width: "90%",
          height: 150,
          flexDirection: "row",
          marginVertical: 10,
          borderColor: "gray",
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: "#ebebeb",
          marginLeft: 10,
        }}
      />
    </View>
  );
};

export default HomeSkeleton;
