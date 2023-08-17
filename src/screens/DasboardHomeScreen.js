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

export default function DashboardHomeScreen() {
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
          <TouchableOpacity style={[styles.Button, styles.buttonMargin]}>
            {/* Title and arrow icon */}
            <View style={styles.DetailsText}>
              <Text> Task 1 </Text>

              {/* Right arrow icon */}
              <AntDesign name="arrowright" size={20} color="black" />
            </View>
          </TouchableOpacity>

          {/* Task 2 */}
          <TouchableOpacity style={[styles.Button, styles.buttonMargin]}>
            {/* Title and arrow icon */}
            <View style={styles.DetailsText}>
              <Text> Task 2 </Text>

              {/* Right arrow icon */}
              <AntDesign name="arrowright" size={20} color="gray" />
            </View>
          </TouchableOpacity>

          {/* Task 3 */}
          <TouchableOpacity style={[styles.Button, styles.buttonMargin]}>
            {/* Title and arrow icon */}
            <View style={styles.DetailsText}>
              <Text> Task 3 </Text>

              {/* Right arrow icon */}
              <AntDesign name="arrowright" size={20} color="black" />
            </View>
          </TouchableOpacity>

          {/* Task 4 */}
          <TouchableOpacity style={[styles.Button, styles.buttonMargin]}>
            {/* Title and arrow icon */}
            <View style={styles.DetailsText}>
              <Text> Task 4 </Text>

              {/* Right arrow icon */}
              <AntDesign name="arrowright" size={20} color="gray" />
            </View>
          </TouchableOpacity>
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
