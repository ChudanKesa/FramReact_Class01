import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { UserContext } from "../../Contexts/UserContext";
import Input from "../Authentification/Auth_components/Input";
import { AntDesign } from "@expo/vector-icons";
import AuthButton from "../Authentification/Auth_components/AuthButton";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const EditInfos = ({ navigation }) => {
  const userContext = useContext(UserContext);

  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleEmail(e) {
    setNewEmail(e);
  }

  function handleUsername(e) {
    setNewUsername(e);
  }

  function handleDescription(e) {
    setNewDescription(e);
  }

  function validate() {
    userContext.setUser({
      ...userContext.user,
      email: newEmail === "" ? userContext.user.email : newEmail,
      username: newUsername === "" ? userContext.user.username : newUsername,
      about: newDescription === "" ? userContext.user.about : newDescription,
    });
    navigation.goBack();
  }

  function dropEverything() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New email"
        onChangeText={handleEmail}
        style={styles.prettyBoxes}
      ></TextInput>
      <TextInput
        style={styles.prettyBoxes}
        placeholder="New username"
        onChangeText={handleUsername}
      ></TextInput>
      <TextInput
        style={[styles.prettyBoxes, styles.bigBox]}
        placeholder="New description"
        onChangeText={handleDescription}
      ></TextInput>
      <TouchableOpacity>
        <View style={[styles.equalDisplay]}>
          <Text
            onPress={() => (
              userContext.setUser({ ...userContext.user, pictures: null }),
              console.log(userContext.user),
              navigation.goBack()
            )}
          >
            Delete pictures
          </Text>
          <AntDesign name="delete" size={35} color="black" />
        </View>
      </TouchableOpacity>
      <AuthButton message="ACCEPT CHANGES" action={validate} />
      <AuthButton message="CANCEL" action={dropEverything} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  equalDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    alignItems: "center",
  },
  prettyBoxes: {
    borderColor: "aquamarine",
    borderWidth: 2,
    margin: 3,
    padding: 7,
    width: "50%",
  },
  bigBox: {
    width: "60%",
    height: 100,
  },
});

export default EditInfos;
