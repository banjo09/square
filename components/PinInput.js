import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PinInput({ code, isVerified, length }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [digitsEntered, setDigitsEntered] = useState(false);
  const verificationInputRefs = Array.from({ length }).map(() =>
    useRef(null)
  );
  const navigation = useNavigation();

  useEffect(() => {
    if (verificationCode.length === 6) {
      setDigitsEntered(true);
    } else {
      setDigitsEntered(false);
    }
  }, [verificationCode]);

  const handleVerificationCodeChange = (index, value) => {
    if (value.length === 1 && index < 5) {
      verificationInputRefs[index + 1].current.focus();
    }

    if (verificationCode.length === 5) {
      setDigitsEntered(true);
    } else {
      setDigitsEntered(false);
    }

    const code = verificationCode.split("");
    code[index] = value;
    setVerificationCode(code.join(""));
  };

  const handleVerificationSubmit = () => {
    Keyboard.dismiss();
    if (digitsEntered) {
      navigation.navigate("TabScreens");
    }
  };

  const returnKeyType =
    digitsEntered && verificationCode.length === 5 ? "done" : "next";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.otpContainer}>
        {verificationInputRefs.map((inputRef, index) => (
          <TextInput
            key={index}
            ref={inputRef}
            style={[
              styles.otpInput,
              isVerified && { opacity: 0.5, borderColor: "gray" },
            ]}
            value={code[index]}
            // onChangeText={(value) => handleVerificationCodeChange(index, value)}
            maxLength={1}
            keyboardType="numeric"
            returnKeyType={index === 4 ? returnKeyType : "next"}
            editable={!isVerified}
            onSubmitEditing={index === 4 ? handleVerificationSubmit : null}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 35,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "rgba(242, 248, 255, 1)",
  },
});