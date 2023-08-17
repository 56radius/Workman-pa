import React, { useState } from "react";
import { Touchable } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

//firebase auth
import { sendPasswordResetEmail } from "firebase/auth";
import { authConfig } from "../backend/firebase.config";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    sendPasswordResetEmail(authConfig, email)
      .then(() => {
        Alert.alert("Success", "link sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Alert.alert("Error", errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        <Text style={{ fontSize: 24 }}>Welcome To Workman {"\n"}</Text>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          You will receive instructions to {"\n"}
          <Text style={{ textAlign: "center" }}> reset your password </Text>
        </Text>
      </View>

      {/* Input */}
      <View
        style={{
          width: "70%",
          marginTop: 80,
          borderWidth: 2,
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Your Email Address"
        />
      </View>

      {/* Submit */}
      <View
        style={{
          marginTop: 30,
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "60%",
            borderWidth: 2,
            alignItems: "center",
            paddingVertical: 10,
            borderRadius: 9,
          }}
        >
          <Text> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
