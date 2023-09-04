import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//expo-image picker
import * as ImagePicker from "expo-image-picker";

//firebase auth for sign out
import { getAuth, signOut } from "firebase/auth";

export default function SettingsScreen({ navigation }) {
  const handleSignOut = () => {
    // Sign out of Firebase Auth
    const auth = getAuth();

    signOut(auth).then(() => navigation.navigate("Login"));
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload" onPress={pickImage} />

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

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
            backgroundColor: "blue",
            borderColor: "blue",
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
