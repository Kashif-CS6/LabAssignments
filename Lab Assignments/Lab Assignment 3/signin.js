import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,ImageBackground
} from "react-native";
export default function signin({ navigation }){
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
 
 
  const GetData = async () => {
     const getemail= await AsyncStorage.getItem("email");
     const getpassword = await AsyncStorage.getItem("pass");
      if( (Email===getemail )&&(Password===getpassword)){
        navigation.navigate('Home Page');
      }else{
        navigation.navigate('signin')
      }
   
    }
 
  return (
    <View style={{ backgroundColor: "gray" }}>
      <Text
        style={{
          padding: 10,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "",
        }}
      >
        Login Page
      </Text>
       
      <View
        style={{
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 15,
          backgroundColor: "lightgrey",
          textAlign: "center",
          margin: 40,
          marginTop: 20,
          marginBottom: 20,
          padding: 20,
          height: 300,
        }}
        >
        <Text style={styles.genstyle}>
          Email{" "}
          <TextInput
          onChangeText={(Email)=>setEmail(Email)}
            style={{
              fontSize: 15,
              margin: 5,
              marginLeft: 90,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Enter Email"
          ></TextInput>
        </Text>
        <Text style={styles.genstyle}>
          Password{""}
          <TextInput
          onChangeText={(Password)=>setPassword(Password)}
            style={{
              fontSize: 15,
              margin: 5,
              marginLeft: 60,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Enter Password"
            secureTextEntry={true}
          ></TextInput>
        </Text>
        <TouchableOpacity onPress={() => {{GetData()}}}>
          <Text
            style={{
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            Login
          </Text>
          </TouchableOpacity>
      </View>
 
      <View>
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            fontSize: 15,
            padding: 0,
            marginBottom: 5,
          }}
        >
          Signup if you dont have an account:
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 5,
              marginBottom: 20,
            }}
          >
            Go to SignUp Form
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            fontSize: 15,
            padding: 0,
            marginBottom: 5,
          }}
        >
          Go To Home Page
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home Page")}>
        <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 5,
              marginBottom: 40,
            }}
          >
            Go to Home Page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  genstyle: {
    margin: 10,
    marginRight: 0,
    marginLeft: 0,
    fontSize: 18,
  },
  Button: {
    padding: 40,
  },
});
 
