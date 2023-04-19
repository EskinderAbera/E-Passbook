import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { Modal } from "react-native";
import { COLORS } from "../../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import AccountActivate from "../Modals/AccountActivate";
import Modals from "../Modals";
import SetPrimaryAction from "../../store/Actions/SetPrimary";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SetPrimaryAccount = () => {
  const totalAccounts = useSelector((state) => state.accounts);
  const [showModal, setShowModal] = useState({
    type: "",
    show: false,
    desc: "",
  });
  const [selectedAccount, setSelectedAccount] = useState({});
  const [pinAccount, setPinAccount] = useState();
  const [pin, setPin] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const loader = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleConfirm = async () => {
    if (pin.length < 4) {
      setShowModal({
        ...showModal,
        type: "error",
        show: true,
        desc: "pin length should be 4 or more",
      });
    } else {
      setIsModal(true);
      try {
        const value = await AsyncStorage.getItem("username");
        if (value !== null) {
          dispatch(SetPrimaryAction(value, pinAccount, pin));
        }
      } catch (error) {
        setIsModal(false);
        setShowModal({
          ...showModal,
          type: "error",
          show: true,
          desc: "Wrong Phone",
        });
      }
    }
  };

  useEffect(() => {
    showModal.show &&
      setTimeout(() => {
        setShowModal({ ...showModal, show: false });
      }, 3000);
  }, [showModal]);

  function renderBody() {
    return (
      <>
        {showModal.show && (
          <AccountActivate msg={showModal.type} desc={showModal.desc} />
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            // disabled={
            //   totalAccounts?.accounts?.accounts?.length > 0 ? false : true
            // }
            style={{
              height: 40,
              padding: 10,
              backgroundColor: COLORS.primary,
              // backgroundColor:
              //   totalAccounts?.accounts?.accounts?.length > 0
              //     ? COLORS.primary
              //     : COLORS.grey,
            }}
          >
            <Text style={{ color: COLORS.white }}>Set Primary Account</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={{ fontSize: 15 }}>
              {totalAccounts?.accounts?.primaryAccount?.accountNumber}
            </Text>
          </View>
        </View>
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
                {totalAccounts?.accounts?.data?.accounts?.map(
                  (account, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedAccount({
                          [index]: !selectedAccount?.[index],
                        });
                        setPinAccount(account?.accountNumber);
                      }}
                      style={
                        selectedAccount?.[index] | account?.isMainAccount
                          ? [styles.group, styles.selectedMember]
                          : styles.group
                      }
                    >
                      <Text
                        style={{
                          color:
                            selectedAccount?.[index] | account?.isMainAccount
                              ? COLORS.white
                              : COLORS.primary,
                          fontSize: 15,
                        }}
                      >
                        {account.accountNumber}
                      </Text>
                    </TouchableOpacity>
                  )
                )}

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
                    onPress={handleConfirm}
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
  }

  return (
    <>
      {renderBody()}
      {!loader.loading && isModal && totalAccounts.primaryAccount && (
        <Modals
          props={{
            modalType: "success",
            type: "PrimaryAccount",
            setIsModal,
          }}
        />
      )}
    </>
  );
};

export default SetPrimaryAccount;
