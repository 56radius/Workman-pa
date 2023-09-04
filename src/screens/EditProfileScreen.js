import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Import Firebase Auth if not already imported

export default function EditProfileScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const currentUserId = getAuth().currentUser?.uid;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const storage = getStorage();
    const response = await fetch(uri);
    const blob = await response.blob();

    // Create a reference to the user's profile image in Firebase Storage
    const imageRef = ref(storage, `users/${currentUserId}/profile-image`);

    try {
      // Upload the image blob to Firebase Storage
      await uploadBytesResumable(imageRef, blob); // Use uploadBytesResumable
      Alert.alert("Success", "Image Successfully");
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          )}

          <View
            style={{
              width: "45%",
              margin: 12,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={pickImage}
              style={{
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 13,
                borderColor: "gray",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>Change Profile Picture</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Full Name */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text>Full Name</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Full Name" style={styles.input} />
            </View>
          </View>

          {/* Email */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text>Email</Text>
            </View>
            <View
              style={{
                borderColor: "black",
                borderWidth: 2,
                borderRadius: 20,
                padding: 10,
              }}
            >
              <TextInput placeholder="Email address" style={styles.input} />
            </View>
          </View>

          {/* Gender */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text>Gender</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Gender" style={styles.input} />
            </View>
          </View>

          {/* Phone */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text>Phone</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Phone number" style={styles.input} />
            </View>
          </View>
        </View>

        {/* Submit */}
        <View style={{ justifyContent: "center", width: "45%" }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 8,
              paddingVertical: 10,
              alignItems: "center",
              borderColor: "gray",
            }}
          >
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 30,
    marginTop: 70,
  },

  //form
  form: {
    padding: 20,
    width: "96%",
  },

  inputContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  input: {
    fontSize: 16,
  },
});
