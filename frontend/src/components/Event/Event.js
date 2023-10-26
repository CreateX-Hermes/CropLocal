import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Colors } from '../../Styles.js';
import { useNavigation } from '@react-navigation/native';
import { EventPage } from '../../pages/EventPage/EventPage.js';
import NavigationButton from '../NavigationButton/NavigationButton';


export const Event = (props) => {
    const navigation = useNavigation();

    return (
        <NavigationButton style={styles.nav} onPress={() => navigation.navigate('EventPage', {...props.data})}>
            <View style={styles.container}>
            <Image style={styles.event} source={props.data.image}/>
            <View style={styles.header}>
                <Text style={styles.name}>{props.data.name}</Text>
                <View style={styles.location}>
                    <Image style={styles.icon} source={require('../../assets/wlocation.png')} />
                    <Text style={styles.locationName}>{props.data.location}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.segment}>
                    <Image style={styles.label} source={require('../../assets/calender.png')} />
                    <Text style={styles.info}>{`${props.data.startDate} - ${props.data.endDate}`}</Text> 
                </View>
                <View style={styles.row}>
                    <View style={styles.segment}>
                        <Image style={styles.label} source={require('../../assets/clock.png')} />
                        <Text style={styles.info}>{`${props.data.startTime} - ${props.data.endTime}`}</Text>
                    </View>
                    <View style={styles.segment}>
                        <Image style={styles.stand} source={require('../../assets/store2.png')} />
                        <Text style={styles.info}>{`${props.data.stands} stands`}</Text>
                    </View>
                </View>
            </View>
            </View>
        </NavigationButton>
    )
}
const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'transparent'
    },
    container: {
        width: '100%',
        height: 250,
        borderRadius: '20',
        marginTop: 30
    },
    label: {
        width: 25,
        height: 25
    },
    stand: {
        width: 25,
        height: 30
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    event: {
        height: 125,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    icon: {
        width: 10,
        height: 16
    },
    header: {
        marginTop: 50,
        marginLeft: 25,
        position: 'absolute',
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    locationName: {
        color: 'white',
        fontSize: 15,
        fontWeight: 500,
        marginLeft: 5
    },
    name: {
        color: 'white',
        fontWeight: 500,
        fontSize: 20,
    },

  content: {
    width: '100%',
    height: 125,
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  segment: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 15,
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    marginLeft: 5,
    height: 20,
  },
});
