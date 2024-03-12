import React from "react";
import { LogIn, HomePage } from "./component";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} initialRouteName="logIn">
        <Stack.Screen name="logIn" component={LogIn}></Stack.Screen>
        <Stack.Screen name="homepage" component={HomePage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };