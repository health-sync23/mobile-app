import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import AppText from "@src/components/text";
import useDashboard from "./hooks/useDashboard";
import TextButton from "@src/components/button";

const MEDICATIONS = ["Ibubrofen", "Sirdalud", "Paracetamol"];

const Dashboard = () => {
  const { userInfo } = useDashboard();

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            paddingHorizontal: 24,
          }}
        >
          <AppText family="bold" size={23}>
            Welcome back {userInfo?.fullname}
          </AppText>
          <AppText size={14}>Don't forget to take that dose today!</AppText>
        </View>
        <View style={{ gap: 10, marginVertical: 25 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <AppText family="bold" size={18}>
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
                  <AppText size={10}>100%</AppText>
                </View>
                <AppText family="bold">{item}</AppText>
                <AppText>7 of 7 days comepleted</AppText>
              </View>
            )}
          />
        </View>
        <View style={{ gap: 10, paddingHorizontal: 24 }}>
          <AppText family="bold" size={18}>
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
