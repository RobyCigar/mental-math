import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheets } from 'react-native';

export default GameOverScreen = () => {
	return (
		<View>
			<Text style={styles.title}>Game Over</Text>
			<Text>Play Again</Text>
			<Text>Back</Text>
		</View>
	)
}

const styles = StyleSheets.create({
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 20
	},

	text: {
		fontSize: 18,
		margin: 10
	}
})