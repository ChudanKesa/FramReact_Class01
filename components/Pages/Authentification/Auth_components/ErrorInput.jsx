//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ErrorInput = (props) => {
  return props.message ? (
    <Text style={styles.error}>{props.message}</Text>
  ) : (
    <></>
  );
};

// define your styles
const styles = StyleSheet.create({
  error: {
    fontSize: 15,
    fontWeight: "bold",
    color: "rgb(255,70,180)",
    width: 250,
    margin: "auto",
  },
});

//make this component available to the app
export default ErrorInput;
