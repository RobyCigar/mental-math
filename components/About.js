import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function About({navigation}) {

	const goHome = () => {
		navigation.navigate("HomeScreen")
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goHome}>
				<Text style={styles.backBtn}><Image source={require('../assets/back.png')} /></Text>
			</TouchableOpacity>
			<Text style={styles.title}>What is Mental Math?</Text>
			<Text style={styles.desc}>Mental calculation consists of arithmetical calculations using only the human brain, with no 
			help from any supplies (such as pencil and paper) or devices such as a calculator. People use mental calculation when computing tools are not available, 
			when it is faster than other means of calculation (such as conventional educational institution methods), or even in a competitive context. 
			Mental calculation often involves the use of specific techniques devised for specific types of problems.[1] People with unusually high ability to perform mental calculations are called mental calculators or lightning calculators.
			Many of these techniques take advantage of or rely on the decimal numeral system. Usually, the choice of radix is what determines which method or methods to use. -Wikipedia
			</Text>

		</View>
	)
}

const styles = StyleSheet.create({

	container: {
		backgroundColor: '#161616',
		height: '100%'
	},

	backBtn: {
		margin:'8%'
	},

	title: {
		fontFamily: 'quicksand',
		color: 'white',
		textAlign: 'center',
		fontSize: 24,
		margin: 20
	},

	desc: {
		color: 'white',
		margin: 20,
		fontSize: 17,
		fontFamily: 'quicksand'
	},

	backBtn: {
		marginTop:'9%',
		marginLeft: 10
	},
})