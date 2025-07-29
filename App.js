import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import PredictionScreen from "./screens/PredictionScreen";
import ResultScreen from "./screens/ResultScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="Beranda" component={HomeScreen} />
        <Tab.Screen name="Prediksi" component={PredictionScreen} />
        <Tab.Screen name="Hasil" component={ResultScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
