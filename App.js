import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Quicksand_700Bold as quicksand } from '@expo-google-fonts/quicksand';


// Import my own components
import GamePlay from './components/GamePlay';
import HomeScreen from './components/HomeScreen';
import About from './components/About';
import GameOver from './components/GameOver';
import {data} from './components/Stage/Stage';


const Stack = createStackNavigator();

export default function App() {
  const [score, setScore] = useState(0);

  let [fontsLoaded] = useFonts({
    quicksand
  })

  if(!fontsLoaded) {
    return(
      <View>
        <Text style={{alignItems: 'center', marginTop: '50%'}}>Trying to load font</Text>
      </View>
    )
  }

  const addScore = () => {
    setScore(score + 20);
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        > 
        
        <Stack.Screen name="HomeScreen">
          {props => <HomeScreen {...props} data={data} />}
        </Stack.Screen>

        <Stack.Screen name="GameScreen">
          {props => <GamePlay {...props} score={score} setScore={setScore} data={data}/>}
        </Stack.Screen>

        <Stack.Screen name="AboutScreen" component={About}/>

        <Stack.Screen name="GameOver">
          {props => <GameOver {...props} data={data} setScore={setScore} score={score} />}
        </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({

});
