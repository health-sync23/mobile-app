import { TextInput, View } from "react-native";
import React from "react";
import AppText from "./text";

const CustomInput = ({
  label,
  value,
  onChangeText,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
}) => {
  return (
    <View style={{ gap: 6 }}>
      <AppText>{label}</AppText>
      <TextInput
        style={{
          backgroundColor: "#F4F9F4",
          paddingHorizontal: 16,
          height: 50,
          borderRadius: 8,
        }}
        secureTextEntry={label === "Password"}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;
