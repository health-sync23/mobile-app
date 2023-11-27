import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  StatusBar as StatusBarConstants,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import ReminderHeader from "./components/header";
import { RemindersNavigationProps } from "@src/navigators/types";
import AppText from "@src/components/text";
import TextButton from "@src/components/button";
import useMyReminders from "./hooks/useMyReminders";
import { COLORS } from "@src/constants";

const MyReminders = ({
  navigation,
  route,
}: RemindersNavigationProps<"MyReminders">) => {
  const { data, isLoading } = useMyReminders(route.params?.refetch);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBarConstants.currentHeight,
      }}
    >
      <ReminderHeader
        canGoBack={navigation.canGoBack()}
        goBack={navigation.goBack}
        title="My reminders"
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        <View style={{ gap: 50 }}>
          {data.length ? (
            <View style={{ gap: 20 }}>
              {data.map((item, idx) => (
                <View
                  key={idx}
                  style={{
                    backgroundColor: COLORS.blue,
                    borderRadius: 8,
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      borderColor: "#F4F9F4",
                      paddingHorizontal: 24,
                      justifyContent: "center",
                    }}
                  >
                    <AppText color="white" family="bold">
                      Tablet
                    </AppText>
                  </View>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      borderColor: "#F4F9F4",
                    }}
                  >
                    <View
                      style={{
                        borderBottomWidth: 0.5,
                        borderColor: "#F4F9F4",
                        paddingHorizontal: 24,
                        paddingVertical: 10,
                      }}
                    >
                      <AppText color="white">
                        <AppText size={16} family="bold" color="white">
                          /{item.drugName}
                        </AppText>
                        {item?.dosage}
                      </AppText>
                    </View>
                    <View
                      style={{
                        borderBottomWidth: 0.5,
                        paddingVertical: 10,
                        borderColor: "#F4F9F4",
                        paddingHorizontal: 24,
                      }}
                    >
                      <AppText size={16} family="bold" color="white">
                        {item.frequency}
                      </AppText>
                      <AppText color="white">{item?.time}</AppText>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingLeft: 20,
                    }}
                  >
                    <AppText color="white" size={30}>
                      ...
                    </AppText>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <>
              <AppText>
                You currently do not have any reminders. Add reminders with the
                "button" below
              </AppText>
              <Image
                source={require("@src/assets/images/reminders-placeholder.png")}
                style={{ width: "100%" }}
              />
            </>
          )}
          {isLoading && (
            <ActivityIndicator
              animating={isLoading}
              color={COLORS.blue}
              size="large"
            />
          )}
          <TextButton
            text="Add reminder"
            style="solid-blue"
            onPress={() => navigation.navigate("NewReminders")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyReminders;
