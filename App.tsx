import RootStack from "@src/navigators";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useCachedResources from "@src/hooks/useCachedResources";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded } = useCachedResources();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <RootStack />
    </View>
  );
}
