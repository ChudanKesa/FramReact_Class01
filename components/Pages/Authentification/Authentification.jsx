//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

// create a component
const Authentification = () => {
  const [userKnown, setUserKnown] = useState(false);

  function toggleKnown() {
    setUserKnown(!userKnown);
  }

  return (
    <View style={styles.container}>
      {userKnown ? <LoginForm /> : <SignUpForm />}

      <TouchableOpacity onPress={toggleKnown}>
        <Text style={styles.helper}>
          {userKnown ? "Inscription" : "Connexion"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  helper: {
    fontWeight: "bold",
    color: "rgb(72,212,129)",
  },
});

//make this component available to the app
export default Authentification;
