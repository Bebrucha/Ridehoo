import * as React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Switch,
} from "react-native";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AutoComplete, TextInput } from "react-native-element-textinput";
import { useNavigation } from "@react-navigation/native";
export function AddRideScreen() {
  const navigation = useNavigation();
  const [current_location, setValueCurrent] = useState("");
  const [destination, setValueDestination] = useState("");
  const [seats, setValueSeats] = useState("");
  const [price, setValuePrice] = useState("");
  const [date, setValueDate] = useState("");

  const [checked, setchecked] = useState(false);

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
    text = date;
    hideDatePicker();
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [text, setText] = useState("Date");

  const onPressHandler = (event) => setText({ DateDisplay });

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
      <Text style={styles.Find_ride}>Add a ride</Text>

      <View style={styles.switchcontainer}>
        <Switch
          style={{
            transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
            paddingTop: 10,
          }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 20 }}>
          I accept packages
        </Text>
      </View>

      <View style={styles.container}>
        <AutoComplete
          value={current_location}
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
          label="Current location:"
          placeholder=""
          placeholderTextColor="gray"
          onChangeText={(e) => {
            setValueCurrent(e);
          }}
        />
      </View>

      <View style={styles.container1}>
        <AutoComplete
          value={destination}
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
          label="Destination:"
          placeholder=""
          placeholderTextColor="gray"
          onChangeText={(e) => {
            setValueDestination(e);
          }}
        />
      </View>

      <View style={styles.seatscontainer}>
        <TextInput
          value={seats}
          style={styles.seatsinput}
          inputStyle={styles.seatsinputStyle}
          labelStyle={styles.seatslabelStyle}
          placeholderStyle={styles.seatsplaceholderStyle}
          textErrorStyle={styles.seatstextErrorStyle}
          label="Seats"
          placeholder=" "
          keyboardType="numeric"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            setValueSeats(text);
          }}
        />
      </View>

      <View style={styles.pricecontainer}>
        <TextInput
          value={price}
          style={styles.priceinput}
          inputStyle={styles.priceinputStyle}
          labelStyle={styles.pricelabelStyle}
          placeholderStyle={styles.priceplaceholderStyle}
          textErrorStyle={styles.pricetextErrorStyle}
          label="Price in €"
          placeholder=" "
          keyboardType="numeric"
          placeholderTextColor="gray"
          onChangeText={(text) => {
            setValuePrice(text);
          }}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("YourRidesScreen_CurrentRides")}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        style={{
          borderWidth: 1,
          borderColor: "#000000",
          padding: 7,
          width: 220,
          position: "absolute",
          top: 85,
          justifyContent: "center",
          height: 55,
        }}
        onPress={showDatePicker}
        // onPress={onPressHandler}
        onChangeText={(date) => {
          setValueDate(date);
        }}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.dateButtonText}>{text}</Text>
      </TouchableHighlight>

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
  button: {
    top: 110,
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
  switchcontainer: {
    top: 500,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pricecontainer: {
    padding: 5,
  },
  priceinput: {
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
  priceinputStyle: { fontSize: 16, color: "black" },
  pricelabelStyle: { fontSize: 14, color: "black" },
  priceplaceholderStyle: { fontSize: 16, color: "#9ca3af" },
  pricetextErrorStyle: { fontSize: 16, color: "black" },

  seatscontainer: {
    padding: 20,
  },
  seatsinput: {
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
  seatsinputStyle: { fontSize: 16, color: "black" },
  seatslabelStyle: { fontSize: 14, color: "black" },
  seatsplaceholderStyle: { fontSize: 16, color: "#9ca3af" },
  seatstextErrorStyle: { fontSize: 16, color: "black" },

  dateButtonText: {
    color: "#000000",
    textAlign: "left",
    justifyContent: "center",
    color: "#9ca3af",
  },
  Sign_in: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    fontWeight: "bold",
  },
  Find_ride: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    fontWeight: "bold",
  },
  container: {
    marginTop: 85,
    padding: 20,
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

  container1: {
    padding: 5,
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

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
