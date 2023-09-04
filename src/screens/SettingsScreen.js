import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";

//Expo Vector Icons
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

//firebase auth for sign out
import { getAuth, signOut } from "firebase/auth";

export default function App({ navigation }) {
  const handleSignOut = () => {
    // Sign out of Firebase Auth
    const auth = getAuth();

    signOut(auth).then(() => navigation.navigate("Login"));
  };

  return (
    <View style={styles.container}>
      {/* profile picture and name */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={require("../.././assets/water.png")}
        />

        <Text
          style={{
            fontWeight: "bold",
            paddingVertical: 10,
            textAlign: "center",
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
            <AntDesign name="edit" size={24} color="black" />
            <Text style={styles.profileTitle}> Profile </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Appearance */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialCommunityIcons
              name="toggle-switch-off-outline"
              size={24}
              color="black"
            />
            <Text style={styles.profileTitle}> Appearance </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Help and support */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="ios-help-circle" size={24} color="black" />
            <Text style={styles.profileTitle}> Support </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Feedback */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialIcons name="feedback" size={24} color="black" />
            <Text style={styles.profileTitle}> Feedback </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Data Privacy */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialIcons name="privacy-tip" size={24} color="black" />
            <Text style={styles.profileTitle}> Privacy </Text>
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
            backgroundColor: "gray",
            borderColor: "gray",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Log Out </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
