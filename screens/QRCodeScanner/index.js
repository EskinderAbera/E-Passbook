import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { useStateContext } from "../../Contexts/ContextProvider";

const QRCodeScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState(null);
  const { setQrData } = useStateContext();
  const { width, height } = Dimensions.get("window");
  const aspectRatio = height / width;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setQrData(data);
    navigation.goBack();
  };

  const handleRetryScan = () => {
    setScanned(false);
    setResult(null);
  };

  const handleClose = () => {
    navigation.goBack(); // or navigate to a different screen
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
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
      {/* {scanned && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Result: {result}</Text>
          <Button title="Retry Scan" onPress={handleRetryScan} />
        </View>
      )} */}
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
    top: 30,
    right: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
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
