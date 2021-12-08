import React, { Component, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { UserContext } from "../../Contexts/UserContext";
import { AntDesign } from "@expo/vector-icons";
import Message from "../../UI/Message/Message";
import AuthButton from "../Authentification/Auth_components/AuthButton";

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
          pictures: userContext.user.pictures
            ? [...userContext.user.pictures, pickedImage.uri]
            : [pickedImage.uri],
        });
      }
    }
  };

  function openCamera() {
    navigation.push("CAMERA");
  }

  function goToEdit() {
    navigation.push("INFOS");
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
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
      <Message>
        <View style={styles.equalDisplay}>
          <Text style={styles.text}>Email:</Text>
          <Text style={styles.text}>
            {userContext.user.email ? userContext.user.email : "??????"}
          </Text>
        </View>
        <View style={styles.equalDisplay}>
          <Text style={styles.text}>Username:</Text>
          <Text style={styles.text}>
            {userContext.user.username ? userContext.user.username : "??????"}
          </Text>
        </View>
        <View style={styles.equalDisplay}>
          <Text style={styles.text}>À propos:</Text>
          <Text style={styles.text}>
            {userContext.user.about ? userContext.user.about : "??????"}
          </Text>
        </View>

        <AuthButton message="Modifier" action={goToEdit} />
      </Message>
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
  text: {
    color: "whitesmoke",
    fontSize: 18,
    marginLeft: 15,
  },
  equalDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
});

export default Profil;
