import { View } from "react-native";
import styles from "./styles";

const NedajSkeleton = () => {
  return (
    // <View style={styles.Totalcontainer}>
    <View style={styles.container}>
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: "lightgray",
          marginRight: 10,
        }}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <View
            style={[
              {
                height: 15,
                width: "100%",
                backgroundColor: "lightgray",
                paddingBottom: 25,
              },
            ]}
          />
          {/* <View
            style={[
              styles.subTitle,
              {
                height: 15,
                width: 50,
                backgroundColor: "lightgray",
                marginLeft: "auto",
                paddingBottom: 25,
              },
            ]}
          /> */}
        </View>
        {/* <View style={styles.row}>
          <View style={styles.name} />
          <View style={styles.subTitle} />
        </View> */}
      </View>
    </View>
    // </View>
  );
};

export default NedajSkeleton;
