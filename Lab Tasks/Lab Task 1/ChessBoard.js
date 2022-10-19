import React from 'react';
import {
    StyleSheet, View, 
  
  } from 'react-native';
  
  
  
  export default function ChessBoard() {
  
    return (
  
        <View style={styles.Box} >
          <View style={styles.black} />
          <View style={styles.white} />
          
  
          <View style={styles.black} />
          <View style={styles.white} />
          
  
          <View style={styles.black} />
          <View style={styles.white} />
          
  
          <View style={styles.black} />
          <View style={styles.white} />
  
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.black} />
          <View style={styles.white} />
          <View style={styles.black} />
          <View style={styles.white} />
          
          <View style={styles.black} />
          <View style={styles.white} />
          
          <View style={styles.black} />
          <View style={styles.white} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
  
  
          <View style={styles.black} />
          <View style={styles.white} />
          
  
          <View style={styles.black} />
          <View style={styles.white} />
          
  
          <View style={styles.black} />
          <View style={styles.white} />
          
  
          <View style={styles.black} />
          <View style={styles.white} />
  
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.black} />
          <View style={styles.white} />
          <View style={styles.black} />
          <View style={styles.white} />
          
          <View style={styles.black} />
          <View style={styles.white} />
          
          <View style={styles.black} />
          <View style={styles.white} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          
          <View style={styles.white} />
          <View style={styles.black} />
          <View style={styles.white} />
        <View style={styles.black} />
        
        <View style={styles.white} />
        <View style={styles.black} />
    
        
        
      </View>
    

  );}




const styles = StyleSheet.create({
 
  Box:{
    height:480,
    width:480,
    backgroundColor:"grey",
    borderStyle:'solid',
    flexDirection:"row",
    flexWrap:"wrap",
    alignContent:"flex-start",
    
  },
  black:{
    backgroundColor:"black",
    width:60,
    height:60,
  },
  white:{
    backgroundColor:"white",
    width:60,
    height:60,
   
  }
});