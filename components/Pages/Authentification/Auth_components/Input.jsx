import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// create a component
const Input = (props) => {
  return (
    <TextInput
      placeholder={props.holder}
      placeholderTextColor="gray"
      style={styles.container}
      onChangeText={props.action}
      secureTextEntry={props.isPassword}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "rgb(0,206,209)",
    width: 250,
    marginHorizontal: "auto",
    marginVertical: 10,
  },
});

//make this component available to the app
export default Input;
