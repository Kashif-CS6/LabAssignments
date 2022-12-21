import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function signup  ({ navigation }) {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
 
  const setData = async() => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("pass", password);
      navigation.navigate('signin');
    } catch (e) {
      console.log("", e);
    }
  }
  return (
    <View
      style={{ backgroundColor: "gray", margin: 15 }}
    >
      <Text
        style={{
          padding: 10,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "",
        }}
      >SignUp Form</Text>
 
      <View
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          margin: 40,
          marginTop: 20,
          marginBottom: 15,
          padding: 20,
          height: 400,
        }}
      >
        <Text style={styles.genstyle}>
          UserName{" "}
          <TextInput onChangeText={(name)=>setName(name) }
            style={{
              fontSize: 15,
              margin: 5,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
              marginLeft: 50,
            }}
            placeholder="Enter UserName"
          ></TextInput>
        </Text>
        <Text style={styles.textsheet}>
          Email{" "}
         
          <TextInput
          onChangeText={(email)=>setEmail(email) }
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
          Password{" "}
          <TextInput
          onChangeText={(password)=>setPassword(password)}
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
        <TouchableOpacity onPress={() => {setData()}}>
          <Text
            style={{
              backgroundColor: "lightblue",
              color: "white",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            SignUp
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
          If you already have an account
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 2,
              marginBottom: 40,
            }}
          >Go to Login Form</Text>
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
    fontSize: 15,
  },
});
 
