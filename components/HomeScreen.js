import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';


export default function HomeScreen({navigation, data}) {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Montserrat_400Regular
  })

  if(!fontsLoaded) {
    return(
      <View><Text>Trying to load font</Text></View>
    )
  }

  const ToGame = () => {
    navigation.navigate('GameScreen')
  }

  const ToLevels = () => {
    navigation.navigate("LevelsScreen");
  }

  const ToAbout = () => {
    navigation.navigate("AboutScreen")
  }

  return (
    <View>
      {/* title here */}
      <View>
        <Text style={styles.title}>Mental{"\n"} Math</Text>
      </View>
      
      <TouchableOpacity onPress={ToGame}>
        <View>
          <Text style={styles.text}>Start Game</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ToLevels}>
        <View>
          <Text style={styles.text}>Levels</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ToAbout}>
        <View>
          <Text style={styles.text}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Text style={styles.text}>Rate Us</Text>
        </View>
      </TouchableOpacity>
  
    </View>

  )
}


const styles = StyleSheet.create({

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Montserrat_400Regular',
    marginTop: '14%',
    marginBottom: '8%'

  },

  text: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 16,
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10
  },
})