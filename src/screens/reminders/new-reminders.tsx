import {
  SafeAreaView,
  StyleSheet,
  StatusBar as StatusBarConstants,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import ReminderHeader from "./components/header";
import { RemindersNavigationProps } from "@src/navigators/types";
import TextButton from "@src/components/button";
import CustomInput from "@src/components/input";
import useNewReminder from "./hooks/useNewReminder";
import { COLORS } from "@src/constants";

const NewReminders = ({
  navigation,
}: RemindersNavigationProps<"NewReminders">) => {
  const { handleChangeInput, handleSaveReminder, inputs, isLoading } =
    useNewReminder();

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
      <ScrollView style={{ flex: 1, paddingHorizontal: 24 }}>
        <View style={{ gap: 50 }}>
          <View style={{ gap: 10 }}>
            <CustomInput
              placeholder="Enter name of drug"
              value={inputs.drugName}
              onChangeText={(value) => handleChangeInput("drugName", value)}
            />
            <CustomInput
              placeholder="Enter drug type"
              value={inputs.drugType}
              onChangeText={(value) => handleChangeInput("drugType", value)}
            />
            <CustomInput
              placeholder="Enter dosage"
              value={inputs.dosage}
              onChangeText={(value) => handleChangeInput("dosage", value)}
            />
            <CustomInput
              placeholder="Enter reminder frequency"
              value={inputs.frequency}
              onChangeText={(value) => handleChangeInput("frequency", value)}
            />
            <CustomInput
              placeholder="Enter time for daily reminder"
              value={inputs.time}
              onChangeText={(value) => handleChangeInput("time", value)}
            />
            <CustomInput
              placeholder="Add note"
              value={inputs.note}
              onChangeText={(value) => handleChangeInput("note", value)}
            />
          </View>
          <TextButton
            text="Save reminder"
            style="solid-blue"
            onPress={handleSaveReminder}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewReminders;

const styles = StyleSheet.create({});
