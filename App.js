import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

//stack navigation imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens and compoents imports
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import TaskDescription from "./src/screens/TaskDescription";
import MyProfileScreen from "./src/screens/MyProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";

//Expo Vector Icons
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

//firebase auth
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

const Stack = createNativeStackNavigator();

export default function App() {
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("Loggedin user status ", user);
      setCurrUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currUser ? (
          <>
            {/* Dashboard */}
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: "Dashboard", headerShown: false }}
            />

            {/* Description */}
            <Stack.Screen
              name="Description"
              component={TaskDescription}
              options={{ title: "Description" }}
            />

            {/* My Profile Screen */}
            <Stack.Screen
              name="MyProfile"
              component={MyProfileScreen}
              options={({ navigation }) => ({
                title: "My Profile",
                headerTransparent: true,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("EditProfileScreen");
                    }}
                    style={{ marginRight: 10 }}
                  >
                    <Feather name="edit" size={24} color="black" />
                  </TouchableOpacity>
                ),
              })}
            />

            {/* Edit Profile Screen*/}
            <Stack.Screen
              name="EditProfileScreen"
              component={EditProfileScreen}
              options={{ title: "Edit Profile", headerTransparent: true }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                title: "HOME/LOGIN",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />

            {/* Login */}
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerTransparent: true,
                headerShown: false,
                title: "Login",
              }}
            />

            {/* ForgotPassword */}
            <Stack.Screen
              name="Forgot"
              component={ForgotPasswordScreen}
              options={{
                headerTransparent: true,
                title: "Forgot Password",
              }}
            />

            {/* Sign up */}
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: "Sign Up" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
