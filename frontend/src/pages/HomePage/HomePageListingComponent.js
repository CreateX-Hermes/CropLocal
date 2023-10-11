import { StyleSheet, View, SafeAreaView, Image, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { IconButton, Text, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Paris City Nighttime Walking Experience
// 289
// Nathaniel Drew
// 4.93
// Hello, I'm Nathaniel, a native Parisian who loves to travel and...

const HomePageListingComponent = (props) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#071930'}}>
      <View style={{ backgroundColor: '#071930', width: '100%', height: '100%', zIndex: '0',
      alignItems: 'center'}} >
        <TouchableOpacity style={{width: '100%', height: '100%', position: 'relative'}}>
        <View style={{ backgroundColor: '#FFFFFF', width: '91%', height: '23%', zIndex: '0',
         borderRadius: 20, flexDirection: 'row', position:'relative'}}>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <Avatar.Image backgroundColor='#FFFFFF' size={150} source={require('../../assets/tempProfilePic.png')} style={{ zIndex: '1', marginLeft: '1.5%'}} />
            </View>
            <View style={{paddingLeft: '1%'}}>
              <View style={ styles.text1 }>
                <View style={{ flexDirection:'row' }}>
                    <Text style={ styles.text2 }>{props.listingTitle}</Text>
                    <TouchableOpacity style={{ paddingTop: '1%' }}>
                      <Image source={require('../../assets/SaveIconUnfilled.png')} style={ styles.text15 }/>
                    </TouchableOpacity>
                </View> 
                <View style= { styles.text3 }>
                    <Text style={ styles.text6 }>from</Text>
                    <Text style={ styles.text4 }>${props.listingPrice}</Text>
                </View>
              </View>
              <View style={{ marginTop: '9%', position: 'relative', width: '62%', }}>
                  <Text style={ styles.text8 }>{props.localsName}</Text>
                  <View style={ styles.text9 }>
                      <Image source={require('../../assets/star.png')} style={ styles.text12 }/>
                      <Text style={ styles.text10 }>{props.localsRating}</Text>
                  </View>
                  <Text style={ styles.text13 }>{props.localsBio}</Text>
              </View>
            </View>
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomePageListingComponent

const styles = StyleSheet.create({
    text1: {
      display: 'flex', 
      flexDirection: 'column', 
      position: 'relative', 
      paddingTop: '3%'
    },
    text2: {
      display: 'flex', 
      flexDirection: 'column', 
      position: 'relative', 
      fontWeight: '600',
      fontSize: '15em',
      width: '50%'
    },
    text3: {
      display: 'flex', 
      flexDirection: 'row', 
      paddingLeft: '1%',
      paddingTop: '1.4%'
    },
    text4: {
      fontWeight: '700',
      paddingLeft: '1%',
      fontSize: '12em',
      width: '50%'
    },
    text5: {
      height: '50%'
    },
    text6: {
      fontWeight: '400',
      fontSize: '12em'
    },
    text7: {
      flexDirection: 'column',
      marginTop: '8%',
    },
    text8: {
      fontWeight: '600',
      fontSize: '15em',
      paddingBottom: '2%'
    },
    text9: {
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    text10: {
      fontWeight: '600',
      fontSize: '12em',
      color: '#E5B07A',
      position: 'relative',
    },
    text11: {
      color: '#000000',
      alignContent: 'flex-start'
    },
    text12: {
      alignItems: 'flex-start',
      width: 13,
      height: 13,
      marginRight:'1.4%'
    },
    text13: {
      fontWeight: '400',
      fontSize: '11em',
      position: 'relative',
      paddingTop: '2%',
      width: '88%'
    },
    text14: {
      verticalAlign: 'center'
    },
    text15: {
      width: 21,
      height: 21,
    },
})