import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const IconTextInput = ({
  value,
  onChangeText,
  onIconPress,
  iconName,
  iconPress,
  frontIcon,
  frontIconName
}) => {
  return (
    <View style={styles.container}>
      {
        frontIcon && <TouchableOpacity
          activeOpacity={0.5}
          style={styles.iconContainer}
        // onPress={iconPress}
        >
          {frontIconName}
        </TouchableOpacity>
      }
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter text..."
      />
      {
        iconName && <TouchableOpacity activeOpacity={0.5} style={styles.iconBtn} onPress={iconPress}>
          {iconName}
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: '90%',
    height: 50,
  },
});
