import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import ProgressiveImage from "./ProgressiveImage";
import icons from "../../constants/icons";
import * as WebBrowser from "expo-web-browser";

const Donation = ({
  imageSource,
  title,
  percent,
  donationRaised,
  hoursLeft,
  shortDescription,
  campaignId,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDonate = async () => {
    console.log(campaignId);
    let result = await WebBrowser.openBrowserAsync(
      `http://10.1.177.121/campaign/${campaignId}`
    );
    console.log(result);
    setModalVisible(false);
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
              <View
                style={[
                  styles.progress,
                  Boolean(percent)
                    ? { width: percent * 100 + "%" }
                    : { width: 0 },
                ]}
              />
            </View>
            <Text style={styles.progressText}>
              {Boolean(percent) ? `${(percent * 100).toFixed(2)}%` : `0%`}
            </Text>
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
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          onClose();
        }}
      >
        <TouchableOpacity
          style={styles.modalView}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "600", fontSize: 17 }}>{title}</Text>
              <Text>{shortDescription}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cta} onPress={handleDonate}>
                <Text style={{ color: "#fff" }}>Donate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Donation;
