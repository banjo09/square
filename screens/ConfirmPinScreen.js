import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import { CustomText, ScreenHeader, Keypad } from "../components";
import { spacing } from "../utils";
import PinInput from "../components/PinInput";

const { width } = Dimensions.get("screen");

export const ConfirmPinScreen = () => {
  const [pin, setPin] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (pin > 99999) {
      // console.log('done')
      navigation.navigate("SuccessPinScreen");
    }
  }, [pin, navigation]);


  const handleNumberPress = (number) => {
    if (number === "back") {
      setPin(Math.floor(pin / 10));
    } else {
      setPin((prevBalance) => prevBalance * 10 + number);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Confirm PIN" />
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <CustomText
            style={styles.instruction}
          >
            Input your six digit PIN again
          </CustomText>
          <View style={styles.formWrapper}>
            <View>
              <PinInput
                code={`${pin === 0 ? '' : pin}`}
                isVerified={isVerified}
                onVerificationSuccess={() => setIsVerified(true)}
                length={6}
              // onVerificationSuccess={handleVerificationSuccess}
              />
            </View>
          </View>
        </View>
        <View style={styles.action} >
          <Keypad onNumberPress={handleNumberPress} balance={pin} pin/>
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
    // flex: 6
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: '95%',
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
    // flex: 1,
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
    paddingLeft: 30
    // textAlign: 'center',
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
