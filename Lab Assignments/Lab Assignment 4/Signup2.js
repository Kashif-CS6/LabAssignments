import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import navigation from './Navigation';

export default function Signup2({ navigation }) {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.Container}>
                             
                    <View style={styles.Mulx}>
                    <Text style={styles.Mulviews}>Sign Up Form</Text>
                </View>
                    <View style={styles.Mulx}>
                        <Text>Enter Your Name:</Text>
                        <TextInput style={styles.Inputtxt} />
                    </View>
                    <View style={styles.Mulx}>
                        <Text>Enter Your Password:</Text>
                        <TextInput style={styles.Inputtxt} />
                    </View>
                    <View style={styles.Mulx}>
                        <Text>Confirm Your Password:</Text>
                        <TextInput style={styles.Inputtxt} />
                    </View>
                    <View style={styles.Mulx}>
                        <Text>Enter Your Email:</Text>
                        <TextInput style={styles.Inputtxt} />
                    </View>
                    <View style={styles.Mulx}>
                        <Text>Enter Your Contact:</Text>
                        <TextInput style={styles.Inputtxt} />
                    </View>
                    <View style={styles.Mulx}>
                        <TouchableOpacity style={styles.Buttonk} onPress={() => { navigation.navigate('Profile') }}>
                            <Text style={{ color: 'rgb(255,255,255)' }}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
       
    )

}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        //flexDirection: 'row',
        height: 400,
        width: 200,
        borderWidth: 1,
        borderColor: 'block',
        borderRadius: 60,
        backgroundColor: 'rgb(221,255,221)'
    },
   
    Signcon: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    Mulx: {
        flex: 1,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Mulviews: {

        marginTop: 15,

        fontSize: 22,
        fontWeight: 'bold'
    },
    Inputtxt: {
        borderWidth: 1,
        borderColor: 'block',
        marginLeft: 10,
        width: 120,
        height: 25,
        borderRadius: 8
    },
    Buttonk: {
        borderWidth: 1,
        borderColor: 'block',
        marginLeft: 10,
        width: 150,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

        backgroundColor: 'blue'
    }


})


