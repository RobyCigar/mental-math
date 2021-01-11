import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Levels({navigation, data}) {
	const goHome = () => {
		navigation.navigate("HomeScreen")
	}

	const goGamePlay = () => {
		navigation.navigate("GameScreen")
	}

	return (
	    <SafeAreaView style={styles.container}>
	      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator ={false}>
				<TouchableOpacity onPress={goHome}>
					<Text style={styles.backBtn}><Image source={require('../assets/back.png')} /></Text>

				</TouchableOpacity>

				<Text style={styles.title}>Levels</Text>
				<View style={styles.level}>
					{data.map((level, index) => 
						<TouchableOpacity onPress={goGamePlay}>
								<Text style={styles.text}>{index + 1}  </Text>
						</TouchableOpacity>
					)}
				</View>

	      </ScrollView>
	    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	backBtn: {
		marginTop:'8%',
		marginLeft: 0
	},

	title: {
		textAlign: 'center',
		fontSize: 24,
		margin: 20
	},

	text: {
		textAlign: 'center',
		padding: 30,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 30,
		fontSize: 24,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5
	},

	level: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	column: {
		flex: 3,
		flexDirection: 'column',
	},

	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		width: '100%'
	},

	scrollView: {
		marginHorizontal: 20,
	}
})