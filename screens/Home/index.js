import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import ShowBalance from "../../components/ShowBalance";
import { useStateContext } from "../../Contexts/ContextProvider";
import styles from "./styles";
import Swiper from "react-native-swiper";

const Home = ({ navigation }) => {
  const { accounts } = useStateContext();
  const [product, setProduct] = useState({
    productImageList: [
      require("../../assets/icons/michu.png"),
      require("../../assets/icons/sinqee.png"),
      require("../../assets/icons/farmer.png"),
    ],
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={styles.innerContainer}> */}
        {/* <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            keyExtractor={_keyExtractor}
            flatListRef={createRef()}
            ref={flatList}
          /> */}
        {/* </View> */}
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            autoplayTimeout={3}
            horizontal={true}
            height={200}
            activeDotColor="#FF6347"
            showsPagination={false}
          >
            <View style={styles.slide}>
              <Image
                source={require("../../assets/icons/michu.png")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/icons/sinqee.png")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../../assets/icons/farmer.png")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.accountContainer}>
          <View style={styles.innerAccountContainer}>
            <Text style={styles.accountText}>Your Account</Text>
          </View>
        </View>
        {accounts.map((account) => {
          return (
            <ShowBalance
              account={account}
              navigation={navigation}
              key={account.openingDate}
            />
          );
        })}
      </ScrollView>
      {/* <StatusBar /> */}
    </View>
  );
};

export default Home;
