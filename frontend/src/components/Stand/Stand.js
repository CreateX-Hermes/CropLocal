import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import NavigationButton from '../NavigationButton/NavigationButton';
import { Colors } from '../../Styles';
import { useNavigation } from '@react-navigation/native';

const Stand = (props) => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const styles = StyleSheet.create({
        HEADING_TEXT: {
            fontSize: 17,
            fontWeight: 'bold'
        },
        SUBHEADING_TEXT: {
            fontSize: 10,
            fontWeight: 500,
            color: Colors.DarkGray
        },
        STAR_TEXT: {
            paddingLeft: '3%',
            fontSize: 12,
            fontWeight: 600,
            color: Colors.RATING
        },
        MAIN_TEXT: {
            paddingTop: '4%',
            fontSize: 10,
            fontWeight: 300,
            color: Colors.Black
        },
        LOCATION_TEXT: {
            marginLeft: '2%',
            fontSize: 10,
            fontWeight: 'bold',
            color: Colors.Black
        }
    })

    let {_id, standName, city, distance, rating, description, ownerName, picture} = props.data

    
    if (rating == -1) {
        rating = "Not Rated Yet"
    }

    distance = Math.round(distance / 1609 * 10) / 10

    return (
        <NavigationButton style={{flex: 0, flexDirection: 'row', width: 350, height: 160, borderRadius: 20, marginVertical: '1.5%'}} onPress={() => navigation.navigate('Seller', {...props.data})}>
            <Image source={{uri: picture}} defaultSource={require('../../assets/market_stand.png')} style={{width: 100, height: 100, borderRadius: '50%'}}></Image>
            <View style={{flex: 2, width: 200, height: 150, flexDirection: 'column', marginHorizontal: '5%', paddingVertical: '3%'}}>
                <Text style={styles.HEADING_TEXT}>{standName}</Text>
                <Text style={styles.SUBHEADING_TEXT}>{ownerName}</Text>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', paddingTop: '2%'}}>
                    <Image source={require('../../assets/star.png')} style={{width: 12, height: 12}}/>
                    <Text style={styles.STAR_TEXT}>{rating}</Text>
                </View>

                <Text style={styles.MAIN_TEXT}>{description}</Text>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: 'auto'}}>
                    <Image source={require('../../assets/LocationIcon.png')} style={{width: 10, height: 15}}/>
                    <Text style={styles.LOCATION_TEXT}>{distance} Miles</Text>
                </View>
            </View>
            
        </NavigationButton>
    );
}

export default Stand