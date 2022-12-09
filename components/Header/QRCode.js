import {
  View,
  TouchableOpacity,
  Image,
  Animated,
  Modal,
  Text,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
import QRCode from "react-native-qrcode-svg";

const QRCodeComponent = ({ show, setShow, accounts }) => {
  const [visible, setVisible] = useState(show);
  const [showModal, setShowModal] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;

  const ModalPoup = ({ visible, children }) => {
    useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  return (
    <Animatable.View animation="fadeInUpBig">
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                setShow(false);
              }}
            >
              <Image
                source={require("../../assets/icons/close.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginBottom: 50, fontSize: 20 }}>
            Scan My Account
          </Text>
          <QRCode
            value={accounts.accountNo}
            size={200}
            logo={require("../../assets/icons/Infinity.png")}
          />
        </View>
      </ModalPoup>
    </Animatable.View>
  );
};

export default QRCodeComponent;
