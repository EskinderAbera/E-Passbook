import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useStateContext } from "../../Contexts/ContextProvider";
import { AntDesign } from "@expo/vector-icons";

const QRCodeScanner = ({ navigation }) => {
  const { setQrData, qrdata } = useStateContext();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    const newData = JSON.parse(data);
    setQrData({
      ...qrdata,
      agentId: newData.AgentId,
      merchantId: newData.MerchantId,
      fuelType: newData.FuelType,
      debitAmount: newData.Amount,
    });
    // alert(data);
    // setQrData(newData);
    navigation.navigate("Nedaj Payment");
  };

  const handleClose = () => {
    navigation.goBack();
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black" }}
        onBarCodeScanned={handleBarCodeScanned}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.scanContainer}>
          <View style={styles.scanLine} />
        </View>
        <Text style={styles.closeButtonText}>Scan a merchant QR Code</Text>
        <AntDesign
          name="close"
          size={30}
          color="white"
          style={styles.closeButton}
          onPress={handleClose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  scanLine: {
    width: "100%",
    height: 2,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: "center",
    animationName: "scan",
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  closeButton: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    top: 75,
    position: "absolute",
  },
  resultContainer: {
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default QRCodeScanner;
