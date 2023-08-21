import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Foundation } from '@expo/vector-icons';
import { colors, fonts } from '../utils';
import { HomeScreen } from './HomeScreen';
import { KeypadScreen } from './KeypadScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: "transparent",
          backgroundColor: colors.black,
          elevation: 5,
          marginTop: 0,
          borderTopWidth: 0, // Remove top border line
          shadowOpacity: 5, // Remove iOS shadow
          // height: 70,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.deepGray,
        tabBarLabelStyle: {
          fontFamily: "bold",
          fontSize: fonts.text.xs,
          // paddingBottom: 10,
        },
        animationEnabled: false,
        tabBarPressColor: "transparent",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({ color, size, focused }) => {
            let icon = <MaterialCommunityIcons name="home-lightning-bolt" size={40} color={color} />;
            // if (focused && mode !== 'dark') (icon = <Foundation name="home" size={30} color={colors.primary} />)
            return icon
          },
          tabBarStyle: { 
            backgroundColor: '#fff',
            // backgroundColor: "rgba(0, 198, 251, 0)",
            elevation: 5,
            marginTop: 0,
            borderTopWidth: 0, // Remove top border line
            shadowOpacity: 5, // Remove iOS shadow
            height: 60,
            paddingTop: 8,
           },
           tabBarActiveTintColor: '#333333',
           tabBarInactiveTintColor: '#E0E0E0',
        }}
      />
      <Tab.Screen
        name="KeypadScreen"
        component={KeypadScreen}
        options={{
          title: '',
          tabBarIcon: ({ color, size, focused }) => {
            let icon = <MaterialIcons name="category" size={25} color={color} />;
            return icon
          },
          tabBarStyle: { 
            backgroundColor: '#000A4A',
            // backgroundColor: "rgba(0, 198, 251, 0)",
            elevation: 5,
            marginTop: 0,
            borderTopWidth: 0, // Remove top border line
            shadowOpacity: 5, // Remove iOS shadow
            height: 60,
            paddingTop: 8,
           },
           tabBarActiveTintColor: '#fff',
           tabBarInactiveTintColor: '#9B9B9B',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: '',
          tabBarIcon: ({ color, size, focused }) => {
            let icon = <Ionicons name="person" size={25} color={color} />;
            return icon
          },
          tabBarStyle: { 
            backgroundColor: '#000A4A',
            elevation: 5,
            marginTop: 0,
            borderTopWidth: 0,
            shadowOpacity: 5,
            height: 60,
            paddingTop: 8,
           },
           tabBarActiveTintColor: '#fff',
           tabBarInactiveTintColor: '#9B9B9B',
        }}
      />
    </Tab.Navigator>
  );
};

