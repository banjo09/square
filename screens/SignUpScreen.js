import React, { useRef, useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";

import { Button, CustomText, ScreenHeader, PhoneInputWithFlag, Input } from "../components";
import { colors, spacing } from "../utils";
import { IconTextInput } from "../components/UI/inputText";

const { width } = Dimensions.get("screen");

export const SignUpScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  const onValueChange = phone => setPhone(phone);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Enter Your Phone Number" />
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <CustomText
            style={{
              color: '#4F4F4F',
              textAlign: 'center',
            }}
          >
            We’ll send an SMS with a code to verify your phone number
          </CustomText>
          <View style={styles.formWrapper}>
            <View style={styles.inputWrapper}>
              {/* <PhoneInputWithFlag onValueChange={onValueChange} /> */}
              <TextInput
                value='+234'
                style={styles.phoneInput}
              />
              <TextInput
                value={phone}
                onChangeText={(value) => setPhone(value)}
                style={styles.textInput}
                placeholder="Phone Number"
                placeholderTextColor='#979797'
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.referralContainer}>
              <CustomText style={styles.referralText}>Have a referral ID?</CustomText>
              <MaterialIcons name="redeem" size={24} color="#9F56D4" />
            </View>
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: "#000A4A",
              height: 40,
              width: '95%',
              borderRadius: 8,
            }}
            activeOpacity={0.6}
            onPress={() => navigation.navigate("VerificationScreen")}
          >
            <CustomText style={styles.proceed}>
              Proceed
            </CustomText>
          </TouchableOpacity>

          <View style={styles.loginwrapper}>
            <CustomText>Already have an account? </CustomText>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignContent: "center",
              }}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <CustomText
                style={{
                  color: '#9F56D4'
                }}
              >
                Login here
              </CustomText>
            </TouchableOpacity>
          </View>
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
    flex: 6
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: '95%',
    // backgroundColor: 'pink'
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
  phoneInput: {
    width: '25%',
    height: 45,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#fff',
    color: '#D3D3D3',
    borderRadius: 6,
    // padding: 20,
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 10
  },
  textInput: {
    width: '70%',
    height: 45,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: '#fff',
    color: '#D3D3D3',
    borderRadius: 6,
    // padding: 20,
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 10
  },
  referralContainer: {
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
    width: '95%',
  },
  referralText: {
    fontSize: 15,
    color: "#9F56D4",
  },
  formWrapper: {
    alignItems: 'center'
  },
  action: {
    alignItems: 'center',
    flex: 1
  },
  proceed: {
    color: '#fff',
    fontWeight: 'medium',
    textAlign: 'center',
  },
  loginwrapper: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: spacing.margin.md + 5,
  },
});
