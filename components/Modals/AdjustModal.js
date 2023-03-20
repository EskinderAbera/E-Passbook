import React from "react";
import { Modal, Text, StyleSheet, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants/theme";
import { updateAccounts } from "../../store";

const AdjustBalance = ({ setShowModal, acnt }) => {
  console.log(acnt);
  const [balance, setBalance] = React.useState("");
  const [showBalance, setShowBalance] = React.useState(false);
  const { accounts } = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  let account = accounts?.filter((acct) => acct.name === acnt.name)[0];

  const handleBalance = () => {
    if (balance) {
      dispatch(
        updateAccounts({
          name: account.name,
          account: { ...account, amount: account.amount },
        })
      );
    }
  };

  return (
    <Modal visible={true} transparent={true}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setShowModal(false)}
        style={styles.modalBackGround}
      >
        <TouchableOpacity activeOpacity={1} style={[styles.modalContainer]}>
          <Text
            style={{ fontSize: 20, textAlign: "center", paddingHorizontal: 30 }}
          >
            Choose how to adjust your balance
          </Text>
          <TouchableOpacity
            style={{
              padding: 20,
              margin: 15,
              backgroundColor: "white",
              alignItems: "center",
              paddingVertical: 30,
              elevation: 3,
              shadowColor: "#52006A",
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 17, marginBottom: 10 }}>
              Adjust by record
            </Text>
            <Text>
              Write the Correct balance and COOPass will create a correction
              record for it. Use this if you'va forgotten to track just a feww
              expenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              //   width: "90%",
              padding: 20,
              margin: 15,
              backgroundColor: "white",
              alignItems: "center",
              paddingVertical: 30,
              elevation: 3,
              shadowColor: "#52006A",
              borderRadius: 20,
            }}
            onPress={() => setShowBalance(true)}
          >
            <Text style={{ fontSize: 17, marginBottom: 10 }}>
              Change initial balance
            </Text>
            <Text>
              Write the Correct balance and COOPass will change the initial
              balance on your account. Use this if you'va forgotten to track
              just a feww expenses
            </Text>
          </TouchableOpacity>
          {showBalance && (
            <TextInput
              style={styles.input}
              onChangeText={setBalance}
              value={balance}
              keyboardType={"number-pad"}
              placeholder={"add initial balance"}
            />
          )}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, color: COLORS.primary }}
              onPress={() => setShowModal(false)}
            >
              Cancel
            </Text>
            {showBalance && (
              <TouchableOpacity onPress={handleBalance}>
                <Text style={{ fontSize: 20, color: COLORS.primary }}>Ok</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    paddingVertical: 30,
    elevation: 20,
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
    width: "90%",
    marginLeft: 20,
  },
});

export default AdjustBalance;
