import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Colors } from '../../Styles.js';

export const Event = (props) => {
    return (
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
                </View>
                <View>
                    <View style={styles.segment}>

                    </View>
                    <View style={styles.segment}>

                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        width: 30,
        height: 30
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
    }
})