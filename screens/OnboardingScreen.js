import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import Swiper from "react-native-swiper";
import { SliderItem } from "../components/SliderItem";
import { OnboardingData } from "../utils/onboardingData";
import { colors, spacing } from "../utils";
// import Paginator from "./Paginator";

import { Button, CustomText } from "../components";
import { StatusBar } from "expo-status-bar";
// import { colors, spacing } from "../utils";
// import  * as React from "react";

const { width } = Dimensions.get("screen");

export const OnboardingScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  const scrollx = useRef(new Animated.Value(0)).current;
  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log('selectedIndex', selectedIndex)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Swiper
        horizontal={true}
        autoplay={true}
        ref={swiperRef}
        showsButtons={false}
        // onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
        //   useNativeDriver: false,
        // })}
        loop={true}
        pagingEnabled
        dot={<View style={{ borderWidth: 0 }} />}
        activeDot={<View style={{ borderWidth: 0 }} />}
        onIndexChanged={(index) => {
          setSelectedIndex(index);
          // console.log(index);
        }}
      >
        {OnboardingData.map((item, index) => (
          <View key={index} style={styles.dataWrapper}>
            <SliderItem
              title={item.title}
              description={item.description}
              banner={<item.banner />}
              // banner={item.banner}
              id={item.id}
            />
          </View>
        ))}
      </Swiper>

      <View
        style={{
          ...styles.buttonWrapper,
          justifyContent: selectedIndex === 2 ? 'center' : 'space-between'
        }}
      >
        {
          selectedIndex !== 2 && <>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
                marginLeft: 25,
                height: 40,
              }}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <CustomText
                style={{
                  color: '#fff'
                }}
              >
                Skip
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "#fff",
                marginRight: 25,
                height: 40,
                width: 80,
                borderRadius: 5,
              }}
              activeOpacity={0.6}
              onPress={() => setSelectedIndex((index) => index + 1)}
            >
              <CustomText
                style={{
                  // color: '#fff'
                  textAlign: 'center',
                }}
              >
                Next
              </CustomText>
            </TouchableOpacity>
          </>
        }
        {
          selectedIndex === 2 && <TouchableOpacity
            style={{
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: "#fff",
              // marginLeft: 25,
              height: 40,
              width: '80%',
              borderRadius: 5,
            }}
            activeOpacity={0.6}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <CustomText
              style={{
                // color: '#fff'
                textAlign: 'center',
              }}
            >
              Get Started
            </CustomText>
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.statusbarHeight,
    backgroundColor: "white",
    // paddingHorizontal: spacing.wrapper,
  },

  activePaginationStyle: {
    width: width * 0.4,
    marginHorizontal: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: "green",
  },
  inactivepaginationStyle: {
    width: width * 0.4,
    marginHorizontal: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: "gray",
  },

  buttonWrapper: {
    height: 95,
    flexDirection: 'row',
    // justifyContent: "space-between",
    // alignItems: 'center',
    paddingHorizontal: Platform.OS === "ios" ? spacing.wrapper : 0,
    backgroundColor: '#000000',
    paddingTop: 10,
  },

  dataWrapper: {
    // marginTop: 30,
  },

  logoWrapper: {
    alignItems: "center",
    marginTop: 10,
  },

  loginwrapper: {
    flexDirection: "row",
    alignSelf: "center",
  },

  indicatorWrapper: {
    borderWidth: 2,
    width: width / 6,
    marginRight: spacing.margin.sm,
    borderRadius: 10,
  },

  paginatorWrapper: {
    flexDirection: "row",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
