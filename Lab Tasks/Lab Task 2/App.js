import { StatusBar } from 'expo-status-bar';
import { View,Text,StyleSheet  } from 'react-native';
import StudentRecord from './Components/StudentRecord'


export default function App() {
  return (

       <View style={styles.container}>
      <Text>
       <StudentRecord/>
      </Text>
      
      <StatusBar style="auto" />
     </View>
     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});