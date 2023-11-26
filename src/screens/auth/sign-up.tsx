import {
  View,
  StatusBar as StatusBarConstants,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import AppText from "@src/components/text";
import CustomInput from "@src/components/input";
import TextButton from "@src/components/button";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS, FONT_FAMILY } from "@src/constants";
import { AuthNavigationProps } from "@src/navigators/types";
import AppleLogo from "@src/assets/images/apple";
import GoogleLogo from "@src/assets/images/google";
import { StatusBar } from "expo-status-bar";
import AuthHeader from "./components/header";

const SignUp = ({ navigation }: AuthNavigationProps<"Signup">) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBarConstants.currentHeight,
      }}
    >
      <StatusBar style="dark" />
      <AuthHeader
        canGoBack={navigation.canGoBack()}
        goBack={navigation.goBack}
      />
      <ScrollView style={{ paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 20 }}>
          <AppText family="bold" size={25}>
            Create account
          </AppText>
          <AppText>
            Please fill the details below to set up your account.
          </AppText>
        </View>
        <View style={{ gap: 14 }}>
          <CustomInput label="Full name" />
          <CustomInput label="Email address" />
          <CustomInput label="Password" />
          <View style={{ marginBottom: 10 }}>
            <BouncyCheckbox
              size={25}
              fillColor={COLORS.blue}
              unfillColor="#ebebeb"
              text="I agree to the Terms & conditions and Privacy Policy"
              iconStyle={{ borderRadius: 2 }}
              innerIconStyle={{ borderWidth: 0 }}
              textStyle={{
                fontFamily: FONT_FAMILY.medium,
                textDecorationLine: "none",
                fontSize: 13,
                color: COLORS.dark,
              }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <TextButton text="Create account" style="solid-blue" />
          <View style={{ alignItems: "center" }}>
            <AppText>Or</AppText>
          </View>

          <TouchableOpacity style={styles.button}>
            <GoogleLogo />
            <AppText>Sign In with Google</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AppleLogo />
            <AppText>Sign up with Apple</AppText>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 100,
            }}
          >
            <AppText>Already have an account? </AppText>
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{ color: COLORS.blue, fontFamily: FONT_FAMILY.bold }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: "100%",
    flexShrink: 1,
    gap: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.dark,
  },
});

export default SignUp;
