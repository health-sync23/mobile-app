import { useFonts } from "expo-font";

export default () => {
  const [fontsLoaded] = useFonts({
    "WorkSans-Medium": require("@src/assets/fonts/work-sans/WorkSans-Medium.ttf"),
    "WorkSans-MediumItalic": require("@src/assets/fonts/work-sans/WorkSans-MediumItalic.ttf"),
    "WorkSans-Bold": require("@src/assets/fonts/work-sans/WorkSans-Bold.ttf"),
    "WorkSans-BoldItalic": require("@src/assets/fonts/work-sans/WorkSans-BoldItalic.ttf"),
  });

  return { fontsLoaded };
};
