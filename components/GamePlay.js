import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function GamePlay({navigation, data}) {
	const [level, setLevel] = useState(0);
	const [userAnswer, setUserAnswer] = useState(false)
  	const [value, onChangeText] = useState('');
  	const [score, setScore] = useState(0)

	let question = data[level].question;
	let answer = data[level].answer;



	const submitHandler = () => {
		if(value == answer) {
			console.log("bnar")
			setLevel(level + 1);
		} else {
			console.log("ngk bnar")
		}
		if(question == "selesai") {
			console.log("dah selese gamenya");
		}
	}

	const goHome = () => {
		navigation.navigate("HomeScreen")
	}


	return (
		<View>
			<TouchableOpacity onPress={goHome}>
				<Text style={styles.backBtn}> Back </Text>
			</TouchableOpacity>
			

			<View>
				<Text style={styles.text}>level {level + 1}</Text>
				<Text style={styles.text}>{question}</Text>
			</View>


		    <TextInput
		      style={styles.input}
		      onChangeText={text => onChangeText(text)}
		      value={value}
		    />

			<TouchableOpacity onPress={submitHandler}>
				<Text style={styles.submit}>Submit</Text>
			</TouchableOpacity>

			{(value !== answer && level > 0) ? <Text style={styles.text}>Correct!!</Text> : null }
		
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 10,
		fontSize: 18
	},

	backBtn: {
		margin:'8%'
	},

	input: {
		height: 30,
		margin: 40,
		borderWidth: 0.5,
		borderColor: 'gray',
		borderRadius: 5
	},

	submit: {
		textAlign: 'center',
		fontSize: 20
	}

})

	// const storeData = async (value) => {
	//   try {
	//     await AsyncStorage.setItem('@storage_Key', value)
	//   } catch (e) {
	//     // saving error
	//     console.log(error)
	//   }
	// }

	// const getData = async () => {
	//   try {
	//     const value = await AsyncStorage.getItem('@storage_Key')
	//     if(value !== null) {
	//       // value previously stored
	//       setStored(value);
	//     }
	//   } catch(e) {
	//     // error reading value
	//     console.log('error')
	//   }
	// }
