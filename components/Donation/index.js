import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import ProgressiveImage from "./ProgressiveImage";
import icons from "../../constants/icons";

const Donation = ({
  imageSource,
  title,
  percent,
  donationRaised,
  hoursLeft,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = () => {
    console.log(username, password, donationAmount);
    setModalVisible(false);
    // Reset form
    setUsername("");
    setPassword("");
    setDonationAmount("");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <ProgressiveImage
            defaultImageSource={icons.defaultImage}
            source={{ uri: imageSource }}
            style={styles.image}
            resizeMode="cover"
          />

          <Text style={styles.title}>{title}</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: percent * 100 + "%" }]} />
            </View>
            <Text style={styles.progressText}>{`${(percent * 100).toFixed(
              2
            )}%`}</Text>
          </View>
          <View style={styles.rowContainer}>
            <View>
              <Text style={styles.donationText}>Donation Raised</Text>
              <Text
                style={styles.donationRaised}
              >{`$${donationRaised} raised`}</Text>
            </View>
            <Text style={styles.hoursLeft}>{`🕔 ${hoursLeft}`}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cta} >
              <Text style={{color: "#fff"}}>Donate</Text>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Donation;
