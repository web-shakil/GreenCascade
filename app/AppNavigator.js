import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import PlantsDetailScreen from "./screens/PlantsDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Plant-Hibicus" component={MenuScreen} />
      <Stack.Screen name="Plant Detail" component={PlantsDetailScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
