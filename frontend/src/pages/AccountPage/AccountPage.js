import { StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { IconButton, Button, Text, Avatar, Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MainTabBar from '../../components/MainTabBar/MainTabBar';
import Messages from '../Messages/Messages';
import Settings from '../Settings/Settings';
import FindFriends from '../FindFriends/FindFriends';
import MyFriends from '../MyFriends/MyFriends.js';
import BecomeALocal from '../BecomeALocal/BecomeALocal.js';


// <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '3.6%', paddingTop: '0.3%' }}/>

const AccountPage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#071930', flex: 1}}>
            <View style={{ backgroundColor: '#071930', width: '100%', height: '100%', zIndex: '0', flex: 3}}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{zIndex: '1', flexDirection: 'row', display: 'flex', alignItems: 'flex-start'}}>
                    <IconButton 
                    onPress={() => navigation.navigate(Settings)}
                    icon='cog' iconColor='#000000' 
                    backgroundColor='#FFFFFF' 
                    size={34} />
                        <View style={{display: 'flex', marginHorizontal: '5.5%', borderColor: '#FFFFFF', borderWidth: '5%', borderRadius: 100, marginTop: '5%'}}>
                            <Avatar.Image backgroundColor='#FFFFFF' size={176} source={require('../../assets/tempProfilePic.png')} style={{ zIndex: '1',}} />
                        </View>
                    <IconButton 
                    onPress={() => navigation.navigate(Messages)} 
                    icon='email' iconColor='#000000' 
                    backgroundColor='#FFFFFF' 
                    size={34} />
                    </View>
                </View>
                
                <View style={{zIndex: '1', flexDirection: 'row'}}>
                    <View style={{ flexDirection: 'column', marginLeft: '7%'}}>
                        <Text style={styles.text1}>
                            Gregory Madar
                        </Text>
                        <Text style={styles.text2}>
                            @GregMadar1
                        </Text>
                        <Text style={ styles.text4 }>176 friends</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: '14%'}}>
                        <TouchableOpacity 
                        
                        style={{ paddingTop: '16%'}}>
                            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 20, alignItems: 'center', paddingVertical: '8.6%', paddingHorizontal: '3.6%'}}>
                                <Text style={styles.text5}>Find Friends</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={ styles.text6 }>Traveler</Text>
                    </View>
                </View>

                <Text style={styles.text7}>Hello, I am Greg! I am originally from Cleveland, Ohio but 
                    now I live in Boston. Meeting to new people and 
                    seeing new places  is some of my favorite memories 
                    growing up, and I want to continue to do so.
                </Text>

                <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '5%', paddingTop: '0.3%' }}/>

                <Text style={styles.text8}>Become a Local</Text>
                <Text style={styles.text7}>Start earning now and show other travelers around the wonderful 
                place you call home. Become a Local guide below 
                and start working for yourself...
                </Text>
                <TouchableOpacity style={{ paddingTop: '7%'}}>
                    <View style={{ backgroundColor: '#E5B07A', borderRadius: 20, alignItems: 'center', width: '28%', alignSelf: 'center', paddingVertical: '2.8%'}}>
                        <Text style={styles.text9}>Start Now</Text>
                    </View>
                </TouchableOpacity>
                
                <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '7%', paddingTop: '0.3%' }}/>
            </View>
        </SafeAreaView>
    )
}

export default AccountPage

const styles = StyleSheet.create({
    text1: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: '26em',
        paddingTop: '4%'
    }, 
    text2: {
        color: '#288FBB',
        fontWeight: '400',
        fontSize: '19em',
        fontStyle: 'italic',
        paddingTop: '1%'
    },
    text3: {
        display: 'flex', 
        flexDirection: 'row',
        paddingTop: '3%'
      },
    text4: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '15em',
        textDecorationLine: 'underline',
        paddingTop: '4.8%'
      },
      text5: {
        display: 'flex',
        color: '#000000',
        fontWeight: '600',
        fontSize: '12em',
      },
      text6: {
        display: 'flex',
        color: '#288FBB',
        fontWeight: '400',
        fontSize: '15em',
        alignSelf: 'flex-end',
        paddingTop: '10%'
      },
      text7: {
        display: 'flex',
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: '14em',
        width: '86%',
        marginLeft: '7%',
        paddingTop: '5%'
      },
      text8: {
        display: 'flex',
        color: '#E5B07A',
        fontWeight: '700',
        fontSize: '24em',
        width: '86%',
        marginLeft: '7%',
        paddingTop: '5%',
      },
      text9: {
        display: 'flex',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '12em',
      },
})