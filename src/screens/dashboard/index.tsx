import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "@src/components/text";
import TextButton from "@src/components/button";

const Dashboard = () => {
  return (
    <View>
      <AppText>
        Congratulations, you’re all set to adhere to your regimen or connect
        with patients! Enjoy Health_Sync
      </AppText>
      <TextButton text="Continue as patient" style="solid-dark" />
      <TextButton text="Doctor" />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
