import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, useTheme, Text } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const color = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.colors.background }}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>d</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          mode="contained"
          icon={({ color, size }) => <FontAwesome5 name="apple" size={24} color={color} />}
          labelStyle={styles.authBtn}
          style={styles.btnWidth}
          contentStyle={styles.btnContent}>
          Continue with Apple
        </Button>
        <Button
          mode="contained"
          icon={({ color, size }) => <FontAwesome5 name="google" size={24} color={color} />}
          labelStyle={styles.authBtn}
          style={styles.btnWidth}
          contentStyle={styles.btnContent}>
          Continue with Google
        </Button>
        <Button
          mode="contained"
          icon={({ color, size }) => <FontAwesome name="envelope" size={24} color={color} />}
          labelStyle={styles.authBtn}
          style={styles.btnWidth}
          contentStyle={styles.btnContent}>
          Sign up with email
        </Button>
        <Button
          mode="outlined"
          labelStyle={styles.authBtn}
          style={styles.btnWidth}
          contentStyle={styles.btnContent}>
          Log in
        </Button>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            By signing up, you are creating Darwin account and agree to Darwin’s Terms and Privacy
            Policy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: RFValue(253, 852),
    fontFamily: "Inter_800ExtraBold",
    textDecorationLine: "underline",
  },
  bottomContainer: {
    flex: 5,
    display: "flex",
    alignItems: "center",
    gap: 18,
    marginTop: 60,
  },
  authBtn: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(18, 852),
  },
  btnContent: {
    height: 50,
  },
  btnWidth: {
    width: "70%",
  },
  infoContainer: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  infoText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: RFValue(12, 852),
    textAlign: "center",
  },
});
