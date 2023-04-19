import RBSheet from "react-native-raw-bottom-sheet";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRef, useCallback, useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const BottomSheet = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [showError, setShowError] = useState(false);
  const loadAccounts = useSelector((state) => state.accounts);

  const refRBSheet = useRef();

  const accountNumbers = loadAccounts?.accounts?.data?.accounts?.map(
    (acct) => ({
      label: acct.accountNumber,
      value: acct.accountNumber,
    })
  );

  const onPress = () => {
    if (value !== null) {
      refRBSheet.current.close();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  // useEffect(() => {
  //   refRBSheet.current.open();
  // }, []);

  return (
    <RBSheet
      ref={refRBSheet}
      height={320}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(33, 26, 27, 0.35)",
        },
        draggableIcon: {
          backgroundColor: "orange",
        },
      }}
    >
      <View style={styles.bottomContainer}>
        <View style={styles.bodyContainer}>
          <Text style={styles.amount}>Choose Account Number</Text>
          <Dropdown
            style={[
              styles.dropdown(showError),
              isFocus && { borderColor: "blue" },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={accountNumbers}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select Account" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? "blue" : "black"}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
        {showError && <Text style={styles.error}>Please Choose Account!</Text>}
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnTxt}>Choose</Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  amount: {
    fontSize: 15,
    marginBottom: 10,
  },
  dropdown: (showError) => ({
    height: 50,
    borderColor: showError ? "red" : "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  }),
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btn: {
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#00adef",
    padding: 10,
    margin: 20,
  },
  btnTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  error: {
    color: "red",
    alignSelf: "center",
  },
});

export default BottomSheet;
