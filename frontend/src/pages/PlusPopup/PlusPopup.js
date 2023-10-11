import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CheckAvailability from '../CheckAvailability/CheckAvailability.js';
import MyPlans from '../MyPlans/MyPlans.js';
import SavedLocals from '../SavedLocals/SavedLocals.js';
import LocalManager from '../LocalManager/LocalManager.js';

const PlusPopup = () => {
  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return (
    <View >
          <View style={{ alignSelf: 'center', width: '86%', paddingTop: '20%'}}>
                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                onPress={() => navigation.navigate(CheckAvailability)} >
                  <Image source={require('../../assets/calendar.png')} style={ styles.text15 }/>
                  <Text style={styles.text9}>Check Availability</Text>
                </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                onPress={() => navigation.navigate(MyPlans)}>
                  <Image source={require('../../assets/checklist.png')} style={ styles.text15 }/>
                  <Text style={styles.text9}>My Plans</Text>
                </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                onPress={() => navigation.navigate(SavedLocals)}>
                  <Image source={require('../../assets/SaveIconUnfilled.png')} style={ styles.text15 }/>
                  <Text style={styles.text9}>Saved Locals</Text>
                </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '5%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                onPress={() => navigation.navigate(LocalManager)}>
                  <Image source={require('../../assets/collage.png')} style={ styles.text15 }/>
                  <Text style={styles.text9}>Local Manager</Text>
                </TouchableOpacity>
          </View>
    </View>
  )
}

export default PlusPopup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20, alignItems: 'center', alignSelf: 'center', paddingVertical: '2.8%'
  },
  text1: {
      fontWeight: '700',
      fontSize: '20em',
      position: 'relative',
      alignSelf: 'center',
    },
    text9: {
      display: 'flex',
      color: '#000000',
      fontWeight: '600',
      fontSize: '16em',
      paddingLeft: '8%'
    },
    text15: {
      width: 38,
      height: 38,
    },
})