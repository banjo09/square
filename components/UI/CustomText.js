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
        { fontFamily: 'regular' },
        props.style,
        // {
        //   fontFamily: props.fontFamily ? props.fontFamily : "regular",
        // },
      ]}
    >
      {props.children}
    </Text>
  );
}
