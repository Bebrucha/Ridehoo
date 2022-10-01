import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import { authentication } from "./firebase/firebase-config";

export function Forgot_password() {
  const navigation = useNavigation();
  const [Email_Sent, emailSent] = useState(false);
  const [email, setValueEmail] = useState("");
  const PasswordReset = () => {
    sendPasswordResetEmail(authentication, email)
      .then(() => {
        emailSent(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.Sign_in}>Reset password</Text>

      <View style={styles.emailcontainer}>
        <TextInput
          value={email}
          style={styles.emailinput}
          inputStyle={styles.emailinputStyle}
          labelStyle={styles.emaillabelStyle}
          placeholderStyle={styles.emailplaceholderStyle}
          textErrorStyle={styles.emailtextErrorStyle}
          label="Email"
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(text) => {
            setValueEmail(text);
          }}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => PasswordReset}
          onPressIn={() => {
            PasswordReset();
          }}
        >
          <Text style={styles.buttonText}>Send code</Text>
        </TouchableHighlight>
      </View>
      {Email_Sent === false ? (
        <Text style={styles.email_sent_white}>
          Password reset email has been sent!
        </Text>
      ) : (
        <Text style={styles.email_sent_blue}>
          Password reset email has been sent!
        </Text>
      )}
      <View style={styles.gif}>
        <Image
          source={require("../assets/forgot-password.gif")}
          style={{
            width: 400,
            height: 300,
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  email_sent_blue: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
    margin: 25,
    textDecorationLine: "underline",
  },
  email_sent_white: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    margin: 25,
    textDecorationLine: "underline",
  },
  gif: {
    marginTop: 100,
  },
  emailcontainer: {
    marginTop: 20,
    padding: 20,
  },
  emailinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 200,
    paddingLeft: 7,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  emailinputStyle: { fontSize: 16, color: "black" },
  emaillabelStyle: { fontSize: 14, color: "black" },
  emailplaceholderStyle: { fontSize: 16, color: "#000000" },
  emailtextErrorStyle: { fontSize: 16, color: "black" },
  Sign_in: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2a9df4",
    height: 50,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  textinput: {
    color: "#000000",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
