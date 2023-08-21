import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { colors, fonts, spacing } from "../../utils";

export const Input = ({
  icon,
  iconName,
  frontIcon,
  frontIconName,
  keyboardType,
  secureTextEntry,
  maxLength,
  editable,
  iconPress,
  placeholder,
  value,
  onChangeText,
  fontSize,
  fontFamily,
  isError,
  blur,
  returnKeyType,
  onBlur,
  errMsg,
  error,
  color,
  inputContainer,
  inputCustomisationStyle,
  placeholderTextColor,
  ...others
}) => {
  // console.log('color', color)

  const [inputFocus, setInputFocus] = useState(false);


  return (
    <>
      {icon ? (
        <View
          style={[
            styles.flexRow,
            inputContainer
          ]}
        >
          {
            frontIcon && <TouchableOpacity
              activeOpacity={0.5}
              style={styles.iconBtn}
            // onPress={iconPress}
            >
              {frontIconName}
            </TouchableOpacity>
          }
          <TextInput
            maxLength={maxLength && maxLength}
            secureTextEntry={secureTextEntry}
            style={[
              styles.inputWithIconStyle,
              color && { color },
              inputCustomisationStyle
            ]}
            selectionColor={colors.black}
            editable={editable}
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setInputFocus(true)}
            onBlur={(e) => {
              setInputFocus(false);
              if (onBlur) {
                onBlur(e);
              }
            }}
            {...others}
            returnKeyType={returnKeyType}
          />
          {
            iconName && <TouchableOpacity activeOpacity={0.5} style={styles.iconBtn} onPress={iconPress}>
              {/* <Image source={iconName} style={styles.iconStyle} /> */}
              {iconName}
            </TouchableOpacity>
          }
        </View>
      ) : (
        <>
          <TextInput
            maxLength={maxLength && maxLength}
            style={[
              styles.inputStyle,
              color && { color }
            ]}
            // selectionColor={colors.black}
            editable={editable}
            keyboardType={keyboardType}
            // secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            // placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setInputFocus(true)}
            onBlur={(e) => {
              setInputFocus(false);
              if (onBlur) {
                onBlur(e);
              }
            }}
            returnKeyType={returnKeyType ? returnKeyType : "done"}
            {...others}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: spacing.radius.lg,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingLeft: spacing.padding.sm,
    paddingRight: spacing.padding.sm,
    marginTop: spacing.margin.sm,
    // width: 90
  },
  inputStyle: {
    // backgroundColor: colors.white,
    backgroundColor: 'red',
    fontFamily: "medium",
    color: colors.black,
    fontSize: fonts.text.md,
    borderRadius: spacing.radius.lg,
    borderWidth: 1,
    marginTop: spacing.margin.sm,
    padding: spacing.padding.md + 6,
    paddingLeft: 0,
    height: 56,
    // width: 70
  },
  inputWithIconStyle: {
    flex: 1,
    padding: spacing.padding.lg,
    // borderRadius: spacing.radius.lg,
    backgroundColor: colors.white,
    fontFamily: "medium",
    color: colors.black,
    fontSize: fonts.text.md,
  },
  iconBtn: {
    borderRadius: 50,
    paddingHorizontal: spacing.margin.xs,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
