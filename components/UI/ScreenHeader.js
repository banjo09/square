import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BackHandler, StyleSheet, TouchableOpacity, View } from "react-native";
import { CustomText } from "./CustomText";
import { fonts, spacing } from "../../utils";
import { Back } from "../../assets/img/Back";

export const ScreenHeader = ({ title, children, loading, color }) => {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => loading && true);
    return () => backHandler.remove();
  }, [loading]);

  const navigation = useNavigation();
  return (
    <>
      {title && (
        <View style={styles.wrapper}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.backButtonStyle}
            onPress={() => navigation.goBack()}
          >
            <Back />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <CustomText
              style={styles.text}
            >
              {title}
            </CustomText>
          </View>
          <View style={{ marginLeft: spacing.margin.lg }}>
            {children}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    padding: 20,
    zIndex: 50,
  },

  titleWrapper: {
    marginLeft: 20,
    flex: 1,
  },

  backButtonStyle: {
    paddingHorizontal: 15,
    height: 40,
    justifyContent: "center",
  },
  text: {
    fontSize: fonts.text.md, // + 2,
    fontFamily: "bold",
    color: "#000A4A"
  }
});
