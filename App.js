import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Authentification from "./components/Pages/Authentification/Authentification";
import Profil from "./components/Pages/Profil/Profil";
import Message from "./components/UI/Message/Message";

export default function App() {
  const user = null;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {user ? <Profil /> : <Authentification />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
