import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";

import colors from '../config/colors'

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri:
          "https://estaticos.megainteresting.com/media/cache/1140x_thumb/uploads/images/gallery/5e8305785cafe8be74460f41/mariposas-slide_0.jpg",
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{ uri: "https://wallpapercave.com/wp/wp2550666.jpg" }}
        />
        <Text>This is the first Native app</Text>
      </View>
      <View style={styles.registerButton}><Text>login</Text></View>
      <View style={styles.loginButton}><Text>register</Text></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    alignItems:"center",
    justifyContent:"center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    alignItems:"center",
    justifyContent:"center"
  },
  logo: {
    width: 100,
    height: 100,
},
logoContainer:{
      position: "absolute",
      top: 70,
      alignItems:"center"

  }
});

export default WelcomeScreen;
