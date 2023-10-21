import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { Colors } from '../../Styles.js';
import { Event } from './Event.js';

export const EventList = () => {
    const dummyData = [
        {
            name: 'Christkindl Market',
            location: 'Atlanta, GA',
            image: require('./christmas.png'),
            startDate: 'Tue, June 21 ',
            endDate: 'Sun, June 26',
            startTime: '6:00',
            endTime: '8:00 pm',
            stands: 30
        },
        {}
    ]
    ;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.main}>
                <Event data={dummyData[0]}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 60
    },
    main: {
        height: '100%'
    }
})