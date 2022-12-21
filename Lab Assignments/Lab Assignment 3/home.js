import React from "react";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
 
export default function home({ navigation }){
  const [Name, setName] = useState("");
  const [Email, setEmaiL] = useState("");
  useEffect(() => {
    GetData();
    GetName();
  });
 
  const GetName = async () => {
    const getName = await AsyncStorage.getItem("name");
    console.log("",getName)
    setName(getName);
  };
 
  const GetData = async () => {
    const getEmail = await AsyncStorage.getItem("email");
    console.log("",getEmail)
    setEmaiL(getEmail);
  };
  return (
    <View style={{backgroundColor:'red'}}>
      <Text
        style={{
        //   padding: 10,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Home Page
      </Text>
      <View
        style={{
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 15,
          textAlign: "center",
          margin: 40,
          marginTop: 20,
          marginBottom: 20,
          padding: 20,
          height: 450,
        }}
      >
        <Text style={{textAlign:'left',fontSize:15,margin:110,marginBottom:10,marginTop:10,borderRadius:15,backgroundColor:'white', padding:5,fontFamily:'italic'}}>User Info</Text>
        <View style={{borderWidth:1,borderRadius:55,padding:50,backgroundColor:'lightgrey'}}>
        <Text style={{fontSize:17,}}>UserName: {Name} </Text>
        <Text style={{fontSize:17,}}>Email: {Email} </Text></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textsheet: {
    padding: 40,
    marginTop: 40,
  },
});
 
 
