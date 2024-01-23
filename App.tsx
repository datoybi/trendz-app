import { useCallback } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

import KeywordScreen from "@/screens/KeywordScreen";
import EntertainmentScreen from "@/screens/EntertainmentScreen";
import SocialScreen from "@/screens/SocialScreen";
import YoutubeScreen from "@/screens/YoutubeScreen";

const BottomTab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    pretendard: require("./assets/fonts/Pretendard-Regular.ttf"),
    "pretendard-bold": require("./assets/fonts/Pretendard-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen
              name="키워드"
              component={KeywordScreen}
              options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="apps" color={color} size={size} />,
              }}
            />
            <BottomTab.Screen
              name="유튜브"
              component={YoutubeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="caret-forward-circle-outline" color={color} size={size} />
                ),
              }}
            />
            <BottomTab.Screen
              name="Social2"
              component={SocialScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="people" color={color} size={size} />
                ),
              }}
            />
            <BottomTab.Screen
              name="Social"
              component={SocialScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="people" color={color} size={size} />
                ),
              }}
            />
            <BottomTab.Screen
              name="Entertainment"
              component={EntertainmentScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="musical-notes" color={color} size={size} />
                ),
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    fontFamily: "pretendard",
  },
});
