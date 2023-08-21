import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

//firebase authentication
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);

export default function NewTaskScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const currentUserId = getAuth().currentUser?.uid;
  const handleCreate = async () => {
    const data = {
      title: title,
      description: description,
      owner: currentUserId,
      completed: false,
    };
    try {
      const result = await addDoc(collection(dbRef, "Tasks"), data);
      Alert.alert("Success", "Task Created successfully");
    } catch (error) {
      setError(error);
      console.log("Task error: ", error);
      Alert.alert("Failure", "Task was not created successfully");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create New Task</Text>

      {/* Task title */}
      <TextInput style={styles.input} placeholder="Task Title" />

      {/* Task description */}
      <TextInput
        style={styles.input}
        placeholder="Task Description"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity onPress={handleCreate} style={styles.createButton}>
        <Text style={styles.buttonText}> Create </Text>
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
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: "gray",
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
