import { StyleSheet, Text } from "react-native";
import React, { PropsWithChildren } from "react";

interface IAppText extends PropsWithChildren {
  family?: string;
}

const AppText: React.FC<IAppText> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({});
