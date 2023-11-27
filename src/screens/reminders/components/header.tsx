import { View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@src/constants";
import { Ionicons } from "@expo/vector-icons";
import HealthSync from "@src/assets/images/health-sync";
import AppText from "@src/components/text";

const ReminderHeader = ({
  canGoBack,
  goBack,
  title,
}: {
  title: string;
  canGoBack: boolean;
  goBack: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.blue,
          borderRadius: 30,
          width: 45,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
        onPress={goBack}
      >
        <Ionicons name="ios-arrow-back" size={20} color="#fff" />
      </TouchableOpacity>
      <AppText size={20} color="dark" family="bold">
        {title}
      </AppText>
      <View />
      <View />
    </View>
  );
};

export default ReminderHeader;
