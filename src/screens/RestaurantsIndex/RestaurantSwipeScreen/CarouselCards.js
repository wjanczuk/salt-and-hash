import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import { useNavigation } from '@react-navigation/native';

let result;

export default CarouselCards = (props) => {
	const navigation = useNavigation();
	const { restaurantsData, eventId } = props
	const [index, setIndex] = React.useState(0);

	const isCarousel = React.useRef(null);


	return (
		<SafeAreaView style={{backgroundColor: '#ffffff'}}>
		<View style={{height: 425, marginTop: 25}}>
		<Carousel
				layout={'stack'}
				layoutCardOffset={25}
				ref={isCarousel}
				data={restaurantsData}
				renderItem={({ item }) => (
					<CarouselCardItem item={item} index={index} eventId={eventId}  />
				)}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				onSnapToItem={(index) => setIndex(index)}
				useScrollView={true}
				containerCustomStyle={{
					flexGrow: 0
				  }}
			/>
<<<<<<< HEAD

			<Pagination
=======
		</View>
		<View style={styles.buttonContainer}>
		<Pagination
>>>>>>> 4dd8127fd619fd9263c781d33242f9b2d86f6bdc
				dotsLength={restaurantsData.length}
				activeDotIndex={index}
				carouselRef={isCarousel}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: '#e6a80c'
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				tappableDots={true}
			/>
<<<<<<< HEAD
				<Button title='Submit'
				onPress={() => navigation.navigate('Single Event')} />

=======
			
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Single Event')}>
				<Text style={styles.buttonText}>Finish Voting</Text>
			</TouchableOpacity>
>>>>>>> 4dd8127fd619fd9263c781d33242f9b2d86f6bdc
		</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
	  backgroundColor: '#ffffff',
	  flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignContent: 'center',
	},
	buttonContainer: {
        alignItems: 'center',
		justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {
		backgroundColor: '#e95531',
		height: 48,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		width: 275
    },
    buttonText: {
        color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
    }
})
