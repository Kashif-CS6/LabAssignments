import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";

const Loginform = ({navigation}) => {
const [nam,setnam]=useState("");
    const Login=()=>{
      
        navigation.navigate('Profile');

    }
    return (
        <View style={styles.mianContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>You can reach us anytime</Text>
            <View style={styles.inputContianer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput style={styles.inputstyle} onTextChange={(e)=>{setnam(e)}} autoCapatilize="none" autoCorrect={false}></TextInput>
                <Text style={styles.labels}>Enter Your Password</Text>
                <TextInput style={styles.inputstyle} autoCapatilize="none" autoCorrect={false} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={styles.LoginButton} onPress={()=>Login()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>If you doesn't have Account, <TouchableOpacity><Text style={{color:'blue'}} onPress={()=>{navigation.navigate('Project')}}>Sign Up.</Text></TouchableOpacity></Text>
            </View>
        </View> 



    );
};

const styles = StyleSheet.create({
    mianContainer: {
        flex:1,
        alignContent: "center",
        borderWidth:1,
        borderColor: "rgba(0,0,0,0.3)",
        
        alignItems: "center",
        height: "110%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "rgb(112, 246, 181)",
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        fontFamily: "bold",
    },
    discription: {
        fontSize: 20,
        color: "7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
        fontFamily: "regular",
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: "regular",
    },
    inputstyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: "regular",
        fontSize: 18,
        borderRadius:12,
    },
    LoginButton:{
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal:15,
        paddingVertical: 7,
        borderRadius:12,
        width:"23",
        height: "60",
        flex:1,
        alignContent:"center",
        alignItems:"center",
        backgroundColor: "rgb(0, 139, 255)"

    }

})
export default Loginform;