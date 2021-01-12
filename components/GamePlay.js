import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function GamePlay({navigation, data, score, setScore}) {

	const [level, setLevel] = useState(0);
  	const [value, onChangeText] = useState('');
  	
  	const [life, setLife] = useState(3);

	let question = data[level].question;
	let answer = data[level].answer;

	const submitHandler = () => {
		if(value == answer) {
			console.log("bnar")
			setLevel(level + 1);
			setScore(score + 20)
		} else {
			setLife(life - 1)

			if(life == "1") {
				navigation.navigate('GameOver');
				setLife(3)
			}
		}
		if(question == "selesai") {
			console.log("dah selese gamenya");
		}
	}

	const goHome = () => {
		navigation.navigate("HomeScreen")
	}


	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<TouchableOpacity onPress={goHome}>
					<Text style={styles.backBtn}><Image source={require('../assets/back.png')} /></Text>
				</TouchableOpacity>

				<View>
					<Text style={styles.lives}>life : {life}</Text>
					<Text style={styles.score}>score : {score}</Text>	
				</View>
				<View>
					<Text style={styles.text}>Level {level + 1}</Text>
					<Text style={styles.text}>{question}</Text>
				</View>


			    <TextInput
			      style={styles.input}
			      onChangeText={text => onChangeText(text)}
			      value={value}
			      placeholder={value}
			      placeholderTextColor={'white'}
			      textAlign={'center'}
			      caretHidden={false}
			      keyboardType={'numeric'}
			    />

				<TouchableOpacity onPress={submitHandler}>
					<View style={styles.btn}>
						<Text style={styles.submit}>Submit</Text>
					</View>
				</TouchableOpacity>

				{(value !== answer && level > 0) ? <Text style={styles.text}>Correct!!</Text> : null }
				
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
		textAlign: 'center',
		marginTop: '10%',
		fontSize: 24,
		fontFamily: 'quicksand'
	},

	backBtn: {
		marginTop:30,
		marginLeft: 15
	},

	input: {
		height: 30,
		width: '30%',
		alignSelf: 'center',
		margin: 40,
		borderBottomWidth: 1.5,
		borderColor: 'white',
		borderRadius: 5,
		fontSize: 23,
		fontFamily: 'quicksand',
		color: 'white'
	},

	btn: {
		backgroundColor: '#6B3A73',
		alignSelf: 'center',
		marginTop: 40,
		borderRadius: 8,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 30,
		paddingLeft: 30,
	},

	submit: {
		color: 'white',
		textAlign: 'center',
		fontFamily: 'quicksand',
		fontSize: 20
	},

	container: {
		backgroundColor: '#161616',
		height: '100%'
	},

	lives: {
		color: 'white',
		position: 'absolute',
		fontFamily: 'quicksand',
		top: -40,
		right: 10,
		fontSize: 20
	},

	score: {
		color: 'white',
		position: 'absolute',
		fontFamily: 'quicksand',
		top: -10,
		right: 10,
		fontSize: 20
	}

})
