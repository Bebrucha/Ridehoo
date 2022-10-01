import * as React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import UserAvatar from "react-native-user-avatar";
import { useNavigation } from "@react-navigation/native";
import { Row } from "react-native-table-component";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


export function ProfileScreen() {
  const navigation = useNavigation();

  const db = getDatabase();
  const auth = getAuth();
  const userId = auth.currentUser.uid;
  const name = auth.currentUser.email;


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
      <View style={styles.UserAvatar}>
        <UserAvatar
          size={180}
          name="Vardenis Pavardenis"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/15951/production/_117310488_16.jpg"
        />
      </View>
      <Text style={styles.profileName}>{name}</Text>
      <Text><Icon name="md-star-outline" size={40} style={styles.icon}></Icon>
      <Text>
      <Icon name="md-star-outline" size={40} style={{}}></Icon>
      </Text>
      <Text>
      <Icon name="md-star-outline" size={40} style={{}}></Icon>
      </Text>
      </Text>
      <Text style={styles.ratingText}>3/5</Text>
      {/* Mygtukai */}
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={styles.buttonText}>Help</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button_logout}
          onPress={() => navigation.navigate("MainMenu")}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.button_logout_Text}>Logout</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  UserAvatar: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
  container: {},
  profileName: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  ratingText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  buttons: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    top: 100,
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
  button_logout: {
    top: 110,
    backgroundColor: "white",
    height: 40,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button_logout_Text: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
