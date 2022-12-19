import * as React from "react";
import { Button, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { YourRidesScreen } from "./Screens/YourRidesScreen";
import { AddRideScreen } from "./Screens/AddRideScreen";
import { SearchScreen } from "./Screens/SearchScreen";
import { StackRouter } from "react-navigation";
import { YourRidesScreen_CurrentRides } from "./Screens/YourRidesScreen_CurrentRides";
import { MainMenu } from "./Screens/MainMenu";
import { Log_in_page } from "./Screens/Log_in_page";
import { Sign_up_page } from "./Screens/Sign_up_page";
import { Forgot_password } from "./Screens/Forgot_password";
import { Ride_selection } from "./Screens/Ride_selection";
import { Client_pick_up } from "./Screens/Client_pick_up";
import { Driver_pick_up } from "./Screens/Driver_pick_up";
import { Help } from "./Screens/Help";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Search") {
            iconName = focused ? "search-outline" : "search-outline";
          } else if (route.name === "Add ride") {
            iconName = focused ? "add-circle-outline" : "add-circle-outline";
          } else if (route.name === "Your rides") {
            iconName = focused ? "car-outline" : "car-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-outline" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1B3DD6",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add ride" component={AddRideScreen} />
      <Tab.Screen name="Your rides" component={YourRidesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={MainMenu}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="YourRidesScreen_CurrentRides"
          component={YourRidesScreen_CurrentRides}
        />
        <Stack.Screen name="Log_in_page" component={Log_in_page} />
        <Stack.Screen name="Sign_up_page" component={Sign_up_page} />
        <Stack.Screen name="Forgot_password" component={Forgot_password} />
        <Stack.Screen name="Ride_selection" component={Ride_selection} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
