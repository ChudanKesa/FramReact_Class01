import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Cam from "../Pages/Cam/Cam";
import EditInfos from "../Pages/EditInfos/EditInfos";
import Profil from "../Pages/Profil/Profil";

const Stack = createStackNavigator();

export default function ProfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PROFILE"
        component={Profil}
        options={{
          headerStyle: {
            backgroundColor: "rgb(90, 50, 194)",
          },
          headerTitleStyle: {
            color: "whitesmoke",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="CAMERA" component={Cam} />
      <Stack.Screen name="INFOS" component={EditInfos} />
    </Stack.Navigator>
  );
}
