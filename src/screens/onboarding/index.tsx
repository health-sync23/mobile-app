import React from "react";
import {
  useWindowDimensions,
  SafeAreaView,
  FlatList,
  Animated,
  StatusBar as StatusBarConstants,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Slide from "./components/slide";
import { SLIDES } from "./constants";
import Pagination from "./components/pagination";
import { RootNavigationProps } from "@src/navigators/types";
import HealthSync from "@src/assets/images/health-sync";

const Onboarding = ({ navigation }: RootNavigationProps<"Onboarding">) => {
  const { width } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slideRef = React.useRef<any>(null);

  const handleUpdateIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.round(contentOffsetX / width));
  };

  const handleNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    if (nextSlideIndex !== SLIDES.length) {
      const offset = nextSlideIndex * width;
      slideRef?.current?.scrollToOffset({ offset });
      setCurrentIndex(nextSlideIndex);
    }
  };

  const handleSkipSlide = () => {
    const lastSlideIndex = SLIDES.length - 1;
    const offset = lastSlideIndex * width;
    slideRef?.current?.scrollToOffset({ offset });
    setCurrentIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBarConstants.currentHeight,
      }}
    >
      <StatusBar style="dark" />
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <HealthSync />
      </View>
      <FlatList
        ref={slideRef}
        onMomentumScrollEnd={handleUpdateIndex}
        data={SLIDES}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      />
      <Pagination
        scrollX={scrollX}
        navigation={navigation}
        currentIndex={currentIndex}
        handleNextSlide={handleNextSlide}
        handleSkipSlide={handleSkipSlide}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
