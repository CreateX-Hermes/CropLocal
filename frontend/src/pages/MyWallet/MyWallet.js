import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect} from 'react'
import { Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MyWallet = () => {
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
          <Image source={require('../../assets/left.png')} style={ styles.text10 }/>
      </TouchableOpacity>
      <Text style={styles.text1}>
          My Wallet
      </Text>
      <View style={{ backgroundColor: '#F5F5F5', height: '7%', borderRadius: 50, width: '86%', alignSelf: 'center', marginTop: '8%', flexDirection: 'row' }}>
      <Image source={require('../../assets/visa.png')} style={ styles.text9 }/>
        <Text style={styles.text6}>
          7039 9323 832 239
        </Text>
        <Text style={styles.text8}>
          09/24
        </Text>
      </View>
      <View style={{ backgroundColor: '#F5F5F5', height: '7%', borderRadius: 50, width: '86%', alignSelf: 'center', marginTop: '8%', flexDirection: 'row' }}>
      <Image source={require('../../assets/visa.png')} style={ styles.text9 }/>
        <Text style={styles.text6}>
          7039 9323 832 239
        </Text>
        <Text style={styles.text8}>
          09/24
        </Text>
      </View>
      <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '10%', paddingTop: '0.4%', }}/>
      <Text style={styles.text4}>
          Payment Methods
      </Text>
      <View style={{ paddingTop: '6%', width: '35%', marginLeft: '7%' }}>
                <TouchableOpacity 
                style={{ 
                    backgroundColor: '#288FBB',
                    borderRadius: 50,
                    paddingVertical: '8%'
                }}>
                        <Text style={styles.text7}>Edit Payment</Text>
                </TouchableOpacity>
                </View>
        <View style={{ backgroundColor: '#071930', width: '100%', height: '200%', position: 'absolute', top: '96%' }} />
    </View>
    </SafeAreaView>
  )
}

export default MyWallet

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
    fontWeight: '400',
    fontSize: '16em',
    paddingTop: '6%',
    paddingLeft: '7%',
    paddingRight: '7%'
  }, 
  text3: {
    color: '#000000',
    fontWeight: '400',
    fontSize: '16em',
    paddingTop: '4%',
    paddingLeft: '7%',
    paddingRight: '7%'
  }, 
  text4: {
    color: '#000000',
    fontWeight: '600',
    fontSize: '26em',
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
    color: '#000000',
    fontWeight: '600',
    fontSize: '16em',
    alignSelf: 'center',
    paddingLeft: '8%'
  }, 
  text7: {
    display: 'flex',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '15em',
    paddingHorizontal: '10%', alignSelf: 'center'
  }, 
  text8: {
    color: '#C5C5C5',
    fontWeight: '600',
    fontSize: '16em',
    alignSelf: 'center',
    paddingLeft: '6%'
  }, 
  text9: {
    width: 38,
    height: 38,
    alignSelf: 'center',
    marginLeft: '7%'
  },
  text10: {
    width: 28,
    height: 28,
    alignSelf: 'center',
  },
})