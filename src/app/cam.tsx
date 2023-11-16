import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MainCamera from "../components/Camera";

const Camera = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainCamera />
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </SafeAreaView>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteFill: {
    height: "100%",
    width: "100%",
  },
  indicator: {
    position: "absolute",

    width: 10,
    backgroundColor: "red",
    height: "100%",
  },
});
