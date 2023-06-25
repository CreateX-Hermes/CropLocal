import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect} from 'react'
import { Divider, IconButton,} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
    <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
    <TouchableOpacity 
      onPress={() => navigation.goBack()}
      style={{ 
      backgroundColor: '#F5F5F5',
      borderRadius: 100,
      justifyContent: 'center',
      height: '6.6%',
      width: '13%',
      marginLeft: '6%',
      marginTop: '1.6%'
      }}>
          <Image source={require('../../assets/left.png')} style={ styles.text7 }/>
      </TouchableOpacity>
      <Text style={styles.text1}>
          Help
      </Text>
      <Text style={styles.text2}>
      If you have any questions, problems  or need any assistance please do not hesitate to contact us with the email address below. 
      </Text>
      <Text style={styles.text3}>
      We will try our best to to assist you with your question or problem in a timely manner. Thank you for your patience...
      </Text>
      <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '12%', paddingTop: '0.4%', }}/>
      <Text style={styles.text4}>
          Contact Us
      </Text>
      <View style={{ backgroundColor: '#F5F5F5', height: '7%', borderRadius: 50, width: '86%', alignSelf: 'center', marginTop: '8%', flexDirection: 'row' }}>
        <Text style={styles.text5}>
          Email:
        </Text>
        <Text style={styles.text6}>
          hermeshelp@gmail.com
        </Text>
      </View>
      
      <View style={{ backgroundColor: '#071930', width: '100%', height: '200%', position: 'absolute', top: '96%' }} />
    </View>
    </SafeAreaView>
  )
}

export default Help

const styles = StyleSheet.create({
  text1: {
    color: '#000000',
    fontWeight: '600',
    fontSize: '36em',
    paddingTop: '2%',
    paddingLeft: '7%'
  }, 
  text2: {
    color: '#000000',
    fontWeight: '500',
    fontSize: '16em',
    paddingTop: '6%',
    paddingLeft: '7%',
    paddingRight: '7%'
  }, 
  text3: {
    color: '#000000',
    fontWeight: '500',
    fontSize: '16em',
    paddingTop: '4%',
    paddingLeft: '7%',
    paddingRight: '7%'
  }, 
  text4: {
    color: '#000000',
    fontWeight: '600',
    fontSize: '36em',
    paddingTop: '8%',
    paddingLeft: '7%'
  }, 
  text5: {
    color: '#000000',
    fontWeight: '600',
    fontSize: '18em',
    alignSelf: 'center',
    paddingLeft: '7%'
  },
  text6: {
    color: '#288FBB',
    fontWeight: '400',
    fontSize: '17em',
    alignSelf: 'center',
    paddingLeft: '4%'
  }, 
  text7: {
    width: 28,
    height: 28,
    alignSelf: 'center',
  },
})