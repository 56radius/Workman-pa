import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
          }}
          source={require("../.././assets/water.png")}
        />
        <Text style={{ fontWeight: "bold" }}> Workman-pa </Text>
      </View>

      {/* Welcome Words and paragraph */}
      <View style={styles.content}>
        <Text style={{ fontSize: 30 }}>Welcome To Workman {"\n"}</Text>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          We are ready to assist you {"\n"}
          <Text style={{ textAlign: "center" }}> with your need </Text>
        </Text>
      </View>

      {/* Button */}
      <View style={{ width: "75%", backgroundColor: "gray", borderRadius: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            borderWidth: 2,
            alignItems: "center",
            padding: 10,
            borderColor: "gray",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff" }}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    justifyContent: "space-between", // Arrange items vertically with space between
    alignItems: "center",
    margin: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1, // Take up remaining available space
    justifyContent: "center",
    alignItems: "center",
  },
});
