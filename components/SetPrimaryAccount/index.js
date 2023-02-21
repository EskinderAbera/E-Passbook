import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useStateContext } from "../../Contexts/ContextProvider";
import styles from "./styles";
import { Modal } from "react-native";
import { COLORS } from "../../constants/theme";
import SignUpModal from "../SignupModal";
import ErrorModal from "../Error";

const SetPrimaryAccount = () => {
  const { accounts } = useStateContext();
  const [showModal, setShowModal] = useState(false);
  const [showStatus, setShowStatus] = useState({ err: false, succ: false });
  const [selectedAccount, setSelectedAccount] = useState({});
  const [pinAccount, setPinAccount] = useState("");
  const [pin, setPin] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);

  useEffect(() => {
    showStatus.succ &&
      setTimeout(() => {
        setShowStatus({ ...showStatus, succ: false });
        setShowModal(false);
      }, 3000);
    showStatus.err &&
      setTimeout(() => {
        setShowStatus({ ...showStatus, err: false });
      }, 3000);
  }, [showStatus]);

  return (
    <>
      {showStatus.succ && <SignUpModal />}
      {showStatus.err && <ErrorModal />}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={{
            height: 40,
            padding: 10,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ color: COLORS.white }}>Set Primary Account</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", fontSize: 15 }}>{pinAccount}</Text>
      </View>
      {/* <Modal
        animationType="none"
        transparent={true}
        backgroundColor="#ddd"
        visible={showModal}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPress={() => setShowModal(false)}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
            <View style={styles.lotContainer}>
              <ScrollView contentContainerStyle={styles.modalView}>
                <Text style={styles.modalTitle}>Select Primary Account</Text>
                <View style={styles.accountContainer}>
                  <Text style={styles.accountTitle}>Account Numbers</Text>
                  {accounts
                    ?.filter((acct) => acct.status === true)
                    .map((account, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          setSelectedAccount({
                            [index]: !selectedAccount?.[index],
                          });
                          setPinAccount([account?.accountNo]);
                        }}
                        style={
                          selectedAccount?.[index]
                            ? [styles.group, styles.selectedMember]
                            : styles.group
                        }
                      >
                        <Text
                          style={{
                            color: selectedAccount?.[index]
                              ? COLORS.white
                              : COLORS.primary,
                            fontSize: 15,
                          }}
                        >
                          {account.accountNo}
                        </Text>
                      </TouchableOpacity>
                    ))}

                  <Text style={styles.amount}>PIN </Text>
                  <View
                    style={[
                      styles.amtContainer,
                      isInputFocus && { borderColor: COLORS.secondary },
                    ]}
                  >
                    <TextInput
                      onChangeText={setPin}
                      value={pin}
                      placeholder="Set Pin"
                      keyboardType="numeric"
                      onFocus={() => setIsInputFocus(true)}
                      onBlur={() => setIsInputFocus(false)}
                    />
                  </View>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.applyBtn}>
                    <Text style={styles.txt}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal> */}

      <Modal visible={showModal} transparent={true} animationType={"slide"}>
        <TouchableOpacity
          style={styles.modalBackGround}
          activeOpacity={1}
          onPress={() => setShowModal(false)}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
            <ScrollView>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  marginVertical: 20,
                }}
              >
                Select Primary Account
              </Text>

              {/* <Text style={styles.accountTitle}>Account Numbers</Text> */}
              {accounts
                ?.filter((acct) => acct.status === true)
                .map((account, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectedAccount({
                        [index]: !selectedAccount?.[index],
                      });
                      setPinAccount([account?.accountNo]);
                    }}
                    style={
                      selectedAccount?.[index]
                        ? [styles.group, styles.selectedMember]
                        : styles.group
                    }
                  >
                    <Text
                      style={{
                        color: selectedAccount?.[index]
                          ? COLORS.white
                          : COLORS.primary,
                        fontSize: 15,
                      }}
                    >
                      {account.accountNo}
                    </Text>
                  </TouchableOpacity>
                ))}

              <Text style={{ fontSize: 15, marginVertical: 20 }}>PIN</Text>
              <View
                style={[
                  styles.amtContainer,
                  isInputFocus && { borderColor: COLORS.secondary },
                ]}
              >
                <TextInput
                  onChangeText={setPin}
                  value={pin}
                  placeholder="Set Pin"
                  keyboardType="numeric"
                  onFocus={() => setIsInputFocus(true)}
                  onBlur={() => setIsInputFocus(false)}
                />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.applyBtn}
                  onPress={() => {
                    pin && pin.length
                      ? setShowStatus({
                          ...showStatus,
                          succ: true,
                          err: false,
                        })
                      : setShowStatus({
                          ...showStatus,
                          err: true,
                          succ: false,
                        });
                  }}
                >
                  <Text style={styles.txt}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default SetPrimaryAccount;
