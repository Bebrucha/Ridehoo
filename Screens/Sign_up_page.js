import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-element-textinput";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { authentication } from "./firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
export function Sign_up_page() {
  const setData = async () => {
    await setDoc(doc(db, "Users", "users"), {
      name: { name },
      surname: { surname },
      email: { email },
      phone: { phone },
      // date: { date },
      password: { password },
    });
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
      })
      .catch((re) => {
        console.log(re);
      });
  };

  const CheckPasswords = () => {
    password === repassword ? setPassOK(false) : setPassOK(true);
  };
  const CheckForWarning = () => {
    password === repassword
      ? setShowPassWarning(false)
      : setShowPassWarning(true);
  };

  const navigation = useNavigation();
  const [showPassWarning, setShowPassWarning] = useState(false);
  const [PassOK, setPassOK] = useState(false);
  const [surname, setValueSurname] = useState("");
  const [name, setValueName] = useState("");
  const [email, setValueEmail] = useState("");
  const [password, setValuePassword] = useState("");
  const [repassword, setValueRePassword] = useState("");
  const [phone, setValuePhone] = useState("");
  const [name_entered, setname_entered] = useState(false);
  const [surname_entered, setsurname_entered] = useState(false);
  const [password_entered, setpassword_entered] = useState(false);
  const [date_entered, setdate_entered] = useState(false);
  const [phone_entered, setphone_entered] = useState(false);
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
      <Text style={styles.Sign_in}>Sign up</Text>

      <View style={styles.textinput}>
        <View style={styles.namecontainer}>
          <TextInput
            value={name}
            style={styles.nameinput}
            inputStyle={styles.nameinputStyle}
            labelStyle={styles.namelabelStyle}
            placeholderStyle={styles.nameplaceholderStyle}
            textErrorStyle={styles.nametextErrorStyle}
            label="Name"
            placeholder=""
            placeholderTextColor="#000000"
            onChangeText={(text) => {
              setValueName(text);
            }}
          />
        </View>
        <View style={styles.surnamecontainer}>
          <TextInput
            value={surname}
            style={styles.surnameinput}
            inputStyle={styles.surnameinputStyle}
            labelStyle={styles.surnamelabelStyle}
            placeholderStyle={styles.surnameplaceholderStyle}
            textErrorStyle={styles.surnametextErrorStyle}
            label="Surname"
            placeholder=""
            placeholderTextColor="#000000"
            onChangeText={(text) => {
              setValueSurname(text);
            }}
          />
        </View>
        <View style={styles.emailcontainer}>
          <TextInput
            value={email}
            style={styles.emailinput}
            inputStyle={styles.emailinputStyle}
            labelStyle={styles.emaillabelStyle}
            placeholderStyle={styles.emailplaceholderStyle}
            textErrorStyle={styles.emailtextErrorStyle}
            label="Email"
            placeholder="example@ridehoo.com"
            placeholderTextColor="#000000"
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
              CheckPasswords();
            }}
          />
        </View>
        <View style={styles.repasswordcontainer}>
          <TextInput
            value={repassword}
            style={styles.repasswordinput}
            inputStyle={styles.repasswordinputStyle}
            labelStyle={styles.repasswordlabelStyle}
            placeholderStyle={styles.repasswordplaceholderStyle}
            textErrorStyle={styles.repasswordtextErrorStyle}
            label="Re-enter password"
            placeholder=" "
            placeholderTextColor="black"
            secureTextEntry
            onChangeText={(text) => {
              setValueRePassword(text);
              CheckPasswords();
            }}
          />
        </View>

        <TouchableHighlight
          style={{
            borderWidth: 1,
            borderColor: "#000000",
            padding: 7,
            width: 220,
            justifyContent: "center",
            height: 55,
          }}
          onPress={showDatePicker}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.dateButtonText}>Date of birth</Text>
        </TouchableHighlight>

        <View style={styles.phonecontainer}>
          <TextInput
            value={phone}
            style={styles.phoneinput}
            inputStyle={styles.phoneinputStyle}
            labelStyle={styles.phonelabelStyle}
            placeholderStyle={styles.phoneplaceholderStyle}
            textErrorStyle={styles.phonetextErrorStyle}
            label="Phone number"
            keyboardType="numeric"
            placeholder="+3706..."
            placeholderTextColor="#000000"
            onChangeText={(text) => {
              setValuePhone(text);
            }}
          />
        </View>
      </View>
      {showPassWarning === false ? (
        <Text style={styles.wrong_password_white}>Passwords do not match!</Text>
      ) : (
        <Text style={styles.wrong_password_red}>Passwords do not match!</Text>
      )}
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          // onPress={() => {

          //   navigation.navigate("Log_in_page");
          //   RegisterUser();
          //   setData();
          //   CheckPasswords();
          // }}
          onPress={() => {
            {
              if (PassOK) {
                navigation.navigate("Log_in_page");
                RegisterUser();
                setData();
                setShowPassWarning(false);
              } else {
                CheckForWarning();
              }
            }
          }}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
      <Text style={styles.Already_member}>Already a member?</Text>

      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.empty_buttons}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Log_in_page")}
        >
          <Text style={styles.empty_buttonText}>Log in</Text>
        </TouchableHighlight>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrong_password_red: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    margin: 10,
    textDecorationLine: "underline",
  },
  wrong_password_white: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    margin: 10,
    textDecorationLine: "underline",
  },
  surnamecontainer: { marginTop: 10 },
  surnameinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 220,
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
  surnameinputStyle: { fontSize: 16, color: "black" },
  surnamelabelStyle: { fontSize: 14, color: "black" },
  surnameplaceholderStyle: { fontSize: 16, color: "#000000" },
  surnametextErrorStyle: { fontSize: 16, color: "black" },
  namecontainer: { marginTop: 10 },
  nameinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 220,
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
  nameinputStyle: { fontSize: 16, color: "black" },
  namelabelStyle: { fontSize: 14, color: "black" },
  nameplaceholderStyle: { fontSize: 16, color: "#000000" },
  nametextErrorStyle: { fontSize: 16, color: "black" },
  phonecontainer: { marginTop: 10 },
  phoneinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 220,
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
  phoneinputStyle: { fontSize: 16, color: "black" },
  phonelabelStyle: { fontSize: 14, color: "black" },
  phoneplaceholderStyle: { fontSize: 16, color: "#000000" },
  phonetextErrorStyle: { fontSize: 16, color: "black" },

  emailcontainer: { marginTop: 10 },
  emailinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 220,
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

  passwordcontainer: { marginTop: 10 },
  passwordinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 220,
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

  repasswordcontainer: {
    margin: 10,
  },
  repasswordinput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: 55,
    width: 220,
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
  repasswordinputStyle: { fontSize: 16, color: "black" },
  repasswordlabelStyle: { fontSize: 14, color: "black" },
  repasswordplaceholderStyle: { fontSize: 16, color: "#000000" },
  repasswordtextErrorStyle: { fontSize: 16, color: "black" },

  empty_buttonText: {
    color: "#2a9df4",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  empty_buttons: {
    backgroundColor: "white",
    height: 40,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  Already_member: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 25,
  },
  Sign_in: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#2a9df4",
    height: 50,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    marginTop: 5,
  },
  textinput: {
    color: "#000000",
    fontSize: 16,
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
  button_passwordText: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
