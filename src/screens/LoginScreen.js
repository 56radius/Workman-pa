import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../backend/firebase.config";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(authConfig, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logging user ", user.uid);
        // Show success alert
        Alert.alert("Success", "Login successful!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Logging err ", error);
        // Show error alert
        Alert.alert("Error", errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text> Workman-pa </Text>
      </View>

      {/* Form */}
      <View
        style={{
          padding: 20,
          width: "70%",
          justifyContent: "center",
        }}
      >
        {/* Email */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </View>

        {/* password */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <TextInput
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="password"
          />
        </View>

        {/* Forgot password */}
        <View style={{ padding: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={{ color: "blue" }}> Forgot password? </Text>
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              borderWidth: 2,
              width: "60%",
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 10,
              backgroundColor: "gray",
              borderColor: "gray",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}> LOGIN </Text>
          </TouchableOpacity>
        </View>

        {/* OR text */}
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> Or </Text>
        </View>

        {/* Sign Up button */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{
              borderWidth: 3,
              width: "60%",
              alignItems: "center",
              paddingVertical: 8,
              borderRadius: 10,
              borderColor: "#fff",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "bold" }}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
