import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  RefreshControl,
  TextInput,
} from "react-native";

//expo vector icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//expo bottom sheets
import RBSheet from "react-native-raw-bottom-sheet";

//firebase and firestore authenticaion
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import app from "../backend/firebase.config";
import { getAuth } from "firebase/auth";
const dbRef = getFirestore(app);

export default function DashboardHomeScreen({ navigation }) {
  //title and description consts
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataSnapshot, setDataSnapshot] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const currentUserId = getAuth().currentUser?.uid;

  //tasks const id
  const tasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    // Add more tasks here
  ];

  //bottom sheets
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

  //handleDelete function
  const handleDelete = async (docId) => {
    try {
      await deleteDoc(doc(collection(dbRef, "Tasks"), docId));
      setDataSnapshot((prevData) => prevData.filter((doc) => doc.id !== docId));
      Alert.alert("Success", "Task successfully deleted");
    } catch (error) {
      Alert.alert("Failure", "Task could not be deleted");
    }
  };

  //handleUpdate function
  const handleUpdate = async () => {
    console.log("selectedTask ", selectedTask);
    const data = {
      ...selectedTask,

      owner: currentUserId,
      completed: false,
    };
    console.log("updating task", data);
    try {
      // Perform the necessary update actions here
      await updateDoc(doc(dbRef, "Tasks", selectedTask.id), data);

      Alert.alert("Success", "Task successfully updated");
      bottomSheetRef.current.close();
    } catch (error) {
      console.log("Error updating document:", error);
      Alert.alert("Failure", "Task could not be updated");
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

  //refresh control for the task screen
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
      //refreshe control
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
                    {/* delete */}
                    <TouchableOpacity
                      style={{ marginRight: 10 }}
                      onPress={() => handleDelete(doc.id)}
                    >
                      <AntDesign name="delete" size={24} color="black" />
                    </TouchableOpacity>

                    {/* {tasks.map((task) => ( */}
                    <TouchableOpacity
                      key={doc.id}
                      onPress={() => {
                        setSelectedTask(doc);
                        openEditBottomSheet(doc);
                      }}
                      style={{ marginRight: 10 }}
                    >
                      <MaterialIcons name="edit" size={24} color="black" />
                    </TouchableOpacity>
                    {/* ))} */}

                    {/* Arrow right icon */}
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
            {/* Title input for editing to update */}
            <TextInput
              style={styles.input}
              placeholder="Task Title"
              value={selectedTask.title}
              onChangeText={(text) =>
                setSelectedTask((prev) => ({ ...prev, title: text }))
              }
            />

            {/* Task description for update */}
            <TextInput
              style={styles.input}
              placeholder="Task Description"
              multiline
              numberOfLines={4}
              value={selectedTask.description}
              onChangeText={(text) =>
                setSelectedTask({ ...selectedTask, description: text })
              }
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={handleUpdate}
                style={styles.UpdateButton}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Update
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => bottomSheetRef.current.close()}
                style={styles.UpdateButton}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Close</Text>
              </TouchableOpacity>
            </View>
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
  UpdateButton: {
    borderWidth: 2,
    width: "40%",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "gray",
    borderColor: "gray",
    marginHorizontal: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});
