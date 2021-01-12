import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Modal, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default function Levels({navigation, data}) {
	const goHome = () => {
		navigation.navigate("HomeScreen")
	}

	const goGamePlay = () => {
		navigation.navigate("GameScreen")
	}

	const [modalVisible, setModalVisible] = useState(false);

	return (
	    <SafeAreaView style={styles.container}>
	      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator ={false}>
				<TouchableOpacity onPress={goHome}>
					<Text style={styles.backBtn}><Image source={require('../assets/back.png')} /></Text>

				</TouchableOpacity>

				<Text style={styles.title}>Levels</Text>
				<View style={styles.level}>

			{/* some javascript crap */}
					{data.map((level, index) => 
					<View key={index + 1}>
						<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
						  Alert.alert("Modal has been closed.");
						}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text style={styles.currentLevel}>{level.question}</Text>
						            <TouchableHighlight
						               style={styles.hide}
						              onPress={() => {
						                setModalVisible(!modalVisible);
						              }}
						            >
						              <Text style={styles.textStyle}>Hide</Text>
						            </TouchableHighlight>
					            </View>
						    </View>

						</Modal>

						<TouchableOpacity 
				        onPress={() => {
				          setModalVisible(true);
				        }}
						>
							<Text style={styles.text}>{index + 1}  </Text>
						</TouchableOpacity>
					</View>
					)}
				</View>
	      </ScrollView>
	    </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	backBtn: {
		marginTop:'9%',
		marginLeft: 10
	},

	title: {
		textAlign: 'center',
		fontSize: 24,
		margin: 20,
		fontFamily: 'quicksand',
		color: 'white'
	},

	text: {
		textAlign: 'center',
		color: 'white',
		padding: 30,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 30,
		fontSize: 24,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 14,
		fontFamily: 'quicksand'
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
		width: '100%',
		backgroundColor: '#161616'
	},

	scrollView: {
		marginHorizontal: 20,
	},

	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},

	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		paddingTop: 50,
		paddingLeft: 60,
		paddingRight: 60,
		paddingBottom: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},

	openButton: {
		backgroundColor: "red",
		marginBottom: 30,
		borderRadius: 20,
		elevation: 2
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",

	},

	hide: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 30,
		paddingLeft: 30,
		backgroundColor: "#6B3A73",
		borderRadius: 10,
		marginBottom: 20
	},

	currentLevel: {
		fontFamily: 'quicksand',
		marginBottom: 20,
		fontSize: 30

	}
})