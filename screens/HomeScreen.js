import React from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Image,
  StatusBar,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { CustomText } from "../components";
import { Barcode } from "../assets/img/Barcode";
import { Profile } from "../assets/img/Profile";
import { Notification } from "../assets/img/Notification";
import { spacing } from "../utils";
import { homeGradient } from "../utils/gradient";
import { Note } from "../assets/img/Note";
// import { prof, not, notb, dot, balance, note } from "../assets/index";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle="default" />
      <LinearGradient
        style={styles.gradient}
        colors={homeGradient.colors}
        start={homeGradient.start}
        end={homeGradient.end}
      >
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <View style={styles.profileImage}>
              <Profile />
            </View>
            <View style={styles.profileText}>
              <CustomText style={styles.profileGreeting}>Hello,</CustomText>
              <CustomText style={styles.profileName}>David Oloye</CustomText>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.barcode}>
              <Barcode />
            </View>
            <Notification />
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <CustomText style={styles.balanceText}>
            Wallet Balance
          </CustomText>
          <View style={styles.transact}>
            <CustomText style={styles.naira}>₦</CustomText>
            <CustomText style={styles.balance}>
              XXXX
            </CustomText>
            <View style={styles.blurOverlay} />
          </View>
        </View>
        <View style={styles.profileBtn}>
          <Pressable
            style={[styles.btn, styles.btnFund]}
            onPress={() => navigation.navigate("KeypadScreen")}
          >
            <CustomText style={styles.fund}>Fund</CustomText>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnWith]}>
            <CustomText>Withdraw</CustomText>
          </Pressable>
        </View>

      </LinearGradient>
      <View style={styles.textContainer}>
        <View style={styles.accessContainer}>
          <CustomText style={styles.accessText}>Quick Access</CustomText>
          <View style={styles.accessIcon}>
            <View style={styles.icon}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="mobile" size={24} color="#9F56D4" />
              </View>
              <CustomText style={styles.iconText}>
                Pay Bills
              </CustomText>
            </View>
            <View style={styles.icon}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="redeem" size={24} color="#9F56D4" />
              </View>
              <CustomText style={styles.iconText}>
                GiftCards
              </CustomText>
            </View>
            <View style={styles.icon}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="credit-card" size={24} color="#9F56D4" />
              </View>
              <CustomText style={styles.iconText}>
                Cards
              </CustomText>
            </View>
          </View>
        </View>
        <View style={styles.transactionContainer}>
          <CustomText style={styles.transText}>Recent Transactions</CustomText>

          <View style={styles.tranNote}>
            <Note />
            <CustomText style={styles.transTitle}>No recent transaction</CustomText>
            <CustomText style={styles.transDescription}>
              You have not performed any transaction, you can start sending and
              requesting money from your contacts.
            </CustomText>
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
    // justifyContent: "center",
  },
  gradient: {
    // flex: 1,
    paddingTop: 30,
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    // paddingLeft: 20,
    paddingHorizontal: 20,
    // backgroundColor: 'red'
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // paddingTop: 30,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    marginRight: 10,
  },
  profileText: {
    flexDirection: "column",
    gap: 0,
  },
  profileGreeting: {
    color: "#828282",
    fontWeight: "500",
  },
  profileName: {},
  notificationContainer: {
    flexDirection: "row",
    gap: 10,
  },
  notif: {},
  notification: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  balanceContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'yellow'
  },
  balanceText: {
    paddingVertical: 10,
    color: "#000A4A",
    textAlign: 'center',
    // backgroundColor: 'red'
  },
  profileBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    textAlign: "center",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 120,
    marginVertical: 25,
  },
  btnFund: {
    backgroundColor: "#000A4A",
  },
  fund: {
    color: "#fff",
  },
  btnWith: {
    backgroundColor: "#E1E1E1",
    color: "#000",
  },
  accessContainer: {
    gap: 15,
    // flex: 1,
    // backgroundColor: 'pink'
  },
  accessText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#656565",
    paddingTop: 15
  },
  accessIcon: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 30,
    // backgroundColor: 'pink'
  },
  iconContainer: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F6EFFB",
    // backgroundColor: 'red'
    // borderWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    alignItems: "center",
    gap: 10,
  },
  iconText: {
    fontSize: 15,
    color: "#3E3E3E",
  },
  transactionContainer: {
    paddingVertical: 40,
    flex: 1,
  },
  transText: {
    color: "#656565",
    fontSize: 16,
    fontWeight: "500",
  },
  tranNote: {
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    paddingTop: 30,
    // backgroundColor: 'pink'
  },
  transImg: {
    marginTop: 30,
  },
  transDescription: {
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 5,
    // fontSize: 18,
    // lineHeight: 25,
    color: "#9A9A9A",
  },
  transTitle: {
    fontSize: 16,
    fontWeight: 'medium'
  },
  barcode: {
    backgroundColor: '#fff',
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  transact: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  naira: {
    color: "#000A4A",
    textAlign: "center",
    fontSize: 20
  },
  balance: {
    color: "#000A4A",
    textAlign: "center",
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
    textShadowOffset: { width: 2, height: 2 }, // Adjust the offset for blur effect
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the color and opacity for the desired blur effect
    zIndex: 0,
    filter: 'blur(5px)', // Apply the blur effect
  },
});
