import React from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";

// On peut mettre des tableaux dans les styles pour combiner plusieurs styles

const Message = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          props.children && (props.title || props.body) && { marginBottom: 30 }
        }
      >
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.body && (
          <Text style={[styles.body, styles.textColor]}>{props.body}</Text>
        )}
      </View>
      <View>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(60, 20, 164)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    width: Dimensions.get("window").width - 8,
    maxWidth: 500,
  },
  body: {
    fontSize: 25,
    fontFamily: "comic sans ms",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "rgb(230,60,255)",
    alignSelf: "center",
  },
  textColor: {
    color: "whitesmoke",
    alignSelf: "center",
  },
});

export default Message;
