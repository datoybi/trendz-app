import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import KeywordScreen from "screens/KeywordScreen";
import EntertainmentScreen from "screens/EntertainmentScreen";
import SocialScreen from "screens/SocialScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    pretendard: require("./assets/fonts/Pretendard-Regular.ttf"),
    "pretendard-bold": require("./assets/fonts/Pretendard-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="키워드"
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
  );
}

// const styles = StyleSheet.create({});
