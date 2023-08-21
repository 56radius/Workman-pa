import * as React from "react";
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

export default function DashboardHomeScreen({ navigation }) {
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

        {/* Details contents */}
        <View style={styles.Details}>
          {/* Task 1 */}
          <View style={[styles.Button, styles.buttonMargin]}>
            {/* Title and arrow icon */}
            <View style={styles.DetailsText}>
              <Text> Task 1 </Text>

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
