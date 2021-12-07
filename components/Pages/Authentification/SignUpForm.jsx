import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { UserContext } from "../../Contexts/UserContext";
import Message from "../../UI/Message/Message";
import AuthButton from "./Auth_components/AuthButton";
import ErrorInput from "./Auth_components/ErrorInput";
import Input from "./Auth_components/Input";

const SignUpForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const userContext = useContext(UserContext);

  function handleEmail(e) {
    setEmailInput(e);
  }

  function handleUsername(e) {
    setUserName(e);
  }

  function handlePassword(e) {
    setPasswordInput(e);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e);
  }

  function createAccount() {
    setPasswordError("");
    if (
      emailInput.includes("@") &&
      passwordInput.length > 6 &&
      passwordInput === confirmPassword &&
      userName.length > 3 &&
      userName.length < 21
    ) {
      alert(emailInput + "\nEnregistré avec succès.");
      userContext.setUser({
        email: emailInput,
        username: userName,
      });
    } else {
      settingOfUsernameErrorMessage();
      setEmailError(emailInput.includes("@") ? "" : "Wrong email format.");
      settingOfPasswordErrorMessage();
    }
  }

  function settingOfPasswordErrorMessage() {
    if (passwordInput.length < 6) {
      setPasswordError("Password too short.");
    } else if (passwordInput !== confirmPassword) {
      setPasswordError("Password and confirmation don't match.");
    }
  }

  function settingOfUsernameErrorMessage() {
    if (userName.length === 0) {
      setNameError("Username can't be empty.");
    } else if (userName.length < 3) {
      setNameError("Username too short.");
    }
    if (userName.length > 20) {
      setNameError("Username too long.");
    }
  }

  return (
    <Message title="Bienvenue !" body="Veuillez vous inscrire.">
      <Input holder="Email" action={handleEmail} />
      <ErrorInput message={emailError} />
      <Input holder="Username" action={handleUsername} />
      <ErrorInput message={nameError} />
      <Input holder="Password" action={handlePassword} isPassword />
      <Input
        holder="Repeat password"
        action={handleConfirmPassword}
        isPassword
      />
      <ErrorInput message={passwordError} />
      <AuthButton action={createAccount} message="CREATE ACCOUNT" />
    </Message>
  );
};

export default SignUpForm;
