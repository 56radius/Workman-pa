import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function NewTaskScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Task</Text>

      <TextInput style={styles.input} placeholder="Task Title" />

      <TextInput
        style={styles.input}
        placeholder="Task Description"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.buttonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 12,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
