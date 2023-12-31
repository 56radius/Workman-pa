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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../backend/firebase.config";

export default function SignUpScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Registering ", email, password);
    createUserWithEmailAndPassword(authConfig, email, password)
      .then((result) => {
        console.log("user created", result.user);
        Alert.alert("Success", "Sign up successful!");
      })
      .catch((err) => {
        console.log("Error ", err.message);
        Alert.alert("Failure", "password should be long");
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
          width: "90%",
          justifyContent: "center",
        }}
      >
        {/* Name */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
            paddingVertical: 15,
          }}
        >
          <TextInput placeholder="Full Name" />
        </View>

        {/* Email */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
            paddingVertical: 15,
          }}
        >
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </View>

        {/* Gender */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
            paddingVertical: 15,
          }}
        >
          <TextInput placeholder="Gender" />
        </View>

        {/* Phone Number */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <TextInput placeholder="Phone no" />
        </View>

        {/* password */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
            paddingVertical: 15,
          }}
        >
          <TextInput
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholder="password"
          />
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
            onPress={handleSubmit}
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
            <Text style={{ color: "#fff", fontWeight: "bold" }}> SUBMIT </Text>
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
