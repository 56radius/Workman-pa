import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TaskDescription({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerTitle}>
        <Text style={{ color: "green", fontSize: 30, paddingVertical: 18 }}>
          <Text style={styles.normalText}>Avinx_</Text>
          <Text style={styles.highlightedText}>Health</Text>
        </Text>
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
