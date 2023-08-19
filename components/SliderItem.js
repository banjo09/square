import * as React from "react";
import { Dimensions, StyleSheet, Image, View, Text, ImageBackground } from "react-native";
// import { LottieAnimation } from "../../components";
import { colors, fonts } from "../utils";
import Logo_white from "../assets/img/logo_white.png";
import Logo from "../assets/img/logo.png";
import { CustomText } from "./CustomText";

const imageLocation = [
  require("../assets/img/onboarding/phone.png"),
  require("../assets/img/onboarding/girl.png"),
  require("../assets/img/onboarding/couple.png"),
]
const { width, height } = Dimensions.get("screen");

export function SliderItem({ title, description, banner, id }) {
  // console.log('banner', banner)
  console.log('id', id)
  return (
    <View style={styles.container}>
      <ImageBackground
        // source={require("../assets/img/onboarding/girl.svg")}
        // source={Logo}
        // source={banner}
        // source={require(`../assets/img/onboarding/${banner}`)}
        // source={require(`${banner}`)}
        source={imageLocation[id - 1]}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View>
            <Image
              // source={require('../assets/img/logo.svg')}
              source={id % 2 === 0 ? Logo : Logo_white}
              style={styles.avatarStyle}
            />
          </View>
          <View style={styles.overlay}>
            <CustomText style={styles.overlayText}>
              Your Overlay Text
            </CustomText>
            <CustomText style={styles.title}>{title}</CustomText>
            <CustomText style={styles.description}>{description}</CustomText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'pink'
  },
  title: {
    fontSize: fonts.text.xxl,
    fontFamily: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: fonts.text.md,
    fontFamily: "medium",
    lineHeight: 27,
    textAlign: "center",
    color: "#fff",
    // color: 'red'
  },
  bodyWrapper: {
    width: "85%",
    alignSelf: "center",
    marginTop: 40,
  },
  eventImageStyle: {
    width: 110,
    height: 110,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between'
  },
  backgroundImage: {
    width: width,
    height: height - 90,
    resizeMode: 'cover',
    // justifyContent: 'space-between'
    // position: 'absolute',
  },
  overlay: {
    // ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    // justifyContent: 'flex-end',
    // alignSelf: 'flex-end',
    // alignItems: 'flex-end',
    // marginTop: 50,
    padding: 20,
  },
  overlayText: {
    // color: 'white',
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  avatarStyle: {
    marginTop: 50,
    marginLeft: 25
  }
});


    // <View style={styles.container}>

    //   <View style={styles.logoWrapper}>
    //     <Image
    //       // source={require("../../../assets/main/png/event.jpg")}
    //       source={Logo_white}
    //       style={styles.eventImageStyle}
    //     />
    //   </View>

    //   <View
    //     style={styles.overlay}
    //   // style={styles.bodyWrapper}
    //   >
    //     <CustomText style={styles.title}>{title}</CustomText>
    //     <CustomText style={styles.description}>{description}</CustomText>
    //   </View>