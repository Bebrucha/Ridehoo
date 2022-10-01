import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
export function Client_pick_up() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.Title_Upcoming}>Driver is on your way!</Text>
      <View style={styles.gif}>
        <Image
          source={require("../assets/omw.gif")}
          style={{
            width: 400,
            height: 150,
            alignItems: "center",
          }}
        />
      </View>
      <Text style={styles.Driver_label}>Your driver:</Text>
      <Text style={styles.Name}>Jonas Jonaitis</Text>
      <Text style={styles.car_plate_label}>Car plate:</Text>
      <Text style={styles.car_plate}>DOG 589</Text>

      <View style={styles.phone_icon}>
        <TouchableOpacity>
          <Ionicons name={"call-outline"} size={40} color={"black"} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonview}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate("YourRidesScreen_CurrentRides")}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.buttonText}>I am in</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonview: {
    marginTop: 10,
  },
  gif: {
    marginTop: 10,
  },

  phone_icon: {
    marginTop: 30,
    marginBottom: 30,
  },
  car_plate: {
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  car_plate_label: {
    fontSize: 20,
    alignItems: "center",
  },
  Driver_label: {
    fontSize: 20,
    alignItems: "center",
    marginTop: 40,
  },
  Name: {
    fontSize: 24,
    alignItems: "center",
    fontWeight: "bold",
    margin: 10,
  },
  Title_Upcoming: {
    marginTop: 50,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
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
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
