import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

//expo vector icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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

export default function DashboardHomeScreen({ navigation }) {
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
        <View
          style={{
            alignSelf: "flex-start",
            paddingHorizontal: 24,
            paddingTop: 20,
          }}
        >
          <Text style={{ color: "gray", fontWeight: "bold" }}> See Tasks </Text>
        </View>

        {dataSnapshot.map((doc) => (
          <View key={(doc.id, [doc.title])}>
            {/* Details contents */}
            <View style={styles.Details}>
              {/* Task 1 */}
              <View style={[styles.Button, styles.buttonMargin]}>
                {/* Title and arrow icon */}
                <View style={styles.DetailsText}>
                  <Text> {doc.id} </Text>

                  {/* Ionns */}
                  <View style={{ flexDirection: "row" }}>
                    {/* Delete icon */}
                    <TouchableOpacity style={{ marginRight: 10 }}>
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Edit icon */}
                    <TouchableOpacity style={{ marginRight: 10 }}>
                      <MaterialIcons name="edit" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Right arrow icon */}
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Description")}
                    >
                      <AntDesign name="arrowright" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },

  Details: {
    paddingVertical: 25,
    width: "80%",
  },

  Button: {
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonMargin: {
    marginVertical: 10,
  },

  DetailsText: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});
