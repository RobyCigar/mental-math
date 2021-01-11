import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Import my own components
import GamePlay from './components/GamePlay';
import HomeScreen from './components/HomeScreen';
import LevelsScreen from './components/Levels';
import About from './components/About';
import {data} from './components/Stage/Stage';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

const Stack = createStackNavigator();



export default function App() {

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
          {props => <GamePlay {...props} data={data}/>}
        </Stack.Screen>
        
        <Stack.Screen name="LevelsScreen">
          {props => <LevelsScreen {...props} data={data}/>}
        </Stack.Screen>

        <Stack.Screen name="AboutScreen" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({

});
