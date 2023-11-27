import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AppText from "@src/components/text";

const Professionals = () => {
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#dddddd",
            paddingHorizontal: 24,
            paddingBottom: 20,
            marginBottom: 20,
          }}
        >
          <View style={{ width: "70%" }}>
            <AppText family="bold" size={23} color="dark">
              Search
            </AppText>
            <AppText size={14}>
              Find your health professional and book that consultation now!
            </AppText>
          </View>
          <Image source={require("@src/assets/images/user.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            borderWidth: 1,
            borderColor: "#bdbdbd",
            borderRadius: 8,
            padding: 10,
            paddingLeft: 16,
            marginHorizontal: 24,
          }}
        >
          <Ionicons name="search-outline" size={20} color="#8E8E8E" />
          <TextInput
            placeholder="Search professional, nurse, doctor..."
            style={{ fontSize: 16, width: "85%" }}
          />
        </View>

        <View style={{ gap: 20, marginVertical: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 24,
            }}
          >
            <AppText family="bold" size={18} color="dark">
              Top professionals
            </AppText>
            <AppText size={14}>See all</AppText>
          </View>
          <View style={{ paddingHorizontal: 24 }}></View>
        </View>

        <View style={{ gap: 20, marginVertical: 25 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <AppText family="bold" size={18} color="dark">
              Completed Medications
            </AppText>
          </View>
          <FlatList
            data={[]}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Professionals;

const styles = StyleSheet.create({});
