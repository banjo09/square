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
import { MaterialIcons } from "@expo/vector-icons";
import { Logo_white } from "../assets/img/onboarding";

import { Button, CustomText, ScreenHeader, PhoneInputWithFlag, Input } from "../components";
import { colors, spacing } from "../utils";
import { IconTextInput } from "../components/UI/inputText";
import OtpInput from "../components/OtpInput";

const { width } = Dimensions.get("screen");

export const VerificationScreen = () => {
  const [isVerified, setIsVerified] = useState(false);
  // const [isVerified, setIsVerified] = useState(true);
  const [remainingTime, setRemainingTime] = useState(59);
  const navigation = useNavigation();


  // const handleVerificationSuccess = () => {
  //   console.log("Verification successful!");
  //   setIsVerified(true);
  // };

  useEffect(() => {
    if (isVerified) {
      navigation.navigate("SuccessScreen");
    }
  }, [isVerified, navigation]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Verify Phone Number" />
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <CustomText
            style={styles.instruction}
          >
            Please input the five digit code that was sent to your phone number below
          </CustomText>
          <View style={styles.formWrapper}>
            <View>
              <OtpInput
                isVerified={isVerified}
                onVerificationSuccess={()=>setIsVerified(true)}
                length={5}
                // onVerificationSuccess={handleVerificationSuccess}
              />
            </View>
            <CustomText style={styles.timeRemaining}>
              {`0:${remainingTime.toString().padStart(2, "0")}`}{" "}
            </CustomText>
            <CustomText style={styles.sms}>
              Having trouble receiving SMS?{" "}
              <CustomText style={{ color: "purple" }}>Resend</CustomText> Or try other options
              below
            </CustomText>
          </View>
        </View>
        <View style={styles.action} >
          <TouchableOpacity
            style={[styles.callButton, remainingTime !== 0 && styles.disabledCallButton]}
            activeOpacity={0.6}
          // onPress={() => navigation.navigate("LoginScreen")}
          >
            <CustomText
              style={{
                color: remainingTime !== 0 ? '#D3D3D3' : "#000A4A",
                textAlign: 'center',
              }}
            >
              Call me
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.messageButton, remainingTime !== 0 && styles.disabledMessageButton]}
            activeOpacity={0.1}
          // onPress={() => navigation.navigate("LoginScreen")}
          >
            <CustomText
              style={{
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Whatsapp
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
    alignItems: 'center',
    marginTop: 50,
  },
  action: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '90%'
    // backgroundColor: 'red'
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
  instruction: {
    color: '#4F4F4F',
    textAlign: 'center',
  },
  timeRemaining: {
    fontSize: 15,
    color: "purple",
  },
  sms: {
    color: '#4F4F4F',
    textAlign: 'center',
    marginTop: spacing.margin.lg + 25,
  },
  callButton: {
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#000A4A",
    borderWidth: 1,
    height: 40,
    width: '45%',
    borderRadius: 7,
  },
  disabledCallButton: {
    borderColor: "#D3D3D3",
  },
  messageButton: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#000A4A",
    height: 40,
    width: '45%',
    borderRadius: 5,
  },
  disabledMessageButton: {
    backgroundColor: "#D3D3D3",
  }
});
