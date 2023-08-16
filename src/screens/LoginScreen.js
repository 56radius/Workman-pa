import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function LoginScreen({ navigation }) {
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
          <TextInput placeholder="Email" />
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
          <TextInput placeholder="password" />
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
            onPress={() => navigation.navigate("Dashboard")}
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
