import * as React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

// export function CustomText({
//   fontSize,
//   color,
//   fontFamily,
//   children,
//   textAlign,
//   fontWeight,
//   lineHeight,
//   otherProps,
//   ...others
// }) {
export function CustomText(props) {
  // console.log('others', others)
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          // lineHeight: lineHeight && lineHeight,
          // fontSize: fontSize,
          // color: color,
          fontFamily: props.fontFamily ? props.fontFamily : "regular",
          // fontWeight: fontWeight,
          // textAlign,
        },
      ]}
    >
      {props.children}
    </Text>
  );
}
