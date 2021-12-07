import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../../Contexts/UserContext";

const Profil = ({ navigation }) => {
  console.log(navigation);
  const userContext = useContext(UserContext);
  const openImagePicker = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission refusée");
    } else {
      const pickedImage = await ImagePicker.launchImageLibraryAsync();
      if (!pickedImage.cancelled) {
        userContext.setUser({
          ...userContext.user,
          avatar: pickedImage.uri,
        });
      }
    }
  };

  function openCamera() {
    navigation.push("CAMERA");
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: userContext.user.pictures
              ? userContext.user.pictures[0]
              : "https://zepros.eu/wp-content/uploads/2015/12/default.jpg",
          }}
        />
        <View style={styles.icons}>
          <TouchableOpacity onPress={openImagePicker}>
            <Entypo name="folder" size={35} color="rgb(90, 50, 194)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openCamera}>
            <Entypo name="camera" size={35} color="rgb(90, 50, 194)" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "rgb(90, 50, 194)",
    borderRadius: 75,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Profil;
