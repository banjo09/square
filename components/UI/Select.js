import React from 'react';
import { View, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';

export const PhoneInputWithFlag = () => {
  return (
    <View style={styles.container}>
      <PhoneInput
        style={styles.phoneInput}
        initialCountry="ng"
        textStyle={{ fontSize: 14 }}
        flagStyle={styles.flag}
        offset={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 5,
    backgroundColor: 'blue'
  },
  phoneInput: {
    width: 90,
  },
  flag: {
    width: 30,
    height: 20,
  },
});


// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export const PhoneInputWithFlag = () => {
//   return (
//     <View style={styles.container}>
//       <DropDownPicker
//         items={[
//           { label: 'Nigeria', value: '234', icon: () => <Icon name="flag" size={18} color="#000" /> },
//           { label: "Python", value: "Python" },
//           { label: "Java", value: "Java" },
//           { label: "C++", value: "C++" },
//           { label: "C", value: "C" },
//         ]}
//         placeholder="Select a country..."
//         containerStyle={{ height: 40 }}
//         style={{ backgroundColor: '#fafafa' }}
//         dropDownStyle={{ backgroundColor: '#fafafa' }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
