import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import AppText from "@src/components/text";
import useDashboard from "./hooks/useDashboard";

const Dashboard = () => {
  const { userInfo } = useDashboard();

  return (
    <SafeAreaView
      style={{ paddingTop: StatusBar.currentHeight, paddingHorizontal: 24 }}
    >
      <AppText family="bold" size={25}>
        Welcome back {userInfo?.fullname}
      </AppText>
      <AppText>Don’t forget to take that dose today!</AppText>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
