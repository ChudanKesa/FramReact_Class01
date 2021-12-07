import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

// create a component
const Input = ({ holder, action, isPassword }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={holder}
        placeholderTextColor="gray"
        style={styles.textInput}
        onChangeText={action}
        secureTextEntry={!passwordVisible}
      />
      {isPassword && (
        <Entypo
          style={styles.icon}
          name={passwordVisible ? "eye" : "eye-with-line"}
          size={24}
          color={passwordVisible ? "red" : "green"}
          onPress={togglePasswordVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    backgroundColor: "rgb(0,206,209)",
    width: 250,
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  textInput: {
    padding: 10,
    flex: 2,
  },
  iconVisible: {
    margin: "auto",
    padding: 5,
  },
});

//make this component available to the app
export default Input;
