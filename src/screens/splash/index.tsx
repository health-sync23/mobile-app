import {
  View,
  Text,
  SafeAreaView,
  StatusBar as StatusBarConstants,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import TextButton from "@src/components/button";
import HandPills from "@src/assets/images/hand-pills";
import { FONT_FAMILY } from "@src/constants";
import { RootNavigationProps } from "@src/navigators/types";

const SplashScreen = ({ navigation }: RootNavigationProps<"Splash">) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("@src/assets/images/splash.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <View style={{ gap: 16 }}>
            <HandPills />
            <Text style={{ color: "#fff", fontSize: 36, fontWeight: "700" }}>
              HealthSync
            </Text>
            <Text style={{ color: "#fff", fontSize: 25 }}>
              Aligning wellness, fosterng{" "}
              <Text style={{ fontFamily: FONT_FAMILY.boldItalic }}>
                adherence
              </Text>
            </Text>
          </View>
          <View style={{ gap: 16 }}>
            <TextButton
              text="Continue"
              style="solid-blue"
              onPress={() => navigation.navigate("Onboarding")}
            />
            <TextButton
              text="Log In"
              onPress={() =>
                navigation.navigate("AuthStack", { screen: "Login" })
              }
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingTop: StatusBarConstants.currentHeight,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  content: { flex: 1, justifyContent: "space-between", marginTop: 20 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default SplashScreen;
