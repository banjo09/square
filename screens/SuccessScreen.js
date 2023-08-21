import React, { useEffect, useState } from "react";
import {
  Dimensions,
  TextInput,
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { CustomText } from "../components";
import { fonts, spacing } from "../utils";
import { SuccessImage } from "../assets/img/success";

const { width } = Dimensions.get("screen");

export const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <SuccessImage />
          <CustomText
            style={styles.text}
          >
            Verification successful!
          </CustomText>
          <CustomText
            style={styles.instruction}
          >
            Your phone number has been verified successfully.
          </CustomText>
        </View>
        <View style={styles.action} >
          <TouchableOpacity
            style={styles.messageButton}
            activeOpacity={0.1}
            onPress={() => navigation.navigate("SecurityPinScreen")}
          >
            <CustomText
              style={{
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Okay!
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.statusbarHeight,
    backgroundColor: "#fff",
  },
  wrapper: {
    paddingHorizontal: 10,
    flex: 1,
  },
  main: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200
  },
  action: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '90%'
    // backgroundColor: 'red'
  },
  messageButton: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#000A4A",
    height: 40,
    width: '95%',
    borderRadius: 5,
  },
  instruction: {
    // color: '#4F4F4F',
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    fontSize: fonts.text.md, // + 2,
    fontFamily: "medium",
    marginTop: 15
    // color: "#000A4A"
  }
});
