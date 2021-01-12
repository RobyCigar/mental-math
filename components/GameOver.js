import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function GameOver({navigation, score, setScore}) {
	const goHome = () => {
		navigation.navigate("HomeScreen")
		setScore(0)
	}

	const playAgain = () => {
		navigation.navigate("GameScreen")
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goHome}>
				<Text style={styles.backBtn}><Image source={require('../assets/back.png')} /></Text>
			</TouchableOpacity>
			
			<Text style={styles.title}>Game Over</Text>
			<Text style={styles.text}>Your score is {score}</Text>
			
			<TouchableOpacity onPress={goHome}>
				<Text style={styles.text}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={playAgain}>
				<Text style={styles.text}>Play Again</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		height: '100%'
	},

	title: {
		fontSize: 30,
		fontFamily: 'quicksand',
		textAlign: 'center',
		margin: 20,
		color: 'white',
	},

	text: {
		fontSize: 18,
		margin: 10,
		color: 'white',
		textAlign: 'center',
		fontFamily: 'quicksand'
	},

	backBtn: {
		marginTop:30,
		marginLeft: 15
	},
})