import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import AppText from "@src/components/text";
import useDashboard from "./hooks/useDashboard";
import TextButton from "@src/components/button";

const MEDICATIONS = ["Ibubrofen", "Sirdalud", "Paracetamol"];

const Dashboard = () => {
  const { userInfo } = useDashboard();

  return (
    <SafeAreaView
      style={{
        marginBottom: 15,
        paddingTop: (StatusBar.currentHeight || 0) + 20,
      }}
    >
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "70%" }}>
            <AppText family="bold" size={23} color="dark">
              Welcome back {userInfo?.fullname}
            </AppText>
            <AppText size={14}>Don't forget to take that dose today!</AppText>
          </View>
          <Image source={require("@src/assets/images/user.png")} />
        </View>
        <ImageBackground
          source={require("@src/assets/images/doctor.png")}
          resizeMode="cover"
          borderRadius={8}
          style={{
            marginHorizontal: 24,
            paddingVertical: 14,
            paddingHorizontal: 20,
            marginTop: 30,
            gap: 5,
          }}
        >
          <AppText size={15} color="blue">
            3 minutes read
          </AppText>
          <AppText size={20} color="white">
            Join our daily readers on why adhering to a dose is vital
          </AppText>
          <View style={{ marginTop: 10 }} />
          <View style={{ flexDirection: "row" }}>
            <TextButton text="Join now" style="solid-dark" />
            <View style={{ width: "35%" }} />
          </View>
        </ImageBackground>
        <View style={{ gap: 20, marginVertical: 25 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <AppText family="bold" size={18} color="dark">
              Completed Medications
            </AppText>
          </View>
          <FlatList
            data={MEDICATIONS}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 24 }}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#F4F9F4",
                  paddingVertical: 20,
                  paddingHorizontal: 24,
                  borderRadius: 8,
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#94F3E4",
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "black",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    elevation: 8,
                    marginBottom: 24,
                  }}
                >
                  <AppText size={10} color="dark">
                    100%
                  </AppText>
                </View>
                <AppText family="bold" color="dark">
                  {item}
                </AppText>
                <AppText color="dark">7 of 7 days comepleted</AppText>
              </View>
            )}
          />
        </View>
        <View style={{ gap: 20, paddingHorizontal: 24 }}>
          <AppText family="bold" size={18} color="dark">
            Quick actions
          </AppText>
          <TextButton text="Medication reminder" style="outline" />
          <TextButton text="My appointment (s)" style="outline" />
          <TextButton text="Check analytics" style="outline" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
