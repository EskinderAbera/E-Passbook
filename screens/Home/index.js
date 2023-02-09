import React, { createRef, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import ShowBalance from "../../components/ShowBalance";
import { useStateContext } from "../../Contexts/ContextProvider";
import styles from "./styles";

let CurrentSlide = 0;
let IntervalTime = 4000;
let _timerId = 0;

const Home = ({ navigation }) => {
  const { accounts } = useStateContext();
  useEffect(() => {
    _stopAutoPlay();
    _startAutoPlay();
    return () => {
      _stopAutoPlay();
    };
  }, []);

  console.log(accounts);
  const flatList = createRef();

  const [product, setProduct] = useState({
    productImageList: [
      require("../../assets/icons/michu.png"),
      require("../../assets/icons/sinqee.png"),
      require("../../assets/icons/farmer.png"),
    ],
  });

  const _goToNextPage = () => {
    if (CurrentSlide >= product.productImageList.length - 1) {
      CurrentSlide = 0;
      flatList?.current?.scrollToIndex({
        index: CurrentSlide,
        animated: true,
      });
    } else {
      flatList?.current?.scrollToIndex({
        index: ++CurrentSlide,
        animated: true,
      });
    }
  };
  const _startAutoPlay = () => {
    _timerId = setInterval(_goToNextPage, IntervalTime);
  };
  const _stopAutoPlay = () => {
    if (_timerId) {
      clearInterval(_timerId);
      _timerId = null;
    }
  };

  const _keyExtractor = (item, index) => {
    return index.toString();
  };

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  const renderProduct = ({ item, index }) => {
    return (
      <View style={styles.productContainer}>
        <Image source={item} style={styles.images} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <FlatList
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
          />
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
