import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

//stack navigation imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens and compoents imports
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen navigation */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Forgot Password Screen navigation */}
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{}}
        />

        {/* Login Screen navigation */}
        <Stack.Screen name="Login" component={LoginScreen} options={{}} />

        {/* Sign up screen navigation */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Forgot Password" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
