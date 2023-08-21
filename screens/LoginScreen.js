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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo_white } from "../assets/img/onboarding";
import { colors, spacing } from "../utils";

import { Button, CustomText } from "../components";

const { width } = Dimensions.get("screen");

export const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Logo_white width="240" height="40" />
      </View>
      <View style={styles.buttonWrapper} >
        <TouchableOpacity
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
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <CustomText
            style={{
              // color: '#fff'
              textAlign: 'center',
            }}
          >
            Create an account
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignContent: "center",
            borderColor: "#fff",
            borderWidth: 1,
            marginTop: 15,
            height: 40,
            width: '80%',
            borderRadius: 5,
          }}
          activeOpacity={0.6}
        // onPress={() => navigation.navigate("LoginScreen")}
        >
          <CustomText
            style={{
              color: '#fff',
              textAlign: 'center',
            }}
          >
            I have an account
          </CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.statusbarHeight,
    backgroundColor: "#000A4A",
    // paddingHorizontal: spacing.wrapper,
  },

  logo: {
    flex: 5,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 10,
  },

  buttonWrapper: {
    flex: 1.5,
    justifyContent: 'center',
    // height: 95,
    // flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: Platform.OS === "ios" ? spacing.wrapper : 0,
    // backgroundColor: '#000000',
    paddingTop: 10,
  },
});
