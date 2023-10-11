import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useState, useLayoutEffect } from 'react';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../Styles';
import { StockItem } from '../../components/StockItem/StockItem';
import { Review } from '../../components/Review/Review';
import { useNavigation } from '@react-navigation/native';


const Seller = ({route}) => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [showMore, setShowMore] = useState(false);

    const text = "In this one of a kind authentic Parisian experience I will show you the what it’s like to live in the City of Lights like a true Frenchman. From my favorite restaurant and cafe, to my unforgettable overlook of the city only a few know about, this will be an experience you will never forget";

    const review = "Great experience. Everything from the authentic views and areas combined with some of the best food I have ever eaten makes this one of the most memorable trips in recent memory.";

    const stock = [{
        item: "Eggs",
        price: 0.77,
        pictures: [require('../../assets/egg1.png'), require('../../assets/egg2.png')]
    },
    {
        item: "Honey",
        price: 8.99,
        pictures: [require('../../assets/honey.png'), require('../../assets/honey2.png')]
    },{
        item: "Eggs",
        price: 0.77,
        pictures: [require('../../assets/egg1.png'), require('../../assets/egg2.png')]
    }]

    let {_id, standName, city, distance, rating, description, ownerName, picture} = route.params

  return (
    <View>
    <View style={styles.modal}>
        <View style={styles.reserveContainer}>
            <View styles={styles.checkout}>
                <Text style={styles.d}>Items:<Text style={{fontWeight:'bold'}}>4</Text></Text>
                <Text style={styles.d}>Total:<Text style={{fontWeight:'bold'}}>$49</Text></Text>
            </View>
            <TouchableOpacity style={styles.rButton}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>Reserve</Text>
            </TouchableOpacity>
        </View>
    </View>
    <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconContainer1} onPress={() => navigation.goBack()}>
                <Image style={styles.icon1} source={require('../../assets/left.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer2}>
                <Image style={styles.icon2} source={require('../../assets/SaveIconUnfilled.png')}/>
            </TouchableOpacity >
        </View>
    <ScrollView contentContainerStyle={styles.main}>
      <Image source={{uri: picture}} defaultSource={require('../../assets/market_stand.png')} style={{width: 400, height: 250}}></Image>
      <Text style={styles.title}>{standName}</Text>
      <Text style={styles.subtitle}>Produce</Text>
      <View style={styles.ratingContainer}>
        <Image resizeMode='contain' style={styles.icon} source={require('../../assets/star.png')}/>
        <Text style={styles.rating}>{rating}</Text>
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
        <Text style={styles.location}>{city}</Text>
      </View>
      <View style={styles.divider}></View>
      <Text style={styles.subheading}>Our <Text style={styles.greenSub}>Stock</Text></Text>
      <StockItem item={stock[0].item} price={stock[0].price} images={stock[0].pictures}/>
      <StockItem item={stock[1].item} price={stock[1].price} images={stock[1].pictures}/>
      <StockItem item={stock[2].item} price={stock[2].price} images={stock[2].pictures}/>
      <View style={styles.divider}></View>
      <Text style={styles.subheading}>Your <Text style={styles.greenSub}>Seller</Text></Text>
      <View style={styles.seller}>
        <Image style={styles.profilePic} source={require('./dude.png')}/>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>Gregory</Text>
            <Text style={styles.name}>Madar</Text>
        </View>
      </View>
      <Text style={styles.sellerDescription}>
        Hello all travelers, my name is Greg. I was born in Paris, France, the city of lights. I grew up going to school on the west side of the city, and later went to to go to University in London. There I studied business administration. I worked for Barclay’s french branch in Paris after school.
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.reviewHeader}>
            <Text style={styles.subheading}>Reviews <Text style={styles.count}>(253)</Text></Text>
            <View style={styles.ratingContainer}>
                <Image resizeMode='contain' style={styles.icon} source={require('../../assets/star.png')}/>
                <Text style={styles.rating}>4.93</Text>
            </View>
        </View>
        <Review name={"Nathaniel Drew"} rating={4.97} description={review}/>
        <Review name={"Nathaniel Drew"} rating={4.97} description={review}/>
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.more}>
                <Text style={styles.moreText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plus}>
                <Image style={styles.plusImage} source={require('../../assets/add.png')}/>
            </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    icon: {
        width: 13,
        height: 13
    },
    main: {
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '100%'
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
        marginTop: 10,
        marginBottom: 20
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
    },
    profilePic: {
        width: 130,
        height: 130,
        borderColor: Colors.MAIN,
        borderWidth: 2,
        borderRadius: '100%'
    },
    seller: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    name: {
        textAlign: 'left',
        fontSize: 27,
        fontWeight: '600'
    },
    nameContainer: {
        width: '30%',
        marginLeft: '10%'
    },
    sellerDescription: {
        width: '90%',
        marginTop: 10,
        fontSize: 14
    },
    count: {
        fontSize: 13
    },
    reviewHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%'
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        zIndex: 1,
    },
    icon1: {
        position: 'absolute',
        width: 26,
        height: 26,
        marginLeft: 15
    },
    icon2: {
        position: 'absolute',
        width: 26,
        height: 26,
    },
    iconContainer1: {
        width: 45,
        height: 45,
        borderRadius: '50%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '15%'
    },
    iconContainer2: {
        width: 45,
        height: 45,
        borderRadius: '50%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    modal: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: '8%',
        backgroundColor: 'black',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rButton: {
        width: 150,
        height: '80%',
        backgroundColor: '#91D569',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7
    },
    checkout: {
        width: '40%',
        height: 'auto',
    },
    d: {
        marginLeft: '15%',
        fontSize: 15
    },
    reserveContainer: {
        position: 'relative',
        bottom: '50%',
        borderRadius: '50%',
        width: '80%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default Seller
