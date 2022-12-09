import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const DateTimePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState("date");
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

  const textInputChange = (val) => {
    setEmail(val);
  };

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Select Dates!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Entypo name="email" color="#A9A9A9" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
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
          <TouchableOpacity style={styles.signIn}>
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
            mode={mode}
            is24Hour={true}
            onChange={isChanged === "startDate" ? StartDates : EndDates}
          />
        )}
      </View>
    </Animatable.View>
  );
};

export default DateTimePickers;
