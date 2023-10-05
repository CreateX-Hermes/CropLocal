import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Colors } from '../../Styles.js';

export const Review = (props) => {
    return (
        <View style={styles.review}>
            <Image style={styles.reviewPic} source={require('../../assets/review.png')}/>
            <View style={styles.info}>
                <Text style={styles.heading}>{props.name}</Text>
                <View style={styles.ratingContainer}>
                    <Image resizeMode='contain' style={styles.icon} source={require('../../assets/star.png')}/>
                    <Text style={styles.rating}>{props.rating}</Text>
                </View>
                <Text>{props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    review: {
        width: '90%',
        height: '10%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20
    },
    ratingContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3
    },
    icon: {
        width: 13,
        height: 13
    },
    rating: {
        fontWeight: '600',
        color: Colors.RATING,
        marginLeft: 3,
    },
    heading: {
        fontSize: 17,
        fontWeight: '600',
        marginTop: 10
    },
    info: {
        width: '65%',
    },
    reviewPic: {
        margin: 10,
        marginTop: 10
    }
})