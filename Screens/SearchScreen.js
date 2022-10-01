import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AutoComplete } from "react-native-element-textinput";

export function SearchScreen() {
  const [value, setValueFrom] = useState("");
  const [valuee, setValueTo] = useState("");

  const navigation = useNavigation();

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
      <Text style={styles.Find_ride}>Find a ride</Text>

      {/* Mygtukai */}
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Ride_selection")}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.textinput}>
        {/* <TextInput
        placeholder='From'
        placeholderTextColor="#5D6D7E" 
        style={{ borderWidth: 1, borderColor: '#000000', padding: 8, margin: 10, width: 220, position: 'absolute', top: 15 }}
      >
      </TextInput> */}
        {/* <TextInput
        placeholder='Where'
        placeholderTextColor="#5D6D7E" 
        style={{ borderWidth: 1, borderColor: '#000000', padding: 8, margin: 10, width: 220, position: 'absolute', top: 90 }}
      >
      </TextInput> */}
        <TextInput
          placeholder="Seats"
          placeholderTextColor="#9ca3af"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: "#000000",
            padding: 8,
            marginTop: 10,
            width: 100,
            position: "absolute",
            top: 165,
            right: 10,
            height: 46,
          }}
        ></TextInput>
        <TouchableHighlight
          style={{
            borderWidth: 1,
            borderColor: "#000000",
            padding: 8,
            marginTop: 10,
            width: 100,
            position: "absolute",
            top: 165,
            left: 10,
            height: 46,
            justifyContent: "center",
          }}
          onPress={showDatePicker}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.dateButtonText}>Date</Text>
        </TouchableHighlight>
      </View>
      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/100346/screenshots/4374355/map_animated.gif",
        }}
        style={{
          width: 400,
          height: 280,
          alignItems: "center",
          position: "absolute",
          top: 375,
        }}
      />
      <View style={styles.container1}>
        <AutoComplete
          value={value}
          data={[
            "Vilnius",
            "Šiauliai",
            "Kaunas",
            "Klaipėda",
            "Panevėžys",
            "Alytus",
            "Marijampolė",
            "Utena",
            "Telšiai",
            "Tauragė",
            "Jonava",
            "Mažeikiai",
            "Kėdainiai",
            "Ukmergė",
            "Visaginas",
            "Kuršėnai",
            "Plungė",
            "Kretinga",
            "Palanga",
            "Šventoji",
            "Radviliškis",
            "Šilutė",
            "Gargždai",
            "Druskininkai",
            "Eleketrėnai",
            "Rokiškis",
            "Grigiškės",
            "Biržai",
            "Lentvaris",
            "Trakai",
            "Kaišiadorys",
            "Kelmė",
          ]}
          style={styles.input1}
          inputStyle={styles.inputStyle1}
          labelStyle={styles.labelStyle1}
          placeholderStyle={styles.placeholderStyle1}
          textErrorStyle={styles.textErrorStyle1}
          label="From:"
          placeholder=""
          placeholderTextColor="gray"
          onChangeText={(e) => {
            setValueFrom(e);
          }}
        />
      </View>

      <View style={styles.container}>
        <AutoComplete
          value={valuee}
          data={[
            "Vilnius",
            "Šiauliai",
            "Kaunas",
            "Klaipėda",
            "Panevėžys",
            "Alytus",
            "Marijampolė",
            "Utena",
            "Telšiai",
            "Tauragė",
            "Jonava",
            "Mažeikiai",
            "Kėdainiai",
            "Ukmergė",
            "Visaginas",
            "Kuršėnai",
            "Plungė",
            "Kretinga",
            "Palanga",
            "Šventoji",
            "Radviliškis",
            "Šilutė",
            "Gargždai",
            "Druskininkai",
            "Eleketrėnai",
            "Rokiškis",
            "Grigiškės",
            "Biržai",
            "Lentvaris",
            "Trakai",
            "Kaišiadorys",
            "Kelmė",
          ]}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label="To:"
          placeholder=""
          placeholderTextColor="gray"
          onChangeText={(e) => {
            setValueTo(e);
          }}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dateButtonText: {
    color: "#000000",
    textAlign: "left",
    justifyContent: "center",
    color: "#9ca3af",
  },
  Find_ride: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    fontWeight: "bold",
  },
  button: {
    top: 300,
    backgroundColor: "#0a77de",
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
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  container1: {
    padding: 20,
  },
  input1: {
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
  inputStyle1: { fontSize: 16, color: "black" },
  labelStyle1: { fontSize: 14, color: "black" },
  placeholderStyle1: { fontSize: 16, color: "#9ca3af" },
  textErrorStyle1: { fontSize: 16, color: "black" },

  container: {
    padding: 0,
  },
  input: {
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
  inputStyle: { fontSize: 16, color: "black" },
  labelStyle: { fontSize: 14, color: "black" },
  placeholderStyle: { fontSize: 16, color: "#9ca3af" },
  textErrorStyle: { fontSize: 16, color: "black" },
});
