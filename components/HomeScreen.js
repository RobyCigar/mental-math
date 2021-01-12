import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';





export default function HomeScreen({navigation, data}) {


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
    <View style={styles.container}>
      {/* title here */}
      <View>
        <Text style={styles.title}>Mental{"\n"}Math</Text>
      </View>
      
      <TouchableOpacity onPress={ToGame} style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Start Game</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ToLevels} style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Levels</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ToAbout} style={styles.textContainer}>
        <View>
          <Text style={styles.text}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.textContainer}>
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
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'quicksand',
    marginTop: '14%',
    marginBottom: '8%',

  },

  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'quicksand',
    color: '#fff',
    padding: 16,
    borderColor: '#bbb'
  },

  textContainer: {
    borderRadius: 10,
    backgroundColor: '#6B3A73',
    width: '70%',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  container: {
    backgroundColor: '#161616',
    height: '100%'
  }
})