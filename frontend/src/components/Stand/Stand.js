import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import NavigationButton from '../NavigationButton/NavigationButton';
import { Colors } from '../../Styles';
import { useNavigation } from '@react-navigation/native';
import jwt_decode from 'jwt-decode'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const Stand = (props) => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const styles = StyleSheet.create({
        HEADING_TEXT: {
            fontSize: 15,
            fontWeight: 'bold',
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

    let {_id, standName, city, distance, rating, description, ownerName, picture, favorite} = props.data



    // if _id is in saved list

    const [isSaved, setIsSaved] = React.useState(favorite)

    const updateFavoriteList = async () => {
        const token = await AsyncStorage.getItem("authToken")

        //console.log(jwt_decode(token))

        const {userID} = jwt_decode(token)

        await axios.post("http://localhost:8000/user/updateFavoriteStands", {userID: userID, standID: _id})

    }
    
    if (rating == -1) {
        rating = "Not Rated Yet"
    }

    distance = Math.round(distance / 1609 * 10) / 10

    return (
        <NavigationButton style={{flex: 0, flexDirection: 'row', width: 350, height: 160, borderRadius: 20, marginVertical: '1.5%'}} onPress={() => navigation.navigate('Seller', {...props.data})}>
            <Image source={{uri: picture}} defaultSource={require('../../assets/market_stand.png')} style={{width: '37%', height: '90%', borderRadius: 20}}></Image>
            <View style={{flex: 2, width: 300, height: 150, flexDirection: 'column', marginHorizontal: '5%', paddingVertical: '3%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '110%'}}>
                    <Text style={styles.HEADING_TEXT}>{standName}</Text>
                    <NavigationButton style={{position: 'relative'}} onPress={
                        () =>{
                            setIsSaved((oldVal) => !oldVal)
                            updateFavoriteList()
                        } 
                        }>
                        { isSaved ? 
                            <Image source={require('../../assets/SaveIconFilled.png')} style={{width: 17, height: 17, tintColor: Colors.RATING}}></Image>
                            :
                            <Image source={require('../../assets/SaveIconUnfilled.png')} style={{width: 17, height: 17}}></Image>
                        }
                    </NavigationButton>
                </View>
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