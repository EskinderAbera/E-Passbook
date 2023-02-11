import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import ShowBalance from "../../components/ShowBalance";
import { useStateContext } from "../../Contexts/ContextProvider";
import styles from "./styles";
import SetPrimaryAccount from "../../components/SetPrimaryAccount";
import Carousel from "react-native-reanimated-carousel";

const Home = ({ navigation }) => {
  const { accounts } = useStateContext();
  const width = Dimensions.get("window").width;
  const products = [
    {
      image: require("../../assets/icons/michu.png"),
    },
    {
      image: require("../../assets/icons/sinqee.png"),
    },
    {
      image: require("../../assets/icons/farmer.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Carousel
          width={width}
          autoPlay={true}
          data={products}
          renderItem={({ item, index }) => (
            <View style={styles.slide}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.accountContainer}>
        <View style={styles.innerAccountContainer}>
          <Text style={styles.accountText}>Your Payment Credentials</Text>
          <SetPrimaryAccount />
        </View>
        <View style={styles.innerAccountContainer}>
          <Text style={styles.accountText}>Your Account</Text>
        </View>
      </View>
      <ScrollView>
        {accounts.map((accountsf) => {
          return (
            <ShowBalance navigation={navigation} key={accountsf.openingDate} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
