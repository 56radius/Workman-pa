import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//Expo Vector Icons
import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

export default function MyProfileScreen({ navigation }) {
  const [profileImage, setProfileImage] = useState(
    require("../.././assets/water.png")
  );

  const updateProfileImage = (newImageUri) => {
    setProfileImage({ uri: newImageUri });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            style={{
              width: 78,
              height: 78,
              borderRadius: 50,
            }}
            source={profileImage}
          />
          <Text
            style={{
              paddingVertical: 20,
              paddingHorizontal: 10,
              fontWeight: "bold",
            }}
          >
            Danny Kayode
          </Text>
        </View>

        {/* User's Info */}
        <View style={{ flex: 5 }}>
          {/* Full Name */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <EvilIcons name="user" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Full Name {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  Danny Kayode
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Email */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <MaterialCommunityIcons
                name="email-fast"
                size={24}
                color="black"
              />
              <Text style={styles.profileTitle}>
                Email {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  cussmeritmohammed@gmail.com
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Gender */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <FontAwesome name="birthday-cake" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Gender {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  {" "}
                  Transgender{" "}
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Phone */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <Feather name="phone" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Phone {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  +2348101295652
                </Text>
              </Text>
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
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    flex: 1,
    marginTop: 90,
    margin: 30,
    alignSelf: "flex-start",
  },

  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },

  profileItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 100,
  },

  profileTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 9,
  },
});
