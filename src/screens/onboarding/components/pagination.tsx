import React from "react";
import {
  View,
  Animated,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import TextButton from "@src/components/button";
import { SLIDES } from "../constants";
import { COLORS } from "@src/constants";
import { Ionicons } from "@expo/vector-icons";

const Pagination = ({
  currentIndex,
  handleNextSlide,
  handleSkipSlide,
  scrollX,
  navigation,
}: any) => {
  const { width } = useWindowDimensions();

  const Indicator = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {SLIDES.map((_, i) => {
        const backgroundColor = scrollX.interpolate({
          inputRange: [(i - 1) * width, i * width, (i + 1) * width],
          outputRange: ["#D9D9D9", COLORS.blue, "#D9D9D9"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={[styles.indicator, { backgroundColor }]}
          />
        );
      })}
    </View>
  );

  return (
    <View
      style={{
        marginBottom: 40,
        paddingHorizontal: 24,
        paddingTop: 5,
        flexDirection: "row",
      }}
    >
      {currentIndex === SLIDES.length - 1 ? (
        <View style={{ gap: 10, flex: 1 }}>
          <Indicator />
          <TextButton
            text="Sign Up"
            style="solid-blue"
            onPress={() =>
              navigation.navigate("AuthStack", { screen: "Signup" })
            }
          />
          <TextButton
            text="Log In"
            onPress={() =>
              navigation.navigate("AuthStack", { screen: "Login" })
            }
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={handleSkipSlide}>
            <Text style={{ color: COLORS.blue, fontWeight: "700" }}>Skip</Text>
          </TouchableOpacity>
          <Indicator />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.blue,
              width: 35,
              height: 35,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleNextSlide}
          >
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    marginHorizontal: 3,
    borderRadius: 5,
    width: 7,
    height: 7,
  },
});

export default Pagination;
