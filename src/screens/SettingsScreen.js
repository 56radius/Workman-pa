import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: "40%", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            alignItems: "center",
            paddingVertical: 9,
            borderRadius: 6,
          }}
        >
          <Text> Log out </Text>
        </TouchableOpacity>
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
