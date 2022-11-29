import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Question4_C(props){
    let a=props.value1;
    let b=props.value2;
    let sum=Number(a)+Number(b);
    return(
        <View>
            <Text>The Sum of {props.value1} and {props.value2} = {sum}</Text>
        </View>
    );
}
