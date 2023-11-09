import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Image,
    Text,
    TextInput,
    ScrollView,
  } from 'react-native';
  import React, { useLayoutEffect, useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { Divider, IconButton, Avatar } from 'react-native-paper';
  import { Colors } from '../../Styles.js';
  import NavigationButton from '../../components/NavigationButton/NavigationButton';

const ReserveItems = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView backgroundColor={Colors.WHITE}>
      <View backgroundColor={Colors.WHITE} height="100%">
        <View style={{ position: 'absolute', marginLeft: '6%' }}>
          <NavigationButton
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: 50,
              width: 50,
              flex: 0,
              top: '15%',
            }}
          >
            <Image
              source={require('../../assets/left.png')}
              style={{ width: '70%', resizeMode: 'contain' }}
            />
          </NavigationButton>
        </View>

        <ScrollView style={{ paddingTop: '14%', zIndex: -2 }}>
          <Text style={styles.text8}><Text style={styles.text18}>Confirm </Text>Items</Text>

          <Text style={styles.text11}>Urban Gardens</Text>

          <Divider style={styles.dividerStyle1}/>

          <Text style={styles.text13}>My Items:</Text>
        
        <View style={{ width: '86%', backgroundColor: Colors.BUTTON_BACKGROUND, alignSelf: 'center', borderRadius: 20, marginTop: '3%', paddingBottom: '3.8%'}}>
            <View style={{ position: 'relative', width: '90%', alignSelf: 'center', flexDirection: 'column', }}>

            {/** List of items portion of breakdown */}
            <View>
                {/** One "Component" of item in list of My Items */}
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.text31}>Eggs<Text style={styles.text31}>:</Text></Text>
                    <Text style={styles.text32}>$<Text style={styles.text32}>39.96</Text></Text>
                </View>
                <Text style={styles.text33}>(Qty : <Text style={styles.text33}>3</Text>)</Text>
            </View>

            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.text31}>Lemons<Text style={styles.text31}>:</Text></Text>
                    <Text style={styles.text32}>$<Text style={styles.text32}>7.95</Text></Text>
                </View>
                <Text style={styles.text33}>(Qty : <Text style={styles.text33}>8</Text>)</Text>
            </View>
        </View>


        {/** Total row portion at bottom of breakdown */}
        <View style={{ marginTop: '40%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.text31}>Total:</Text>
                <Text style={styles.text32}>$<Text style={styles.text32}>47.91</Text></Text>
            </View>
        </View>

            </View>
        </View>


        </ScrollView>

        <View
          style={{
            backgroundColor: Colors.BLACK,
            width: '100%',
            height: '200%',
            position: 'absolute',
            top: '95%',
          }}
        />

        <View style={{ position: 'absolute', top: '92%', alignSelf: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.MAIN,
              borderRadius: 50,
              paddingVertical: '10%',
              alignSelf: 'center',
              zIndex: 5,
              borderColor: Colors.WHITE,
              borderWidth: '4%',
            }}
            
          >
            <Text style={styles.text22}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ReserveItems

const styles = StyleSheet.create({
    text6: {
        color: Colors.BLACK,
        fontWeight: '400',
        paddingTop: '2.4%',
        marginLeft: '9%',
      },
      text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text8: {
        display: 'flex',
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 36,
        marginLeft: '7%',
        paddingTop: '5%',
        width: '70%',
      },
      text10: {
        display: 'flex',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15,
        paddingHorizontal: '7%',
      },
      text11: {
        color: Colors.BLACK,
        fontWeight: '700',
        fontSize: 23,
        paddingLeft: '9%',
        marginTop: '15%',
      },
      text12: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 18,
        paddingTop: '6%',
        paddingLeft: '9%',
      },
      text13: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: '9%',
        marginTop: '5%',
      },
      text15: {
        width: 24,
        height: 24,
        alignSelf: 'center',
      },
      text18: {
        display: 'flex',
        color: Colors.MAIN,
        fontWeight: '600',
        fontSize: 36,
        marginLeft: '7%',
        paddingTop: '5%',
        width: '70%',
      },
      text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text20: {
        fontWeight: '500',
        fontSize: 24,
        paddingTop: '6%',
        paddingHorizontal: '4%',
        alignSelf: 'center',
        color: Colors.MAIN,
      },
      input: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '2.8%',
        borderRadius: 100,
        height: 30,
        fontSize: 15,
        fontWeight: '400',
        paddingLeft: '7%',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        //paddingVertical: '4%',
      },
      inputtwo: {
        borderWidth: 0,
        borderColor: Colors.BUTTON_BACKGROUND,
        marginTop: '3.4%',
        borderRadius: 25,
        fontSize: 15,
        fontWeight: '400',
        backgroundColor: Colors.BUTTON_BACKGROUND,
        marginHorizontal: '7%',
        paddingLeft: '7%',
        paddingRight: '6%',
        paddingTop: '4%',
        paddingBottom: '4%',
      },
      text22: {
        display: 'flex',
        color: Colors.WHITE,
        fontWeight: '600',
        fontSize: 15,
        paddingHorizontal: '13%',
      },
      dividerStyle1: {
        paddingVertical: 0.5,
        width: '86%',
        alignSelf: 'center',
        backgroundColor: Colors.BLACK,
        marginTop: '3.2%'
      },
      text31: {
        color: Colors.BLACK,
        fontWeight: '600',
        fontSize: 16,
        marginTop: '5%',
      },
      text32: {
        color: Colors.BLACK,
        fontWeight: '400',
        fontSize: 15,
        marginTop: '5%',
      },
      text33: {
        color: Colors.DARK_GRAY,
        fontWeight: '500',
        fontSize: 13,
        marginTop: '1.2%',
      },
})