import { View,Text,StyleSheet,Button,TouchableOpacity  } from 'react-native';
import {React,useState,useEffect} from 'react';
//import Question4_C from './Components/Question4_c';
export default function App() {
  const [counter,setCount]=useState(0);
  function Watcher(){
    console.log(`you clicked ${counter} times`);
  }
  useEffect((Watcher));
  return (
    
       <View style={styles.container}> 
       <TouchableOpacity style={{ backgroundColor:'blue',padding:10,borderRadius:9}} onPress={()=>setCount(counter+1)}><Text style={{fontWeight:'bold',color:'white'}}>count</Text></TouchableOpacity>
       <Text>{counter}</Text>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
