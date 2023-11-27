import { Text } from "react-native";
import React, { PropsWithChildren } from "react";
import { COLORS, FONT_FAMILY } from "@src/constants";

interface IAppText extends PropsWithChildren {
  family?: keyof typeof FONT_FAMILY;
  size?: number;
  color?: keyof typeof COLORS;
}

const AppText: React.FC<IAppText> = ({
  children,
  size: fontSize,
  family = "medium",
  color,
}) => {
  return (
    <Text
      style={{
        fontFamily: FONT_FAMILY[family],
        fontSize,
        color: COLORS[color as keyof typeof COLORS] || "#6B7078",
      }}
    >
      {children}
    </Text>
  );
};

export default AppText;
