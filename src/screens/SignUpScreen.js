import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function SignUpScreen({ navigation }) {
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

        {/* Name */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <TextInput placeholder="First Name" />
        </View>

        {/* Age */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <TextInput placeholder="Age" />
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

        {/* confirm password */}
        <View
          style={{
            marginBottom: 15,
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 20,
            padding: 10,
          }}
        >
          <TextInput placeholder="Confirm password" />
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
