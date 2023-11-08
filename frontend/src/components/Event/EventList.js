import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Colors } from '../../Styles.js';
import { Event } from './Event.js';

export function EventList() {
  const dummyData = [
    {
      name: 'Christkindl Market',
      location: 'Atlanta, GA',
      image: require('./christmas.png'),
      startDate: 'Tue, June 21 ',
      endDate: 'Sun, June 26',
      startTime: '6:00',
      endTime: '8:00 pm',
      stands: 30,
    },
    {
      name: 'Ponce City Market',
      location: 'Atlanta, GA',
      image: require('./ponce.png'),
      startDate: 'Tue, June 21 ',
      endDate: 'Sun, June 26',
      startTime: '6:00',
      endTime: '8:00 pm',
      stands: 29,
    },
  ];

  const stands = [];

  for (let i = 0; i < dummyData.length; i++) {
    stands.push(<Event key={i} data={dummyData[i]} />);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>{stands}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    height: '100%',
  },
});
