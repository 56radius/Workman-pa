import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

//firebase auth for sign out
import { getAuth, signOut } from "firebase/auth";

export default function SettingsScreen({ navigation }) {
  const handleSignOut = () => {
    // Sign out of Firebase Auth
    const auth = getAuth();

    signOut(auth).then(() => navigation.navigate("Login"));
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "40%", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={{
            borderWidth: 2,
            alignItems: "center",
            paddingVertical: 9,
            borderRadius: 6,
          }}
        >
          <Text> Log out </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
