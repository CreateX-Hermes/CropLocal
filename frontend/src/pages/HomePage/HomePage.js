import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MainTabBar from '../../components/MainTabBar/MainTabBar';
import Messages from '../Messages/Messages';
import HomePageFilter from '../HomePageFilter/HomePageFilter';
import EditProfile from '../EditProfile/EditProfile';
import MyWallet from '../MyWallet/MyWallet';
import Help from '../Help/Help';
import Login from '../Auth/Login';
import BecomeALocal from '../BecomeALocal/BecomeALocal';


const HomePage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [isModalVisible, setModalVisible] = useState(false);

    const [isFilterModalVisible, setFilterModalVisible] = useState(false);

    const toggleFilterModal = () => {
        setFilterModalVisible(!isFilterModalVisible);
    };


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleEditProfilePress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Edit Profile Page
        navigation.navigate(EditProfile);
      };

      const handleBecomeALocalPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Become A Local Page
        navigation.navigate(BecomeALocal);
      };
      const handleMyWalletPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to My Wallet Page
        navigation.navigate(MyWallet);
      };
      const handleHelpPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Help Page
        navigation.navigate(Help);
      };
      const handleSignOutPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Edit Profile Page
        navigation.navigate(Login);
      };

    return (
        <SafeAreaView style={{ backgroundColor: '#071930', flex: 1, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#071930', zIndex: '0', alignItems: 'center', flex: 3 }}>
                {/*/ Actual Home Page Content */}
                <View style={{ zIndex: '1', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <IconButton 
                    onPress={toggleModal}
                    icon='cog' iconColor='#000000' 
                    backgroundColor='#FFFFFF' 
                    size={34} />
                    <TouchableOpacity 
                    onPress={toggleFilterModal}
                    style={{ marginHorizontal: '5%' }}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: '12%', paddingVertical: '6%' }}>
                            <Text style={styles.text1}>Paris, France</Text>
                        </View>
                    </TouchableOpacity>
                    <IconButton 
                    onPress={() => navigation.navigate(Messages)} 
                    icon='email' iconColor='#000000' 
                    backgroundColor='#FFFFFF' 
                    size={34} />
                </View>

                {/*/ Settings Modal */}
                <Modal visible={isModalVisible} animationType="fade" >
                    <SafeAreaView  backgroundColor='#071930'>
                    <View backgroundColor='#071930' height='100%'>
                    <IconButton 
                        onPress={toggleModal}
                        icon='window-close' iconColor='#000000' 
                        backgroundColor='#FFFFFF' 
                        size={34}
                        style={{ marginLeft: '6%'}} />
                        
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '4%'}}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '4%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleEditProfilePress}  >
                                <Image source={require('../../assets/profileUser.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '4%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleBecomeALocalPress}>
                                <Image source={require('../../assets/write.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>Become A Local</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '4%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleMyWalletPress}>
                                <Image source={require('../../assets/dollar.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>My Wallet</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                            <TouchableOpacity style={{  backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '4%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleHelpPress}>
                                <Image source={require('../../assets/communication.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>Help</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleSignOutPress} style={{ backgroundColor: '#288FBB', width: '30%', borderRadius: 50, paddingVertical: '3.4%', marginTop: '12%', alignSelf: 'center', top: '36%' }}>
                            <Text style={ styles.text10}>Sign out</Text>
                        </TouchableOpacity>  
                    </View>
                    </SafeAreaView>
                </Modal>

                {/*/ FilterModal */}
                <Modal visible={isFilterModalVisible} animationType="fade">
                    <SafeAreaView  backgroundColor='#FFFFFF'>
                        <View backgroundColor='#FFFFFF' height='100%'>
                            <IconButton 
                            onPress={toggleFilterModal}
                            icon='window-close' iconColor='#000000' 
                            backgroundColor='#F5F5F5' 
                            size={34}
                            style={{ marginLeft: '6%'}} />

                            <Text style={styles.text17}> Where are you traveling?</Text>
                        </View>
                    </SafeAreaView>
                </Modal>

            </View>
        </SafeAreaView>
    );
}

export default HomePage

const styles = StyleSheet.create({
    base1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '16em'
    },
    text1: {
        fontWeight: '700',
        fontSize: '17em',
        position: 'relative',
    },
      text10: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '16em',
        alignSelf: 'center',
        justifyContent: 'center',
      },
          text15: {
            width: 38,
            height: 38,
          },
          text16: {
            width: 25,
            height: 25,
            backgroundColor: '#FFFFFF',
            borderRadius: 100,
            padding: '4%'
          },
          text17: {
            fontWeight: '600',
            fontSize: '26em',
            paddingTop: '2%',
            paddingLeft: '7%'
          }, 
          text19: {
            display: 'flex',
            color: '#000000',
            fontWeight: '600',
            fontSize: '16em',
            paddingLeft: '8%'
          }
});
