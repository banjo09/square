import  * as React from "react";
import { useEffect, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  LoginScreen,
  OnboardingScreen,
  SignUpScreen,
  SuccessScreen,
  VerificationScreen,
  KeypadScreen,
  HomeScreen,
  MainTabNavigator,
  SecurityPinScreen,
  ConfirmPinScreen,
  SuccessPinScreen,
  // SplashScreen,
  // WelcomeBackScreen,
} from "./screens";

// import { BottomTabNavigator } from "./BottomTab";

const RootStack = createNativeStackNavigator();

export const RootStackNavigation = ({ initialRouteName }) => {
console.log('initialRouteName', initialRouteName)
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          animation: "default",
        }}
      >
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="VerificationScreen" component={VerificationScreen} />
        <RootStack.Screen name="SuccessScreen" component={SuccessScreen} />

        <RootStack.Screen name="KeypadScreen" component={KeypadScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        <RootStack.Screen name="SecurityPinScreen" component={SecurityPinScreen} />
        <RootStack.Screen name="ConfirmPinScreen" component={ConfirmPinScreen} />
        <RootStack.Screen name="SuccessPinScreen" component={SuccessPinScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
