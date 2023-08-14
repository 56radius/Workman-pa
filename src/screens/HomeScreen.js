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
      <View>
        <Text>
          {" "}
          Welcome To Us {"\n"} <Text> Wassup </Text>{" "}
        </Text>
      </View>

      {/* path to login and sign up pages */}
      {/* 
      <View style={styles.path}>
        <TouchableOpacity>
          <Text> Hello </Text>
        </TouchableOpacity>
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
