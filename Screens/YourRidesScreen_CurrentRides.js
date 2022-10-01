import * as React from "react";
import { Text, View, ScrollView, StyleSheet, Modal, Image, Pressable } from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import StarRating from 'react-native-star-rating';
import Icon from "react-native-vector-icons/Ionicons";


export function YourRidesScreen_CurrentRides() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  

  return (
    <ScrollView>
      <View style={styles.container}>
      <ScrollView>

      <Modal animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View style={{
            marginTop:22,
            borderColor:"black",
            borderWidth:1,
  
    borderRadius:25, 
    width:"100%",
    height:"60%",
    backgroundColor:"#2a9df4"}}>
      <View>
        <Pressable style={{alignSelf:"flex-end", marginTop:10, marginRight:10
      }}
      onPress={() => {
          setModalVisible(!modalVisible);
        }}>
          <Icon
  name="close-circle-outline"
  color="white"
  size={25}
/>
          </Pressable>
        <Text style={{fontSize:25, textAlign:'center', color:"white"}}>Trip: #1</Text>
        <View>
        <Text style={{fontSize:15, textAlign:'center', color:"white"}}>Date: 2022-03-04</Text>
        </View>
        </View>
        <View style={{ marginLeft:10, marginTop:50, flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{fontSize:20, color:"white"}}>From: Kaunas 
        </Text>
        <View style={{marginRight:10, flexDirection:"row"}}>
          <Text style={{fontSize:20, color:"white"}}>To: Vilnius</Text></View>
        </View>
      <View style={{ marginTop:40, marginLeft:10, flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{fontSize:20, textAlign:'center', color:"white"}}>Driver: Jonas Balionas</Text>
        <Image style={{width:100, height:100, alignSelf:"center", 
        borderColor:"black", borderWidth:3, borderStyle:"solid", borderRadius:50, backgroundColor:"white", marginRight:10
      }} source={require('../assets/current_ride.png')}/>
        </View>


        <View style={{ marginTop:25, marginLeft:10}}>
        <Text style={{fontSize:20, textAlign:'left', color:"white"}}>Price: 3.85€</Text>
        </View>

        <View style={{ marginTop:25, flexDirection:"column", position:"absolute", bottom:10, alignSelf:"center"}}>
        <Text style={{fontSize:20, textAlign:'left', color:"white"}}>Trip's rating: <StarRating
        disabled={false}
        maxStars={5}
        rating={3}
        fullStarColor="white"
        starSize={15}
      /></Text>
        </View>
        </View>
          </Modal>
          </ScrollView>
        <DataTable>
          <DataTable.Header style={{ backgroundColor: "#2a9df4" }}>
            <DataTable.Title style={{ marginRight: 20 }}>
              From - To
            </DataTable.Title>
            <DataTable.Title>Price</DataTable.Title>
            <DataTable.Title style={{ marginRight: -50 }}>Date</DataTable.Title>
          </DataTable.Header>
          
          
          <TouchableOpacity onPress={() =>setModalVisible(true)}>
          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Vilnius
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-03-04
            </DataTable.Cell>
          </DataTable.Row>
          </TouchableOpacity>
          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Vilnius - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-02
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-08
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Klaipėda - Kaunas
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-03-04
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Vilnius
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-03-04
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Vilnius - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-02
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-08
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Klaipėda - Kaunas
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-03-04
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Vilnius - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-02
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-08
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Klaipėda - Kaunas
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-03-04
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Vilnius - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-02
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-08
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Vilnius - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>3.85</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-02
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Kaunas - Klaipėda
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-04-08
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={{ marginRight: 20 }}>
              Klaipėda - Kaunas
            </DataTable.Cell>
            <DataTable.Cell>4.25</DataTable.Cell>
            <DataTable.Cell style={{ marginRight: -50 }}>
              2022-03-04
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  button_past: {
    backgroundColor: "#B8B8B8",
    height: 70,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
  },

  container: {
    paddingTop: 40,
  },
});
