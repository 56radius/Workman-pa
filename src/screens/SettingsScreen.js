import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import RBSheet from "react-native-raw-bottom-sheet";

export default function App({ navigation }) {
  const refRBSheet = React.createRef();
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Define styles for light mode
  const lightModeStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff", // Light mode background color
    },
    // Add other light mode styles here
  });

  // Define styles for dark mode
  const darkModeStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000", // Dark mode background color
    },
    // Add other dark mode styles here
  });

  const handleSignOut = () => {
    // Sign out of Firebase Auth
    const auth = getAuth();
    signOut(auth).then(() => navigation.navigate("Login"));
    Alert.alert("Logged Out", "You have been logged out");
  };

  return (
    <View
      style={
        darkModeEnabled ? darkModeStyles.container : lightModeStyles.container
      }
    >
      {/* profile picture and name */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={require("../../assets/water.png")}
        />

        <Text
          style={{
            fontWeight: "bold",
            paddingVertical: 10,
            textAlign: "center",
            color: darkModeEnabled ? "#ffffff" : "#000000", // Text color based on dark mode
          }}
        >
          Danny kayode
          {"\n"}
        </Text>
      </View>

      {/* List */}
      <View style={{ paddingVertical: 25 }}>
        {/* Edit Profile */}
        <TouchableOpacity
          onPress={() => navigation.navigate("MyProfile")}
          style={styles.profileItem}
        >
          <View style={styles.profileItemLeft}>
            <AntDesign
              name="edit"
              size={24}
              color={darkModeEnabled ? "#ffffff" : "#000000"}
            />
            <Text
              style={[
                styles.profileTitle,
                { color: darkModeEnabled ? "#ffffff" : "#000000" },
              ]}
            >
              {" "}
              Profile{" "}
            </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Appearance */}
        <TouchableOpacity
          style={styles.profileItem}
          onPress={() => refRBSheet.current.open()}
        >
          <View style={styles.profileItemLeft}>
            <MaterialCommunityIcons
              name="toggle-switch-off-outline"
              size={24}
              color={darkModeEnabled ? "#ffffff" : "#000000"}
            />
            <Text
              style={[
                styles.profileTitle,
                { color: darkModeEnabled ? "#ffffff" : "#000000" },
              ]}
            >
              {" "}
              Appearance{" "}
            </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Help and support */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons
              name="ios-help-circle"
              size={24}
              color={darkModeEnabled ? "#ffffff" : "#000000"}
            />
            <Text
              style={[
                styles.profileTitle,
                { color: darkModeEnabled ? "#ffffff" : "#000000" },
              ]}
            >
              {" "}
              Support{" "}
            </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Feedback */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialIcons
              name="feedback"
              size={24}
              color={darkModeEnabled ? "#ffffff" : "#000000"}
            />
            <Text
              style={[
                styles.profileTitle,
                { color: darkModeEnabled ? "#ffffff" : "#000000" },
              ]}
            >
              {" "}
              Feedback{" "}
            </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Data Privacy */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialIcons
              name="privacy-tip"
              size={24}
              color={darkModeEnabled ? "#ffffff" : "#000000"}
            />
            <Text
              style={[
                styles.profileTitle,
                { color: darkModeEnabled ? "#ffffff" : "#000000" },
              ]}
            >
              {" "}
              Privacy{" "}
            </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Log out button */}
      <View
        style={{
          width: "40%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleSignOut}
          style={{
            borderWidth: 2,
            alignItems: "center",
            paddingVertical: 8,
            borderRadius: 10,
            backgroundColor: darkModeEnabled ? "#333333" : "gray",
            borderColor: darkModeEnabled ? "#333333" : "gray",
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
            {" "}
            Log Out{" "}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Raw Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={200}
        animationType="slide"
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: darkModeEnabled ? "#333333" : "#ffffff", // Background color based on dark mode
          },
        }}
      >
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 20,
              color: darkModeEnabled ? "#ffffff" : "#000000",
            }}
          >
            Dark Mode
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Dark Mode</Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={(newValue) => setDarkModeEnabled(newValue)}
              style={{ marginLeft: "auto" }}
            />
          </View>
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
            <Text style={{ color: "blue" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  profileItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  profileArrow: {
    fontSize: 24,
    marginLeft: 175,
  },
});
