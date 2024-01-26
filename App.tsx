import { useCallback } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
// 패드는 웹뷰로 가능???????????
import KeywordScreen from "@/screens/KeywordScreen";
import EntertainmentScreen from "@/screens/EntertainmentScreen";
import MovieScreen from "@/screens/MovieScreen";
import YoutubeScreen from "@/screens/YoutubeScreen";
import OTTScreen from "@/screens/OTTScreen";

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
                  <Ionicons name="logo-youtube" color={color} size={size} />
                ),
              }}
            />
            {/* <BottomTab.Screen
              name="메인"
              component={EntertainmentScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="earth-outline" color={color} size={size} />
                ),
              }}
            /> */}
            <BottomTab.Screen
              name="OTT"
              component={OTTScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="caret-forward-circle-outline" color={color} size={size} />
                ),
              }}
            />
            <BottomTab.Screen
              name="영화"
              component={MovieScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="film-outline" color={color} size={size} />
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
