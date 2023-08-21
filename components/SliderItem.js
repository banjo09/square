import * as React from "react";
import { Dimensions, StyleSheet, Image, View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, fonts, spacing } from "../utils";
// import Logo_white from "../assets/img/logo_white.png";
// import Logo from "../assets/img/logo.png";
import { CustomText } from "./UI/CustomText";
import { Logo, Logo_white } from "../assets/img/onboarding";
import { gradient } from "../utils/gradient";

const imageLocation = [
  require("../assets/img/onboarding/phone.png"),
  require("../assets/img/onboarding/girl.png"),
  require("../assets/img/onboarding/couple.png"),
]
const { width, height } = Dimensions.get("screen");

export function SliderItem({ title, description, banner, id }) {
  // console.log('banner', banner)
  // console.log('id', id)
  return (
    <View style={styles.container}>
      {banner}
      <View 
      style={{
        ...styles.content,
        // marginLeft: id === 1 ? 0 : id === 1 ? 2 : 2
      }}
      >
        <LinearGradient
          colors={gradient.colors}
          start={gradient.start}
          end={gradient.end}
        // style={{ borderRadius: 8 }}
        >
          <View style={styles.avatarStyle}>
            {id % 2 === 0 ? <Logo /> : <Logo_white />}
          </View>
          <View style={styles.overlay}>
            <View style={styles.paginatorWrapper}>
              {[1, 2, 3].map((item, index) => (
                <View
                  style={[
                    styles.indicatorWrapper,
                    { borderColor: (id - 1) === index ? '#fff' : "rgba(217, 217, 217, 0.5)" },
                  ]}
                  key={index}
                />
              ))}
            </View>
            <CustomText style={styles.title}>{title}</CustomText>
            <CustomText style={styles.description}>{description}</CustomText>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: fonts.text.lg,
    fontFamily: "bold",
    marginBottom: 17,
    // textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: fonts.text.sm,
    fontFamily: "regular",
    lineHeight: 27,
    // textAlign: "center",
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
    // height: '50%',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    // paddingLeft: 25
    // backgroundColor: 'pink'
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
    marginTop: '75%',
    paddingVertical: 80,
    paddingLeft: 25
  },
  overlayText: {
    // color: 'white',
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  avatarStyle: {
    marginTop: 50,
    paddingLeft: 25
    // marginLeft: 25
  },

  indicatorWrapper: {
    borderWidth: 2,
    width: width / 12,
    marginRight: spacing.margin.sm,
    borderRadius: 10,
  },
  paginatorWrapper: {
    flexDirection: "row",
    // height: 64,
    height: 84,
    // justifyContent: "center",
    alignItems: "center",
  },
});
