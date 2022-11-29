import { View,Text,StyleSheet  } from 'react-native';
import Question4_C from './Components/Question4_c';
export default function App() {
  return (
       <View style={styles.container}> 
       <Text>
       <Question4_C value1="24" value2="45"/>


       </Text>
       

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
