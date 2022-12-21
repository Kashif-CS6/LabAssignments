import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import signin from "./src/signin";
import signup from "./src/signup";
import home from "./src/home";
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
  }
 
  initState() {
    return {};
  }
 
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="signup" component={signup} />
          <Stack.Screen name="signin" component={signin} />
          <Stack.Screen name="Home Page" component={home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 
