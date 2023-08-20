import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

export default function DashboardHomeScreen({ navigation }) {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    // ... other tasks
  ];

  const [selectedTask, setSelectedTask] = useState(null);
  const bottomSheetRef = React.createRef();

  const openTaskDetails = (task) => {
    setSelectedTask(task);
    bottomSheetRef.current.open();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>See Tasks</Text>
        </View>
        <View style={styles.detailsContainer}>
          {tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={[styles.taskButton, styles.buttonMargin]}
              onPress={() => openTaskDetails(task)}
            >
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <AntDesign name="arrowright" size={20} color="black" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    fontSize: 18,
  },
  detailsContainer: {
    paddingVertical: 25,
    width: "80%",
  },
  taskButton: {
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonMargin: {
    marginVertical: 10,
  },
  taskDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  taskTitle: {
    fontWeight: "bold",
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
