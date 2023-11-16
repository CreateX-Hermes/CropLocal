import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from 'react';
import { Colors } from '../../Styles.js';
import Stand from "../../components/Stand/Stand.js";

export const EventPage = ({ route }) => {
    const navigation = useNavigation();

    const [showMore, setShowMore] = useState(false);

    const text = "Welcome to the annual Chriskindl Market, our job is to bring the German Christmas spirit to the Atlanta area! Our stands sell authentic German food,  hand made christmas decorations, and delicious deserts Welcome to the annual Chriskindl Market, our job is to bring the German Christmas spirit to the Atlanta area! Our stands sell authentic German food,  hand made christmas decorations, and delicious deserts"

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false,
        });
    }, []);

    return (
        <View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconContainer1} onPress={() => navigation.goBack()}>
                <Image style={styles.icon1} source={require('../../assets/left.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer2}>
                <Image style={styles.icon2} source={require('../../assets/SaveIconUnfilled.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.main}>
            <View style={styles.intro}>
                <Image
                    source={route.params.lImage}
                    DeafaultSource={require('../../assets/market_stand.png')}
                    style={{ width: 400, height: 250 }}
                />
                <View style={styles.container}>
                    <Text style={styles.name}>{route.params.name}</Text>
                    <View style={{display:'flex', flexDirection:'row'}}>
                        <Image style={styles.icon} source={require('../../assets/wlocation.png')} />
                        <Text style={styles.location}>{route.params.location}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.subheading}>
                General 
                <Text style={styles.greenSub}> Info</Text>
            </Text>
            <View style={styles.content}>
                <View style={styles.segment}>
                    <Image style={styles.label} source={require('../../assets/calender.png')} />
                    <Text style={styles.info}>{`${route.params.startDate} - ${route.params.endDate}`}</Text> 
                </View>
                <View style={styles.row}>
                    <View style={styles.segment}>
                        <Image style={styles.label} source={require('../../assets/clock.png')} />
                        <Text style={styles.info}>{`${route.params.startTime} - ${route.params.endTime}`}</Text>
                    </View>
                    <View style={styles.segment}>
                        <Image style={styles.stand} source={require('../../assets/store2.png')} />
                        <Text style={styles.info}>{`${route.params.stands} stands`}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.description}>
            {showMore ? text : `${text.substring(0, 250)}...`}
            {text.length > 250 ? (
            <TouchableOpacity style={styles.read} onPress={() => setShowMore(!showMore)}>
              <Text style={styles.readMore}>{showMore ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
            ) : (
            {}
            )}
        </Text>
        <View style={styles.divider} />
        <Text style={styles.subheading}>
            Featured 
            <Text style={styles.greenSub}> Stands</Text>
        </Text>
            </ScrollView>
        </View>
    )
}

const styles = {
    main: {
        display: 'flex',
        position: 'fixed',
        width:'100%',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '100%',
      },
      intro: {
        display: 'flex', 
        justifyContent: 'center'
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
        marginLeft: 15,
      },
      icon2: {
        position: 'absolute',
        width: 26,
        height: 26,
      },
      iconContainer1: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
      },
      iconContainer2: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Colors.BUTTON_BACKGROUND,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%',
      },
      icon: {
        width: 10,
        height: 16
        },
      name: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20
      },
      container: {
        position: 'absolute',
        marginLeft: '10%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column'
      },
      location: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
      },
      subheading: {
        fontSize: 23,
        fontWeight: '600',
        width: '90%',
        marginTop: 10,
        marginBottom: 20,
      },
      greenSub: {
        color: Colors.MAIN,
      },
      label: {
        width: 25,
        height: 25
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
  stand: {
    width: 25,
    height: 30
},
row: {
    display: 'flex',
    flexDirection: 'row'
},
readMore: {
    fontSize: 14,
    fontWeight: '600',
    borderColor: 'black',
    textDecorationLine: 'underline',
    top: 2,
    left: 4,
  },
  description: {
    fontSize: 14,
    width: '90%',
  },
  divider: {
    borderTopWidth: 2,
    width: '90%',
    marginTop: 15,
  },
  image: {
    width: 179,
    height: 121,
    marginRight: 20,
  },
}
