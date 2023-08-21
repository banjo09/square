import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { BackButton, BlackBackButton } from "../assets/img/Back";
import { CustomText } from "./UI/CustomText";

export const Keypad = ({ onNumberPress, balance, pin }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "back"];
  const rows = [];

  for (let i = 0; i < numbers.length; i += 3) {
    rows.push(numbers.slice(i, i + 3));
  }

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((number) => (
            <Pressable
              key={number}
              style={styles.number}
              onPress={() => onNumberPress(number)}
              disabled={number === "back" && balance <= 0}
            >
              {number === "back" ? (pin ? <BlackBackButton/> : <BackButton />) : (
                <CustomText style={styles.text}>{number}</CustomText>
              )}
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    margin: 10,
  },
  text: {
    color: "#BDBDBD",
    fontSize: 24,
  },
});

