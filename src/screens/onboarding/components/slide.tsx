import { FONT_FAMILY } from "@src/constants";
import React from "react";
import { View, Image, useWindowDimensions, Text } from "react-native";

const Slide = ({ item }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width, flex: 0.8 }}>
      <Image
        source={item.image}
        style={{
          // height: 50,
          width,
          resizeMode: "cover",
        }}
      />
      <View style={{ width, paddingHorizontal: 15 }}>
        <Text
          style={{
            marginTop: 25,
            textAlign: "center",
            fontFamily: FONT_FAMILY.bold,
            fontSize: 25,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            fontFamily: FONT_FAMILY.medium,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
