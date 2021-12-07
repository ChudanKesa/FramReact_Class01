import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./components/Contexts/UserContext";
import Authentification from "./components/Pages/Authentification/Authentification";
import Profil from "./components/Pages/Profil/Profil";
import ProfilStack from "./components/Stacks/ProfilStack";

export default function App() {
  const fakeUser = {
    email: "titi@toto.fr",
    username: "Roger",
  };
  const [user, setUser] = useState(fakeUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {user ? <ProfilStack /> : <Authentification />}
        </View>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
