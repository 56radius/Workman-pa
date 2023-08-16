import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text> Hello </Text>
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
