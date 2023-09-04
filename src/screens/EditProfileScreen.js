import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

//expo-image picker
import * as ImagePicker from "expo-image-picker";

export default function EditProfileScreen({ navigation }) {
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
              <Text style={{ fontSize: 12 }}> Change Profile Picture </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Full Name */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Full Name </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Full Name" style={styles.input} />
            </View>
          </View>

          {/* Email */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Email </Text>
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
              <Text> Gender </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Gender" style={styles.input} />
            </View>
          </View>

          {/* Phone */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Phone </Text>
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
            <Text> Update </Text>
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
