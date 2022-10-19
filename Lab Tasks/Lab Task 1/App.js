import { StatusBar } from 'expo-status-bar';
import { View,Text,StyleSheet  } from 'react-native';
import ChessBoard from './Components/ChessBoard'


export default function App() {
  return (

       <View style={styles.container}>
      <Text>
       < ChessBoard/>
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