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
// import { colors, spacing } from "../utils";
// import  * as React from "react";

const { width } = Dimensions.get("screen");

export const OnboardingScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  const scrollx = useRef(new Animated.Value(0)).current;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.paginatorWrapper}>
        {OnboardingData.map((item, index) => (
          <View
            style={[
              styles.indicatorWrapper,
              { borderColor: selectedIndex === index ? 'fff' : "#EEEEEE" },
            ]}
            key={index}
          />
        ))}
      </View> */}

      {/* <View style={styles.logoWrapper}>
        <StashLogo />
      </View> */}
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
              // banner={<item.banner />}
              banner={item.banner}
              id={item.id}
            />
          </View>
        ))}
        {/* <ImageBackground
          source={require("../assets/img/onboarding/phone.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <CustomText style={styles.overlayText}>
              Your Overlay Text
            </CustomText>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("../assets/img/onboarding/girl.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <CustomText style={styles.overlayText}>
              Your Overlay Text
            </CustomText>
          </View>
        </ImageBackground> */}
      </Swiper>

      <View style={styles.buttonWrapper}>
        <Button
          label="Create a free account"
          buttonColor={colors.primary}
          textColor={colors.white}
          onPress={() => navigation.navigate("Onboarding")}
          active
        />
        <View style={styles.loginwrapper}>
          <CustomText fontSize={15} fontFamily="regular">
            Have an account?{" "}
          </CustomText>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignContent: "center",
            }}
            activeOpacity={0.6}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <CustomText color={colors.primary}>Login</CustomText>
          </TouchableOpacity>
        </View>
        {/* <Button
          label="Log In"
          buttonColor={colors.primaryLight}
          textColor={colors.primary}
          onPress={() => navigation.navigate("LoginScreen")}
        /> */}
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
    height: 90,
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: Platform.OS === "ios" ? spacing.wrapper : 0,
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
