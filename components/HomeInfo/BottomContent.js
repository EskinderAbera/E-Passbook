import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const BottomContent = ({ type, navigation }) => {
  if (type === "Statement") {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [isChanged, setIsChanged] = useState("");
    const [email, setEmail] = useState("");

    const StartDates = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setStartDate(currentDate);
    };

    const EndDates = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setEndDate(currentDate);
    };

    const showDatepicker = (props) => {
      setIsChanged(props);
      setShow(true);
    };
    return (
      <View style={styles.panel}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.panelTitle}>Choose Date</Text>
          <Text style={styles.panelSubtitle}>Select Date Ranges </Text>
        </View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Entypo name="email" color="#A9A9A9" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Start date</Text>
        <TouchableOpacity onPress={() => showDatepicker("startDate")}>
          <View style={styles.action}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={styles.textInput}
              value={startDate.toLocaleString()}
            />
            <FontAwesome name="sort-down" color="#A9A9A9" size={20} />
          </View>
        </TouchableOpacity>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          End date
        </Text>
        <TouchableOpacity onPress={() => showDatepicker("endDate")}>
          <View style={styles.action}>
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              style={styles.textInput}
              value={endDate.toLocaleString()}
            />
            <FontAwesome name="sort-down" color="#A9A9A9" size={20} />
          </View>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate("OTPVerification", { type: "" })}
          >
            <LinearGradient
              colors={["#00abef", "#00adef"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Send
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            onChange={isChanged === "startDate" ? StartDates : EndDates}
          />
        )}
      </View>
    );
  } else {
    const data = [
      { label: "Item 1", value: "1" },
      { label: "Item 2", value: "2" },
      { label: "Item 3", value: "3" },
      { label: "Item 4", value: "4" },
      { label: "Item 5", value: "5" },
      { label: "Item 6", value: "6" },
      { label: "Item 7", value: "7" },
      { label: "Item 8", value: "8" },
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: "blue" }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
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
    );
  }
};

export default BottomContent;
