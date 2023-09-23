import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import NavigationButton from '../NavigationButton/NavigationButton';
import { Colors } from '../../Styles';

const Stand = () => {

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
    
    return (
        <NavigationButton style={{flex: 0, flexDirection: 'row', width: 350, height: 160, borderRadius: 20, marginVertical: '1.5%'}}>
            <Image source={require('../../assets/tempProfilePic.png')} style={{width: 100, height: 100}}></Image>
            <View style={{flex: 2, width: 200, height: 150, flexDirection: 'column', marginHorizontal: '5%', paddingVertical: '3%'}}>
                <Text style={styles.HEADING_TEXT}>Larry's Lemons</Text>
                <Text style={styles.SUBHEADING_TEXT}>Produce</Text>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', paddingTop: '2%'}}>
                    <Image source={require('../../assets/star.png')} style={{width: 15, height: 15}}/>
                    <Text style={styles.STAR_TEXT}>4.9</Text>
                </View>

                <Text style={styles.MAIN_TEXT}>Hello, I’m Larry and I sell Lemons. I have around 5 lemon trees in my backyard that I love to pick from when they are ripe. Buy some lemons from me if you are looking...</Text>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginTop: '2%'}}>
                    <Image source={require('../../assets/LocationIcon.png')} style={{width: 10, height: 15}}/>
                    <Text style={styles.LOCATION_TEXT}>John's Creek, GA</Text>
                </View>
            </View>
            
        </NavigationButton>
    );
}

export default Stand