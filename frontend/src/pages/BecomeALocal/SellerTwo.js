import { StyleSheet, View, SafeAreaView, TouchableOpacity, Modal, Image, Text, TextInput, ScrollView, } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Styles.js'
import NavigationButton from '../../components/NavigationButton/NavigationButton'
import { Divider, IconButton, Avatar} from 'react-native-paper';



const SellerTwo = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
    }, []);

    var [travelersCount, setTravelersCount] = useState(0);

    const subtractTravelersCount = () => {
      if (travelersCount > 0) {
          travelersCount = travelersCount - 1;
      }
     
      setTravelersCount(travelersCount);
  };

  const addTravelersCount = () => {
      if (travelersCount < 25) {
          travelersCount = travelersCount + 1;
      }
      setTravelersCount(travelersCount);
  };

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
                <Text style={styles.text8}>Create Your Stand</Text>
                    
    <Text style={styles.text11}>Title</Text>
    <TextInput style={styles.input} placeholder="jSmith23@gmail.com" placeholderTextColor={Colors.BLACK} />

    <Text style={styles.text13}>Description</Text>
    <TextInput style={styles.inputtwo} placeholder="Hello, I am Greg! I am originally from Cleveland, Ohio but now I live 
    in Boston. Meeting to new people and seeing new places  is some of my favorite memories growing up, and I want to 
    continue to do so. I think sharing our cultures is one of best ways to grow as a person." placeholderTextColor='#000000'
    multiline={true} />

    <Text style={styles.text11}>Number of Items</Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity 
        onPress={subtractTravelersCount}
        style={{ 
        backgroundColor: '#F5F5F5',
        borderRadius: 100,
        marginTop: '7%',
        justifyContent: 'center',
        paddingVertical:'2%',
        paddingHorizontal: '2%',
        marginLeft: '8%'
        }}>
            <Image source={require('../../assets/minus.png')} style={ styles.text14 }/>
        </TouchableOpacity>

        <Text style={styles.text20}>{travelersCount}</Text>

        <TouchableOpacity 
        onPress={addTravelersCount}
        style={{ 
        backgroundColor: '#F5F5F5',
        borderRadius: 100,
        marginTop: '7%',
        justifyContent: 'center',
        paddingVertical:'2.8%',
        paddingHorizontal: '2.8%',
        }}>
        <Image source={require('../../assets/add.png')} style={ styles.text14 }/>
      </TouchableOpacity>
    </View>
        
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
              }} >
              <Text style={styles.text22}>Next</Text>
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
  )
}

export default SellerTwo

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
        marginTop: '8.6%',
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
        paddingLeft: '9%',
        marginTop: '8.6%'
      },  
      text15: {
        width: 24,
        height: 24,
        alignSelf: 'center',
      },
      text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
      },
      text20: {
        fontWeight: '500',
        fontSize: '24em',
        paddingTop: '6%',
        paddingHorizontal: '4%',
        alignSelf: 'center',
        color: Colors.MAIN
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
        marginHorizontal: '7%',
        paddingVertical: '4%'
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