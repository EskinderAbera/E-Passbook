import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
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
        navigation.navigate("Account", {
          accounts: accountsf,
        })
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[COLORS.primary, "#00bdef"]}
        style={styles.card}
      >
        <View>
          <View style={styles.details}>
            <Image source={coopLogo} style={styles.coopLogo} />
            <Text style={styles.bankDetail}> Bank Details</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>BALANCE</Text>
              <View style={styles.balanceVisibility}>
                {balanceVisible ? (
                  <Text
                    style={styles.visible}
                  >{`${accountsf?.balance} br.`}</Text>
                ) : (
                  <Text style={styles.visible}>
                    {[..."balance"].map((c) => "*")}
                  </Text>
                )}
                <Ionicons
                  name={balanceVisible ? "eye-off" : "eye"}
                  size={28}
                  color={COLORS.white}
                  onPress={handlePress}
                  style={styles.eyeIcon}
                />
              </View>
            </View>
            <View style={styles.accountContainer}>
              <Text style={styles.accountText}>Account Number</Text>
              <Text style={styles.accountNumber}>
                {accountsf.accountNumber}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ShowBalanceItem;
