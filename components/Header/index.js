import { useState, useRef } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import banner from "../../assets/icons/coop-banner.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import QRCode from "react-native-qrcode-svg";
import styles from "./styles";
import { COLORS } from "../../constants/theme";
import RBSheet from "react-native-raw-bottom-sheet";
import { useSelector } from "react-redux";

const Header = ({ accounts }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const balance = "10200.125";
  const refRBSheet = useRef();

  const BottomContent = () => (
    <View style={styles.textContainer}>
      <Text style={styles.textName}>Scan My Account</Text>
      <QRCode value={accounts?.accountNumber} size={200} />
    </View>
  );

  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        height={400}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(33, 26, 27, 0.35)",
          },
          draggableIcon: {
            backgroundColor: COLORS.primary,
          },
        }}
      >
        <BottomContent />
      </RBSheet>
      <ImageBackground style={styles.background} source={banner}>
        <View style={styles.accountContainer}>
          <View style={styles.innerAccount}>
            <View>
              {/* <View style={styles.productText}>
                <Text style={styles.header}>{accounts?.product}</Text>
              </View> */}
              <Text style={styles.accountNo}>{accounts?.accountNumber}</Text>
            </View>
          </View>
          <View style={styles.balanceContainer}>
            <View style={styles.balanceText}>
              <Text style={styles.header}>BALANCE</Text>
              {balanceVisible ? (
                <Text style={styles.visible}>{accounts?.balance}</Text>
              ) : (
                <Text style={styles.visible}>
                  {[...balance].map((c) => "*")}
                </Text>
              )}
            </View>

            <Ionicons
              name={balanceVisible ? "eye-off" : "eye"}
              size={30}
              color={COLORS.white}
              onPress={() => setBalanceVisible(!balanceVisible)}
            />
          </View>
          <Text style={styles.fullName}>{userInfo?.userInfo?.fullName}</Text>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
            style={styles.qr}
          >
            <QRCode value={accounts?.accountNumber} size={50} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
