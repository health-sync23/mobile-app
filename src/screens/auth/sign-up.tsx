import {
  View,
  StatusBar as StatusBarConstants,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
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
import useSignup from "./hooks/useSignup";

const SignUp = ({ navigation }: AuthNavigationProps<"Signup">) => {
  const { isLoading, inputs, handleCreateAccount, handleChangeInput } =
    useSignup();

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBarConstants.currentHeight,
      }}
    >
      <StatusBar style="dark" />
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={COLORS.blue}
          size="large"
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "rgba(0, 0, 0, 0.15)", zIndex: 100 },
          ]}
        />
      )}
      <AuthHeader
        canGoBack={navigation.canGoBack()}
        goBack={navigation.goBack}
      />
      <ScrollView style={{ paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 20 }}>
          <AppText family="bold" size={25} color="dark">
            Create account
          </AppText>
          <AppText>
            Please fill the details below to set up your account.
          </AppText>
        </View>
        <View style={{ gap: 14 }}>
          <CustomInput
            label="Full name"
            value={inputs.fullname}
            onChangeText={(value) => handleChangeInput("fullname", value)}
          />
          <CustomInput
            label="Email address"
            value={inputs.email}
            onChangeText={(value) => handleChangeInput("email", value)}
          />
          <CustomInput
            label="Password"
            value={inputs.password}
            onChangeText={(value) => handleChangeInput("password", value)}
          />
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
          <TextButton
            text="Create account"
            style="solid-blue"
            onPress={handleCreateAccount}
          />
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
