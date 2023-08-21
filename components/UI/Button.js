import * as React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { CustomText } from "./CustomText";
import { colors, fonts, gradient, gradient2 } from "../../utils";

export function Button({
  textColor,
  textStyle,
  label,
  fontFamily,
  buttonColor,
  borderColor,
  children,
  active,
  customStyles,
  activeOpacity,
  gradientColor,
  gradientStyle,
  gradientTextStyle,
  secondGradient,
  // buttonHeight,
  ...others
}) {
  return (
    <>
      {active ? (
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            styles.border,
            customStyles,
            {
              backgroundColor: buttonColor,
              color: textColor,
              borderColor: borderColor
            }
          ]}
          {...others}
          activeOpacity={activeOpacity || 0.3}
        >
          {children && children}
          <CustomText
            color={textColor}
            fontFamily={fontFamily ? fontFamily : "bold"}
            fontSize={fonts.text.md}
            {...textStyle}
          >
            {label}
          </CustomText>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.inactiveButton,
            // { backgroundColor: buttonColor, color: textColor }
          ]}
        >
          <TouchableOpacity
            style={styles.buttonStyle}
            {...others}
            activeOpacity={activeOpacity || 0.6}
          >
            {children && children}
            <CustomText
              color={textColor}
              fontFamily="bold"
              fontSize={fonts.text.md}
              {...textStyle}
            >
              {label}
            </CustomText>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    height: 56,
    justifyContent: "center",
    borderWidth: 1,
  },
  border: {
    // color: colors.primary,
    borderRadius: 8
  },
  inactiveButton: {
    backgroundColor: colors.primaryLight,
    borderRadius: 8,
  },
});
