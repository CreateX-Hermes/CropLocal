import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import NavigationButton from '../NavigationButton/NavigationButton';
import { Colors } from '../../Styles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export function StockItem(props) {
  const images = [];

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo', includeBase64: false}, 
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response?.uri };
          console.log(source);
        }
      }
    )
  }

  if (props.images) {
    for (let i = 0; i < props.images.length; i++) {
      images.push(<Image style={styles.image} source={props.images[i]} />);
    }
  }
  
  if (props.isNewStockItem) {
    return (
      <View style={newItemStyles.main}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={newItemStyles.title}>Item Name: </Text>
          <TextInput style={newItemStyles.input}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>$</Text>
            <TextInput style={newItemStyles.input}/>
            <Text>/Unit</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Total Stock: </Text>
            <TextInput style={newItemStyles.input}/>
          </View>
        </View>
        <NavigationButton onPress={openGallery} style={{backgroundColor: Colors.RATING, width: '35%', marginTop: '5%', paddingVertical: '2.5%', alignSelf: 'center'}}>
          <Text>Add Pictures</Text>
        </NavigationButton>
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <View style={styles.pricing}>
        <View>
          <Text style={styles.title}>{`${props.item}:`}</Text>
          <Text style={styles.price}>{`$${props.price} per 1`}</Text>
        </View>
        <View style={styles.quantity}>
          <TextInput style={styles.input} placeholder="0" />
          <Text style={styles.quant}>/Qty</Text>
        </View>
      </View>
      <ScrollView style={styles.images} horizontal>
        {images}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '90%',
    height: '12%',
    position: 'relative',
    left: '3%',
    marginBottom: 0,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 5,
  },
  quantity: {
    width: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '10%',
    marginBottom: 2,
  },
  pricing: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  price: {
    color: '#979797',
  },
  input: {
    width: 42,
    height: 26,
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    color: 'black',
    borderRadius: 100,
  },
  quant: {
    color: '#979797',
  },
  images: {},
  image: {
    width: 179,
    height: 121,
    marginRight: 20,
  },
});

const newItemStyles = StyleSheet.create({
  main: {
    width: '85%',
    height: '12%',
    alignSelf: 'center',
    marginTop: '5%'
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    minWidth: '10%',
    paddingHorizontal: 10,
    height: 26,
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    color: 'black',
    borderRadius: 100,
  },
})
