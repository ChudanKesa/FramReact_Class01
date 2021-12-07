//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Message from "../../UI/Message/Message";
import AuthButton from "./Auth_components/AuthButton";
import ErrorInput from "./Auth_components/ErrorInput";
import Input from "./Auth_components/Input";

// create a component
const LoginForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleEmail(e) {
    setEmailInput(e);
  }

  function handlePassword(e) {
    setPasswordInput(e);
  }

  function login() {
    if (emailInput.includes("@") && passwordInput.length > 6) {
      alert(emailInput + "\nConnecté avec succès.");
    } else {
      setEmailError(emailInput.includes("@") ? "" : "Wrong email format.");
      setPasswordError(passwordInput.length < 6 ? "Password too short." : "");
    }
  }

  return (
    <Message title="Bon retour !" body="Veuillez vous connecter.">
      <Input holder="Email" action={handleEmail} />
      <ErrorInput message={emailError} />
      <Input holder="Password" isPassword="true" action={handlePassword} />
      <ErrorInput message={passwordError} />
      <AuthButton message="ENTRER" action={login} />
    </Message>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
