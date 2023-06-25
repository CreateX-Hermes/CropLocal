import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect} from 'react'
import { Divider, IconButton, Avatar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


  return (
    <SafeAreaView style={{ backgroundColor: '#071930' }}>
    <View style={{ backgroundColor: '#071930', height: '100%' }}>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: 100,
          justifyContent: 'center',
          marginTop: '1.6%',
          paddingHorizontal: '3.6%',
          paddingVertical: '2.8%',
          marginLeft: '6%'
          }}>
            <Image source={require('../../assets/closeCancel.png')} style={ styles.text14 }/>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={{ 
          backgroundColor: '#FFFFFF',
          borderRadius: 100,
          justifyContent: 'center',
          marginTop: '1.6%',
          paddingHorizontal: '3%',
          paddingVertical: '3%',
          marginRight: '6%'
          }}>
            <Image source={require('../../assets/check.png')} style={ styles.text15 }/>
        </TouchableOpacity>
      </View>

    <View style={{ alignItems: 'center' }}>
      <View style={{zIndex: '1', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'flex-start', position: 'absolute'}}>
          <View style={{display: 'flex', borderColor: '#FFFFFF', borderWidth: '5%', borderRadius: 100, bottom: '24%', }}>
            <Avatar.Image backgroundColor='#FFFFFF' size={130} source={require('../../assets/tempProfilePic.png')} style={{ zIndex: '1',}} />
          </View>
          
          <View style={{ alignSelf: 'center', bottom: '18%', zIndex: 7 }}>
            <TouchableOpacity 
            style={{ 
            backgroundColor: '#000000',
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
    <TextInput style={styles.input} placeholder="jSmith23@gmail.com" placeholderTextColor='#000000' />

    <Text style={styles.text12}>Username</Text>
    <TextInput style={styles.input} placeholder="smithjohnTx2" placeholderTextColor='#000000' />

    <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '6%', paddingTop: '0.3%', marginBottom: '5%' }}/>


    <Text style={styles.text13}>Bio</Text>
    <TextInput style={styles.inputtwo} placeholder="Hello, I am Greg! I am originally from Cleveland, Ohio but now I live 
    in Boston. Meeting to new people and seeing new places  is some of my favorite memories growing up, and I want to 
    continue to do so. I think sharing our cultures is one of best ways to grow as a person." placeholderTextColor='#000000'
    multiline={true} />

    <View style={{ backgroundColor: '#071930', width: '100%', height: '200%', position: 'absolute', top: '96%' }} />
    </View>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  text7: {
    width: 28,
    height: 28,
    alignSelf: 'center',
  }, text8: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  text9: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  text10: {
    display: 'flex',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '15em',
    paddingHorizontal: '7%',
  },
  text11: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '18em',
    paddingLeft: '9%',
    marginTop: '34.6%'
  }, 
  text12: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '18em',
    paddingTop: '6%',
    paddingLeft: '9%'
  },
  text13: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '18em',
    paddingLeft: '9%'
  },  
  text14: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  text15: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 0,
    borderColor: '#FFFFFF',
    marginTop: '2.8%',
    borderRadius: '100%',
    height: '6%',
    fontSize: '15em',
    fontWeight: '400',
    paddingLeft: '7%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '7%'
  },
  inputtwo: {
    borderWidth: 0,
    borderColor: '#FFFFFF',
    marginTop: '3.4%',
    borderRadius: 25,
    fontSize: '15em',
    fontWeight: '400',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '7%',
    paddingLeft: '7%',
    paddingRight: '6%',
    paddingTop: '4%',
    paddingBottom: '4%'
  },
})