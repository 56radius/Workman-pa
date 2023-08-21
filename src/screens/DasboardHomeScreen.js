import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  RefreshControl,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
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
  const [refreshing, setRefreshing] = useState(false);
  const tasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    // Add more tasks here
  ];

  const [selectedTask, setSelectedTask] = useState(null);
  const bottomSheetRef = React.createRef();

  const openTaskDetails = (task) => {
    setSelectedTask(task);
    bottomSheetRef.current.open();
  };

  const openEditBottomSheet = (task) => {
    setSelectedTask(task);
    bottomSheetRef.current.open();
  };

  const handleDelete = async (docId) => {
    try {
      await deleteDoc(doc(collection(dbRef, "Tasks"), docId));
      setDataSnapshot((prevData) => prevData.filter((doc) => doc.id !== docId));
      Alert.alert("Success", "Task successfully deleted");
    } catch (error) {
      console.log("Error deleting document:", error);
      Alert.alert("Failure", "Task could not be deleted");
    }
  };

  useEffect(() => {
    async function getTasks() {
      try {
        const tasks = [];
        const querySnapshot = await getDocs(collection(dbRef, "Tasks"));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const result = {
            id: doc.id,
            title: data.title,
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

  const onRefresh = async () => {
    setRefreshing(true);

    try {
      const tasks = [];
      const querySnapshot = await getDocs(collection(dbRef, "Tasks"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const result = {
          id: doc.id,
          title: data.title,
        };
        tasks.push(result);
      });
      console.log("Document data:", tasks);
      setDataSnapshot(tasks);
    } catch (error) {
      console.log("Error fetching documents:", error);
    }

    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> See Tasks </Text>
        </View>

        {dataSnapshot.map((doc) => (
          <View style={styles.Details} key={doc.id}>
            <View>
              <View style={[styles.Button, styles.buttonMargin]}>
                <View style={styles.DetailsText}>
                  <Text style={{ marginRight: 60 }}> {doc.title} </Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ marginRight: 10 }}
                      onPress={() => handleDelete(doc.id)}
                    >
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>

                    {tasks.map((task) => (
                      <TouchableOpacity
                        key={task.id}
                        onPress={() => openEditBottomSheet(task)}
                        style={{ marginRight: 10 }}
                      >
                        <MaterialIcons name="edit" size={24} color="black" />
                      </TouchableOpacity>
                    ))}

                    <TouchableOpacity
                      style={{}}
                      onPress={() =>
                        navigation.navigate("Description", { taskId: doc.id })
                      }
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
      <RBSheet
        ref={bottomSheetRef}
        height={300}
        duration={250}
        customStyles={{
          container: styles.bottomSheetContainer,
        }}
      >
        {selectedTask && (
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetTitle}>{selectedTask.title}</Text>
            <Text>{selectedTask.description}</Text>
            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </RBSheet>
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
  header: {
    alignSelf: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  headerText: {
    color: "gray",
    fontWeight: "bold",
  },
  Details: {
    paddingVertical: 1,
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
  bottomSheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetContent: {
    padding: 20,
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    color: "blue",
    marginTop: 10,
  },
});
