import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useColorScheme } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider, MD3LightTheme, configureFonts } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";
type Child = {
  children: React.ReactNode;
};
const fontConfig = {
  fontFamily: "Inter_500Medium",
};
const Providers = ({ children }: Child) => {
  const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: darkTheme.colors,
  };
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider theme={theme}>
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Providers;
