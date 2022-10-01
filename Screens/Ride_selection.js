import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DataTable, { COL_TYPES } from "react-native-datatable-component";
import { ScrollView } from "react-native-gesture-handler";
import { Row } from "react-native-table-component";

export function Ride_selection() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ScrollView horizontal persistentScrollbar={true}>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.Find_ride}>Pick a ride</Text>
        <View
          style={{
            marginTop: 100,
            width: 500,
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <DataTable
            data={[
              {
                name: "Freshas",
                price: 2001,
                from: "Kaisiadorys",
                to: "Kaunas",
              },
              {
                name: "Jokubas",
                price: 22,
                from: "Kaisiadorys",
                to: "Vilnius",
              },
              {
                name: "Ignas",
                price: 210,
                from: "Kaisiadorys",
                to: "Asiauliai",
              },
              {
                name: "Laurynas",
                price: 22,
                from: "Kaisiadorys",
                to: "Siauliai",
              },
              { name: "Dzosas", price: 2, from: "Kaisiadorys", to: "bKaunas" },
              { name: "Spokas", price: 0, from: "Kaisiadorys", to: "zKaunas" },
              { name: "Lokas", price: 2001, from: "Kaisiadorys", to: "Kaunas" },
              {
                name: "Grompas",
                price: 22,
                from: "Kaisiadorys",
                to: "Vilnius",
              },
              {
                name: "Ciokis",
                price: 210,
                from: "Kaisiadorys",
                to: "Asiauliai",
              },
              {
                name: "Krugis",
                price: 22,
                from: "Kaisiadorys",
                to: "Siauliai",
              },
              { name: "Vilkas", price: 2, from: "Kaisiadorys", to: "bKaunas" },
              { name: "Baranis", price: 0, from: "Kaisiadorys", to: "zKaunas" },
              {
                name: "Paulius",
                price: 2001,
                from: "Kaisiadorys",
                to: "Kaunas",
              },
              {
                name: "Senulis",
                price: 22,
                from: "Kaisiadorys",
                to: "Vilnius",
              },
              {
                name: "Sliekas",
                price: 210,
                from: "Kaisiadorys",
                to: "Asiauliai",
              },
              {
                name: "Kurmis",
                price: 22,
                from: "Kaisiadorys",
                to: "Siauliai",
              },
              { name: "Kuilis", price: 2, from: "Kaisiadorys", to: "bKaunas" },
              { name: "Ezeras", price: 0, from: "Kaisiadorys", to: "zKaunas" },
            ]} // list of objects
            colNames={["add", "name", "price", "from", "to"]} //List of Strings
            colSettings={[
              { name: "add", type: COL_TYPES.CHECK_BOX, width: "12%" },
              { name: "name", type: COL_TYPES.STRING, width: "25%" },
              { name: "price", type: COL_TYPES.INT, width: "13%" },
              { name: "from", type: COL_TYPES.STRING, width: "30%" },
              { name: "to", type: COL_TYPES.STRING, width: "25%" },
              
            ]} //List of Objects
            onRowSelect={(row) => {console.log('ROW => ',row)}}
            noOfPages={1}
            backgroundColor={"white"} //Table Background Color
            headerLabelStyle={{ color: "black", fontSize: 14 }} //Text Style Works
          />
        </View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.button}>
            <Text style={styles.empty_buttonText}>Add</Text>
          </View>
        </TouchableHighlight>
      </View>
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Find_ride: {
    fontSize: 40,
    position: "absolute",
    top: 30,
    fontWeight: "bold",
    backgroundColor: "white",
  },

  empty_buttons: {
    backgroundColor: "white",
    height: 50,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  empty_buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2a9df4",
    height: 50,
    width: 210,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 10,
  },
});
