import React, { useState } from "react";
import {
  View,
  Pressable,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { CustomText, Keypad } from "../components";
import { Barcode_white } from "../assets/img/Barcode";
import { Clock } from "../assets/img/Clock";
import { spacing } from "../utils";

export const KeypadScreen = () => {
  const [balance, setBalance] = useState(0);

  const handleNumberPress = (number) => {
    if (number === "back") {
      setBalance(Math.floor(balance / 10));
    } else {
      setBalance((prevBalance) => prevBalance * 10 + number);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={styles.wallet}>
        <View style={styles.walletContainer}>
          <Barcode_white />
          <View style={styles.middle}>
            <CustomText style={styles.middleTitle}>Wallet Balance</CustomText>
            <CustomText style={styles.middleSubtitle}>₦ 5,200</CustomText>
          </View>
          <Clock />
        </View>

      </View>

      <View style={styles.transactContainer}>
        <View style={styles.transact}>
          <CustomText style={styles.naira}>₦</CustomText>
          <CustomText style={styles.balance}>
            {balance}
          </CustomText>
        </View>
        <View>
          <Keypad onNumberPress={handleNumberPress} balance={balance} />
        </View>
        <View style={styles.action}>
          <Pressable style={styles.actionBtn}>
            <CustomText style={styles.actionText}>Request</CustomText>
          </Pressable>
          <Pressable style={styles.actionBtn}>
            <CustomText style={styles.actionText}>Send</CustomText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    paddingTop: spacing.statusbarHeight,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 10, 74, 1)",
  },
  wallet: {
    alignItems: "center",
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingTop: 20,
  },
  middle: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "rgba(159, 86, 212, 0.1)",
    borderRadius: 10,
  },
  middleTitle: {
    color: "#BDBDBD",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 1.3,
  },
  middleSubtitle: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1.4,
  },
  transactContainer: {
    marginTop: 20,
    paddingVertical: 20,
  },
  transact: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  naira: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  balance: {
    color: "#fff",
    textAlign: "center",
    fontSize: 50
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionBtn: {
    backgroundColor: "#28283A",
    alignItems: "center",
    width: 120,
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 10
  },
  actionText: {
    color: "#9B9B9B"
  }
});

