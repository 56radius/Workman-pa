import * as React from "react";
import { Touchable } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function ForgotPasswordScreen({ navigation }) {
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
        <TextInput placeholder="Your Email Address" />
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
