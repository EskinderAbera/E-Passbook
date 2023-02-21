import { View } from "react-native";
import styles from "./styles";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const SkeletonItem = () => {
  return (
    <View
      style={{
        paddingBottom: 8,
      }}
    >
      <ShimmerPlaceholder />
      <View style={styles.transactions}>
        <ShimmerPlaceholder />
        <View style={styles.transactionDetails}>
          <ShimmerPlaceholder />
          {/* <Feather
            name={account.CRAMT > 0 ? "arrow-up-right" : "arrow-down-left"}
            size={30}
            color={account.CRAMT > 0 ? COLORS.primary : "red"}
          /> */}
          <View style={styles.accountDateView}>
            <ShimmerPlaceholder style={styles.accountDate} />
            {/* <Text>{account.TXNREF}</Text>
            <Text style={styles.accountDate}>{account.DATE}</Text> */}
          </View>
        </View>
        <View style={styles.txn}>
          <ShimmerPlaceholder />
          {/* <Text>{account.CRAMT > 0 ? account.CRAMT : account.DRAMT}</Text> */}
          {/* <Text
            style={{
              color: account.CRAMT > 0 ? COLORS.primary : "red",
            }}
          >
            {account.CRAMT > 0 ? "Cr" : "Dr"}
          </Text> */}
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default SkeletonItem;
