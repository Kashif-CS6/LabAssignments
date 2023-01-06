import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { useState,useEffect } from 'react';
import * as Location from 'expo-location';
export default function Profile()  {
  const [fajr,setfajr]=useState();
  const [dhur,setdhur]=useState();
  const [asar,setasar]=useState();
  const [magrib,setmagrib]=useState();
  const [isha,setisha]=useState();
  const Get_Address=async()=>{
  
    let {status}=await Location.requestForegroundPermissionsAsync();
    if(status!=="granted"){
      console.log("Please grant location permissions");
    }
    let currentLocation=await Location.getCurrentPositionAsync({});
    console.log(currentLocation.coords.latitude);
    console.log(currentLocation.coords.longitude);
    const response = await fetch('http://api.aladhan.com/v1/calendar?latitude='+currentLocation.coords.latitude+'&longitude='+currentLocation.coords.longitude+'&method=2&month=01&year=2023.json');
    const json = await response.json();
    console.log(json) 
    var timings=json.data.filter((val,i)=>{
      if(val.date.readable=='06 Jan 2023'){
      return val}
    })
    
   setfajr(timings[0].timings.Fajr);
    setdhur(timings[0].timings.Dhuhr)
    setasar(timings[0].timings.Asr)
    setmagrib(timings[0].timings.Maghrib)
    setisha(timings[0].timings.Isha)
    
  }
  useEffect(()=>{
    Get_Address();
  })
    return (
     <View><Text>Fajar: {fajr}</Text>
     <Text>Dhuhr: {dhur}</Text>
     <Text>Asar: {asar}</Text>
    <Text>Magrib: {magrib}</Text>
   <Text>Isha: {isha}</Text> </View>
    )
 
}
