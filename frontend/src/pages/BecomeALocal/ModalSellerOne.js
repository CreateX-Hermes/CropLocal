import { StyleSheet, View, SafeAreaView, TouchableOpacity, Modal, Image, Text, TextInput, ScrollView, } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Styles.js'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import BecomeALocal from './BecomeALocal.js';
import AccountPageNavigator from '../Navigators/AccountPageNavigator.js';
import { Divider, IconButton, Avatar} from 'react-native-paper';
import BecomeASellerNavigatorTwo from '../Navigators/BecomeASellerNavigatorTwo.js';

const ModalSellerOne = () => {
  
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return (
        <SafeAreaView backgroundColor={Colors.WHITE}>
            <View backgroundColor= {Colors.WHITE} height='100%'>

            <View style={{position: 'absolute', marginLeft: '6%'}}>
            <NavigationButton onPress={() => {navigation.goBack()}
              } style={{height: 50, width: 50, flex: 0, top: '15%'}}>
            <Image source={require('../../assets/left.png')} style={{width: '70%', resizeMode: 'contain'}}/>
          </NavigationButton>
          </View>

          <ScrollView style={{paddingTop: '14%', zIndex: -2}}>
                <Text style={styles.text8}>Check Profile Details</Text>

            
                <View style={{ alignItems: 'center', marginTop: '15%' }}>
          <View style={{zIndex: '1', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-start', position: 'absolute'}}>
          <View style={{display: 'flex', borderColor: Colors.MAIN, borderWidth: '5%', borderRadius: 100, bottom: '24%', }}>
            <Image source={require('../../assets/tempProfilePic.png')} />
          </View>
          
          <View style={{ alignSelf: 'center', bottom: '20%', zIndex: 7 }}>
            <TouchableOpacity 
            style={{ 
            backgroundColor: Colors.BLACK,
            borderRadius: 50,
            paddingVertical: '4%',
            alignSelf: 'center',
            zIndex: 5,
            }}>
            <Text style={styles.text10}>Edit</Text>
            </TouchableOpacity>
            </View>
      </View>
      
    </View>
                    
    <Text style={styles.text11}>Full Name</Text>
    <TextInput style={styles.input} placeholder="jSmith23@gmail.com" placeholderTextColor={Colors.BLACK} />

    <Text style={styles.text12}>Username</Text>
    <TextInput style={styles.input} placeholder="smithjohnTx2" placeholderTextColor={Colors.BLACK} />

    <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '6%', paddingTop: '0.3%', marginBottom: '5%' }}/>


    <Text style={styles.text13}>Bio</Text>
    <TextInput style={styles.inputtwo} placeholder="Hello, I am Greg! I am originally from Cleveland, Ohio but now I live 
    in Boston. Meeting to new people and seeing new places  is some of my favorite memories growing up, and I want to 
    continue to do so. I think sharing our cultures is one of best ways to grow as a person." placeholderTextColor='#000000'
    multiline={true} />
        
    </ScrollView>

    <View style={{ backgroundColor: Colors.BLACK, width: '100%', height: '200%', position: 'absolute', top: '95%' }} />

    <View style={{ position: 'absolute', top: '92%', alignSelf: 'center' }}>
            <TouchableOpacity 
              style={{ 
                backgroundColor: Colors.RATING,
                borderRadius: 50,
                paddingVertical: '10%',
                alignSelf: 'center',
                zIndex: 5,
                borderColor: Colors.WHITE,
                borderWidth: '4%',
              }} onPress={() => {
                navigation.navigate(BecomeASellerNavigatorTwo)
              }
                }>
              <Text style={styles.text22}>Next</Text>
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
  )
}

export default ModalSellerOne

const styles = StyleSheet.create({
    text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text8: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '36em',
        marginLeft: '7%',
        paddingTop: '5%',
        width: '70%'
      },
      text10: {
        display: 'flex',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '15em',
        paddingHorizontal: '7%',
      },
      text11: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '18em',
        paddingLeft: '9%',
        marginTop: '40.6%'
      }, 
      text12: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '18em',
        paddingTop: '6%',
        paddingLeft: '9%'
      },
      text13: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: '18em',
        paddingLeft: '9%'
      },  
      text15: {
        width: 24,
        height: 24,
        alignSelf: 'center',
      },
      input: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '2.8%',
        borderRadius: '100%',
        height: '6%',
        fontSize: '15em',
        fontWeight: '400',
        paddingLeft: '7%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%'
      },
      inputtwo: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '3.4%',
        borderRadius: 25,
        fontSize: '15em',
        fontWeight: '400',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        paddingLeft: '7%',
        paddingRight: '6%',
        paddingTop: '4%',
        paddingBottom: '4%'
      },
      text22: {
        display: 'flex',
        color: Colors.WHITE,
        fontWeight: '600',
        fontSize: '15em',
        paddingHorizontal: '13%',
      },
})