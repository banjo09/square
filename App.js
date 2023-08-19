// import "react-native-gesture-handler";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
// import { RootSiblingParent } from "react-native-root-siblings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomText } from "./components/CustomText";
import { RootStackNavigation } from "./RootStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // AsyncStorage.removeItem("alreadyLauched");
    AsyncStorage.getItem("alreadyLauched").then((value) => {
      if (!value) {
        AsyncStorage.setItem("alreadyLauched", "true");
        setIsFirstLaunch(true);
        // console.log(value);
      } else {
        setIsFirstLaunch(false);
        // console.log(value);
      }
    });
  }, []);

  const [fontsLoaded] = useFonts({
    "bold": require("./assets/fonts/bold.ttf"),
    "regular": require("./assets/fonts/regular.ttf"),
    "medium": require("./assets/fonts/medium.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // my id
  // cd7b1722-e3bd-44f4-956d-2f72e557f465

  // greenkouse id
  // 001ace69-6eb3-476d-b1a7-cea2e4c672f0


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <RootStackNavigation
        initialRouteName={
          isFirstLaunch
            ? "OnboardingScreen"
            : isExpired
              ? "LoginScreen"
              : isLoggedIn
                ? "Dashboard"
                : "WelcomeBackScreen"
        }
      />
      {/* <CustomText>Open up App.js to start working on your app!</CustomText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 70
  },
});
