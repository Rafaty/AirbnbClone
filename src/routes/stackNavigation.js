
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import TabNavigation from "./tabNavigation"

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions ={{headerShown:false}}>
          <Stack.Screen name="Home" component={TabNavigation} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }