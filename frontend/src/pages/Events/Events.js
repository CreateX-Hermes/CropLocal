import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import NavigationButton from '../../components/NavigationButton/NavigationButton.js';
import { Colors } from '../../Styles.js';
import { EventList } from '../../components/Event/EventList.js';

export function Events() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <NavigationButton style={styles.button}>
        <Image
            source={require('../../assets/search.png')}
            style={{ width: '70%', resizeMode: 'contain', tintColor: 'black' }}
        />
        </NavigationButton>
        <NavigationButton
            style={{ flex: 0, paddingHorizontal: '8%', paddingVertical: '6%' }}
          >
            <Text style={styles.text1}>Atlanta, Georgia</Text>
          </NavigationButton>
          <NavigationButton
            style={{
              height: 50,
              width: 50,
              flex: 0,
              marginLeft: 20,
              marginRight: 25,
            }}
          >
            <Image
              source={require('../../assets/Search-Filter-Icon.png')}
              style={{ width: '70%', resizeMode: 'contain' }}
            />
          </NavigationButton>
      </View>
      <Text style={styles.title}>Events <Text style={styles.green}>Near You</Text></Text>
      <EventList />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center'
  },
  header: {
      zIndex: '1',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      marginTop: '15%',
      justifyContent: 'space-around'
  },
  button: {
    height: 50,
    width: 50,
    flex: 0,
    marginLeft: 25,
    marginRight: 20,
  },
  text1: {
    fontWeight: '700',
    fontSize: 17,
    position: 'relative',
  },
  title: {
    fontSize: 35,
    fontWeight: 500,
    marginTop: '5%'
  },
  green: {
    color: Colors.MAIN
  }
});
