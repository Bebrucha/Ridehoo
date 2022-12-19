import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-element-textinput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "./firebase/firebase-config";

export function Log_in_page() {
  const [IsSignedIn, setIsSignedIn] = useState(false);
  const [WrongPass, setWrongPass] = useState(false);
  const [email, setValueEmail] = useState("");
  const [password, setValuePassword] = useState("");
  const navigation = useNavigation();
  const SignInUser = () => {
    setWrongPass(false);
    signInWithEmailAndPassword(authentication, email, password)
      .then((err) => {
        setIsSignedIn(true);
        console.log(err);
        console.log(WrongPass);
      })
      .catch((err) => {
        setWrongPass(true);
        console.log(err);
        console.log(WrongPass);
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
      <Text style={styles.Sign_in}>Sign in</Text>
      {/* Mygtukai */}
      <View style={styles.buttons}>
        <View style={{ flexDirection: "row", alignItems: "center", top: 560 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={styles.or_text}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        {/* // navigation.navigate("Home") */}
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {
            {
              IsSignedIn === true
                ? navigation.navigate("Home")
                : console.log("error while signing in");
            }
          }}
          onPressIn={() => {
            SignInUser();
          }}
          onPressOut={() => {
            {
              IsSignedIn === true
                ? navigation.navigate("Home")
                : console.log("error while signing in");
            }
          }}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
      </View>
      {IsSignedIn === false
        ? navigation.navigate("Home")
        : console.log("error while signing in")}

      <View style={styles.icons}>
        <View style={styles.google}>
          <TouchableOpacity>
            <Image
              source={require("../assets/google.png")}
              style={{ width: 38, height: 39 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.facebook}>
          <TouchableOpacity>
            <Ionicons name={"logo-facebook"} size={40} color={"blue"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textinput}>
        <View style={styles.emailcontainer}>
          <TextInput
            value={email}
            style={styles.emailinput}
            inputStyle={styles.emailinputStyle}
            labelStyle={styles.emaillabelStyle}
            placeholderStyle={styles.emailplaceholderStyle}
            textErrorStyle={styles.emailtextErrorStyle}
            label="Email"
            placeholder=""
            placeholderTextColor="black"
            onChangeText={(text) => {
              setValueEmail(text);
            }}
          />
        </View>

        <View style={styles.passwordcontainer}>
          <TextInput
            value={password}
            style={styles.passwordinput}
            inputStyle={styles.passwordinputStyle}
            labelStyle={styles.passwordlabelStyle}
            placeholderStyle={styles.passwordplaceholderStyle}
            textErrorStyle={styles.passwordtextErrorStyle}
            label="Password"
            placeholder=" "
            placeholderTextColor="black"
            secureTextEntry
            onChangeText={(text) => {
              setValuePassword(text);
            }}
          />
        </View>
      </View>
      {WrongPass === false ? (
        <Text style={styles.wrong_password_white}>
          Wrong password or email!
        </Text>
      ) : (
        <Text style={styles.wrong_password_red}>Wrong password or email!</Text>
      )}
      <TouchableHighlight
        style={styles.btn_forgotpassword}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Forgot_password")}
      >
        <Text style={styles.button_passwordText}>Forgot password?</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.btn_forgotpassword}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Sign_up_page")}
      >
        <Text style={styles.button_passwordText}>Register</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  wrong_password_red: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    margin: 15,
    textDecorationLine: "underline",
  },
  wrong_password_white: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    margin: 15,
    textDecorationLine: "underline",
  },
  or_text: {
    width: 50,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordcontainer: {
    padding: 0,
  },
  passwordinput: {
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
  passwordinputStyle: { fontSize: 16, color: "black" },
  passwordlabelStyle: { fontSize: 14, color: "black" },
  passwordplaceholderStyle: { fontSize: 16, color: "#000000" },
  passwordtextErrorStyle: { fontSize: 16, color: "black" },

  emailcontainer: {
    marginTop: 60,
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

  icons: {
    position: "absolute",
    maxWidth: 400,
    top: 610,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  facebook: {
    paddingLeft: 50,
  },
  google: {},
  Sign_in: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 70,
    fontWeight: "bold",
  },
  button: {
    top: 320,
    backgroundColor: "#2a9df4",
    height: 50,
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
  btn_forgotpassword: {
    top: 80,
    height: 35,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button_passwordText: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
