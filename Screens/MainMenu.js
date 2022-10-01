import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GoogleAuthProvider, getAuth, signInWithCredential, FacebookAuthProvider } from "firebase/auth";
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';

import { ResponseType } from 'expo-auth-session';

export function MainMenu() {
  const navigation = useNavigation();  

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
      {
        clientId: '696626332084-h92r0bab38cvcfilpni53vm30glm44se.apps.googleusercontent.com',
        },
    );
  
    React.useEffect(() => {
      if (response?.type === 'success') {
        const { id_token } = response.params;
        
        const auth = getAuth();
        const credential = GoogleAuthProvider.credential(id_token);

        signInWithCredential(auth, credential);
        navigation.navigate('Home');
      }
    }, [response]);


      const [request1, response1, promptAsync1] = Facebook.useAuthRequest({
        responseType: ResponseType.Token,

        clientId: '<1108605216421784>',
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { access_token } = response.params;
          
          const auth = getAuth();
          const provider = new FacebookAuthProvider();
          const credential = provider.credential(access_token);
          // Sign in with the credential from the Facebook user.
          signInWithCredential(auth, credential);
        }
      }, [response1]);

    
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
      <Text style={styles.Welcome}>Welcome to Ridehoo</Text>
      <Text style={styles.slogan}>Find the cheapest rides</Text>
      <Text style={styles.slogan1}>with ease!</Text>

      <Image
        source={require("../assets/main_menu_car.gif")}
        style={{
          width: 420,
          height: 240,
          alignItems: "center",
          marginTop: 5,
        }}
      />
      <Text style={styles.sign_in_with}>Sign in with:</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate("Log_in_page")}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate("Sign_up_page")}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableHighlight>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={styles.or_text}>or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View style={styles.icons}>
        <View style={styles.google}>
          <TouchableOpacity onPress={() => {
        promptAsync();
        }}>
            <Image
              source={require("../assets/google.png")}
              style={{ width: 38, height: 39 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.facebook}>
          <TouchableOpacity onPress={() => {
        promptAsync1();
        }}>
            <Ionicons name={"logo-facebook"} size={40} color={"blue"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  slogan: {
    fontSize: 20,
    alignItems: "center",
    marginTop: 15,
  },
  slogan1: {
    fontSize: 20,
    alignItems: "center",
    marginTop: 5,
  },
  Welcome: {
    fontSize: 28,
    marginTop: 60,
  },
  sign_in_with: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icons: {
    maxWidth: 400,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40,
  },
  facebook: {
    paddingLeft: 50,
  },
  google: {},
  Sign_in: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
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
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  separator: {
    borderBottomColor: "#737373",
    borderBottomWidth: 2,
    width: 300,
  },
  or_text: {
    width: 50,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
