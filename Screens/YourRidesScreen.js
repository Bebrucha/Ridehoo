import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export function YourRidesScreen() {
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
      <Text style={styles.Title_Upcoming}>Upcoming rides</Text>

      <TouchableHighlight
        style={styles.button_current}
        onPress={() => navigation.navigate("YourRidesScreen_CurrentRides")}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Current rides</Text>
      </TouchableHighlight>

      <Text style={styles.Title_History}>Rides history</Text>

      <TouchableHighlight
        style={styles.button_past}
        onPress={() => navigation.navigate("YourRidesScreen_CurrentRides")}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Past rides</Text>
      </TouchableHighlight>

      <Image
        source={require("../assets/yourRide.gif")}
        style={{
          width: 400,
          height: 250,
          alignItems: "center",
          position: "absolute",
          top: 420,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Title_History: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 260,
    fontWeight: "bold",
  },
  Title_Upcoming: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 100,
    fontWeight: "bold",
  },
  button_current: {
    top: 175,
    position: "absolute",
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
  button_past: {
    top: 325,
    position: "absolute",
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
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
