//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

// create a component
const AuthButton = (props) => {
  return (
    <TouchableOpacity>
      <Text style={styles.button} onPress={props.action}>
        {props.message}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "royalblue",
    fontSize: 16,
    alignSelf: "center",
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    color: "rgb(200,255,255)",
    borderRadius: 90,
  },
});

//make this component available to the app
export default AuthButton;
