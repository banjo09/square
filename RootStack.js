import  * as React from "react";
import { useEffect, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  // LoginScreen,
  OnboardingScreen,
  // OnboardingSuccessfulScreen,
  // SplashScreen,
  // WelcomeBackScreen,
} from "./screens";

// import { BottomTabNavigator } from "./BottomTab";

const RootStack = createNativeStackNavigator();

export const RootStackNavigation = ({ initialRouteName }) => {

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          animation: "default",
        }}
      >
        {/* <RootStack.Screen name="LoginScreen" component={LoginScreen} /> */}

        <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        {/* <RootStack.Screen name="WelcomeBackScreen" component={WelcomeBackScreen} />
        <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <RootStack.Screen name="Dashboard" component={BottomTabNavigator} /> */}

        {/* <RootStack.Screen name="SignupScreen" component={SignupScreen} />
        <RootStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <RootStack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <RootStack.Screen name="OtpScreen" component={OtpScreen} />
        <RootStack.Screen name="EmailOtpScreen" component={EmailOtpScreen} />
        <RootStack.Screen name="PINScreen" component={PINScreen} /> */}

        {/* <RootStack.Screen
          name="OnboardingSuccessfulScreen"
          component={OnboardingSuccessfulScreen}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
