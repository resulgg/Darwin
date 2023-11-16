import { Tabs } from "expo-router";
import { Text, useTheme } from "react-native-paper";

export default function TabLayout() {
  const color = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "gray",
        tabBarInactiveBackgroundColor: color.colors.background,
        tabBarActiveBackgroundColor: color.colors.background,
        headerTintColor: "black",
        headerStyle: { backgroundColor: color.colors.background },
        headerTitleStyle: { color: color.colors.onSurface, fontFamily: "Inter_600SemiBold" },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: () => <Text>SA</Text>,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
        }}
      />
    </Tabs>
  );
}
