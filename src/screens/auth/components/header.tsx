import { View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "@src/constants";
import { Ionicons } from "@expo/vector-icons";
import HealthSync from "@src/assets/images/health-sync";

const AuthHeader = ({
  canGoBack,
  goBack,
}: {
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
      <HealthSync />
      <View />
      <View />
    </View>
  );
};

export default AuthHeader;
