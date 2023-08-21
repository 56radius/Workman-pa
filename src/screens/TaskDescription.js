import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

//firebase authentication
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import app from "../backend/firebase.config";
const dbRef = getFirestore(app);

export default function TaskDescription({ navigation }) {
  const [dataSnapshot, setDataSnapshot] = useState([]);

  useEffect(() => {
    async function getTasks() {
      try {
        const tasks = [];
        const querySnapshot = await getDocs(collection(dbRef, "Tasks"));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const result = {
            id: doc.id,

            description: data.description,
          };
          tasks.push(result);
        });
        console.log("Document data:", tasks);
        setDataSnapshot(tasks);
      } catch (error) {
        console.log("Error fetching documents:", error);
      }
    }

    getTasks();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerTitle}>
          <Text style={{ color: "grey", fontSize: 30, paddingVertical: 18 }}>
            <Text> Task Description </Text>
          </Text>
        </View>

        {/* Retrieving records */}
        {dataSnapshot.map((doc) => (
          <View key={(doc.id, [doc.title])}>
            <Text> {doc.id} </Text>
            <Text> {doc.title} </Text>
            <Text> {doc.description} </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    flex: 1,
  },
});
