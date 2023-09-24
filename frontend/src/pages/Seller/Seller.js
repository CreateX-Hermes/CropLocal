import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../Styles';
import { Divider } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { StockItem } from '../../components/StockItem/StockItem';

export const Seller = () => {
    const [showMore, setShowMore] = useState(false);

    const text = "In this one of a kind authentic Parisian experience I will show you the what it’s like to live in the City of Lights like a true Frenchman. From my favorite restaurant and cafe, to my unforgettable overlook of the city only a few know about, this will be an experience you will never forget";

    const stock = [{
        item: "Eggs",
        price: 0.77,
        pictures: [require('../../assets/egg1.png'), require('../../assets/egg2.png')]
    },
    {
        item: "Honey",
        price: 8.99,
        pictures: []
    }]

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <Image
        source={require('./image.png')} 
      />
      <Text style={styles.title}>Urban Gardens</Text>
      <Text style={styles.subtitle}>Produce</Text>
      <View style={styles.ratingContainer}>
        <Image resizeMode='contain' style={styles.icon} source={require('../../assets/star.png')}/>
        <Text style={styles.rating}>4.93</Text>
      </View>
      
      <Text style={styles.description}>
        {showMore ? text : `${text.substring(0, 250)}...`}
        {text.length > 250 ?
        <TouchableOpacity style={styles.read} onPress={() => setShowMore(!showMore)}>
            <Text style={styles.readMore}>{showMore ? "Read Less" : "Read More"}</Text>
        </TouchableOpacity>
         :
            {}
        }
      </Text>
      <View style={styles.locationContainer}>
        <Image resizeMode='contain' style={styles.icon} source={require('../../assets/location.png')}/>
        <Text style={styles.location}>Johns Creek, Georgia</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.subheading}>Our <Text style={styles.greenSub}>Stock</Text></Text>
      <StockItem item="Eggs" price={0.77} images={stock[0].pictures}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    icon: {
        width: 13,
        height: 13
    },
    main: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    ratingContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    subheading: {
        fontSize: 23,
        fontWeight: '600',
        width: '90%',
        marginTop: 10
    },
    greenSub: {
        color: Colors.MAIN
    },  
    locationContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 15
    },
    rating: {
        fontWeight: '600',
        color: Colors.RATING,
        marginLeft: 3
    },
    title: {
        fontSize: 24,
        width: '90%',
        fontWeight: '600',
        marginTop: 20
    },
    subtitle: {
        width: '90%',
        fontSize: 14,
        color: '#969696',
        marginTop: 5
    },
    readMore: {
        fontSize: 14,
        fontWeight: '600',
        borderColor: 'black',
        textDecorationLine: 'underline',
        top: 2,
        left: 4
    },
    description: {
        fontSize: 14,
        width: '90%',
        marginTop: 10
    },
    location: {
        fontSize: 11,
        fontWeight: '600',
        marginLeft: 3
    },
    divider: {
        borderTopWidth: 2,
        width: '90%',
        marginTop: 15
    }
})