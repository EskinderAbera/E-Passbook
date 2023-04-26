import { useState } from "react";
import coopLogo from "../../assets/icons/white_logo.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";

const ShowBalanceItem = ({ navigation, accountsf }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const handlePress = () => {
    setBalanceVisible(!balanceVisible);
  };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AccountDetail", {
          accounts: accountsf,
        })
      }
      style={styles.card}
    >
      <View style={styles.details}>
        <Image source={coopLogo} style={styles.coopLogo} />
        <Text style={styles.bankDetail}>Account Details</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerTitle}>
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.accountTitle}>Account Number</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>
            {balanceVisible ? `${accountsf?.balance} br.` : "*******"}
          </Text>
          <Ionicons
            name={balanceVisible ? "eye-off" : "eye"}
            size={24}
            color={COLORS.white}
            onPress={handlePress}
          />
          <Text style={styles.acctNo}>{accountsf.accountNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShowBalanceItem;
