import { Text } from "react-native";
import React, { PropsWithChildren } from "react";
import { FONT_FAMILY } from "@src/constants";

interface IAppText extends PropsWithChildren {
  family?: keyof typeof FONT_FAMILY;
  size?: number;
}

const AppText: React.FC<IAppText> = ({
  children,
  size: fontSize,
  family = "medium",
}) => {
  return (
    <Text style={{ fontFamily: FONT_FAMILY[family], fontSize }}>
      {children}
    </Text>
  );
};

export default AppText;
