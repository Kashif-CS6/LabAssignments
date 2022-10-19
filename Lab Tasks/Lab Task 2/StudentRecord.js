import React from 'react';
import{View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-web';
export default function StudentRecord(){
    const record=[{
        id:1,
        Reg:'SP20-BCS-001',
        name:'Kashif Nabeel',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:2,
        Reg:'SP20-BCS-032',
        name:'Furqan Khan',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:3,
        Reg:'SP20-BCS-003',
        name:'Muhammad Zubair',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:4,
        Reg:'SP20-BCS-004',
        name:'Amir khan',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:5,
        Reg:'SP20-BCS-005',
        name:'Ilyas Naqvi',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:6,
        Reg:'FA19-BCS-08',
        name:'Luqman Haider',
        smester:5,
        uni:'Comsats, Attock'
    },
    {
        id:7,
        Reg:'SP20-BCS-021',
        name:'Abu Daood',
        smester:5,
        uni:'Comsats, Attock'
    },
    {
        id:8,
        Reg:'SP20-BCS-042',
        name:'Ahsan Mehmood',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:9,
        Reg:'SP20-BCS-051',
        name:'Ahmad Safiullah',
        smester:6,
        uni:'Comsats, Attock'
    },
    {
        id:10,
        Reg:'SP20-BCS-023',
        name:'Sahnawaz Saqib',
        smester:4,
        uni:'Comsats, Attock'
    },
]
return(
    <FlatList
     data={record}
     renderItem={(element)=>{
        return <Text style={styles.textStyle}>{element.item.Reg}      {element.item.name}       {element.item.uni}</Text>
    }
    
    
    }
    />


);
};
const styles=StyleSheet.create({
    textStyle:{
        fontSize:18,
    },
});