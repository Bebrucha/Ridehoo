import { func } from "prop-types";
import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from "react-native";
import email from "react-native-email";

function handleEmail() {
  const to = ["ridehoosupport@gmail.com"]; // string or array of email addresses
  email(to, {
    // Optional additional arguments
    cc: [""], // string or array of email addresses
    bcc: "", // string or array of email addresses
    subject: "Your problem:",
    body: "Type your message for Ridehoo team here:",
    checkCanOpen: false, // Call Linking.canOpenURL prior to Linking.openURL
  }).catch(console.error);
}
export function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Help</Text>
      <Text style={styles.Maintext}>Contact us!</Text>
      <Image
        source={require("../assets/mail.gif")}
        style={{
          width: 400,
          height: 250,
          alignItems: "center",
          position: "absolute",
          top: 450,
          marginTop: 10,
        }}
      />

      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={handleEmail}
      >
        <Text style={styles.buttonText}>Send email</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  Maintext: {
    fontSize: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 170,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  button: {
    top: 10,
    backgroundColor: "#2a9df4",
    height: 70,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
