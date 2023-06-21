import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Divider} from 'react-native-paper';

const MyWallet = () => {
  return (
    <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
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
    </View>
  )
}

export default MyWallet

const styles = StyleSheet.create({
  text1: {
    color: '#000000',
    fontWeight: '600',
    fontSize: '36em',
    paddingTop: '10%',
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
})