import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Colors } from '../../Styles.js';
import { EventList } from '../../components/Event/EventList.js';

export function Events() {
  return (
    <View style={styles.main}>
      <EventList />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
});
