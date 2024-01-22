import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import KeywordScreen from "@/screens/KeywordScreen";
import EntertainmentScreen from "@/screens/EntertainmentScreen";
import SocialScreen from "@/screens/SocialScreen";

const BottomTab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    pretendard: require("./assets/fonts/Pretendard-Regular.ttf"),
    "pretendard-bold": require("./assets/fonts/Pretendard-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="구글 키워드"
            component={KeywordScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="apps" color={color} size={size} />,
            }}
          />
          <BottomTab.Screen
            name="Social"
            component={SocialScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} />,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
