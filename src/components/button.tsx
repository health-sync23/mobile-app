import { COLORS, FONT_FAMILY } from "@src/constants";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type ButtonStyles = "solid-white" | "solid-blue" | "solid-dark" | "outline";

interface ITextButton {
  text: string;
  style?: ButtonStyles;
  onPress?: () => void;
  fullWidth?: boolean;
}

const TextButton: React.FC<ITextButton> = ({
  text,
  style = "solid-white",
  onPress,
}) => {
  const styles = _styles(style);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const BUTTON_CONTAINER_STYLE_MAPPER: Record<ButtonStyles, ViewStyle> = {
  "solid-white": { backgroundColor: COLORS.white, borderColor: COLORS.white },
  "solid-blue": { backgroundColor: COLORS.blue, borderColor: COLORS.blue },
  outline: { backgroundColor: COLORS.white, borderColor: COLORS.dark },
  "solid-dark": { backgroundColor: COLORS.dark, borderColor: COLORS.dark },
};

const TEXT_COLOR_MAPPER: Record<ButtonStyles, string> = {
  "solid-white": COLORS.dark,
  "solid-blue": COLORS.white,
  "solid-dark": COLORS.white,
  outline: COLORS.dark,
};

const _styles = (style: ButtonStyles) =>
  StyleSheet.create({
    container: {
      height: 55,
      width: "100%",
      flexShrink: 1,
      gap: 10,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      ...(style !== "outline"
        ? {
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          }
        : {}),
      ...BUTTON_CONTAINER_STYLE_MAPPER[style],
    },
    text: {
      color: TEXT_COLOR_MAPPER[style],
      fontWeight: "bold",
      fontFamily: FONT_FAMILY.medium,
    },
  });

export default TextButton;
