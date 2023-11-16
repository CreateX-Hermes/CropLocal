import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Colors } from '../../Styles';
import * as ImagePicker from 'expo-image-picker';
import { Divider } from 'react-native-paper';

export function StockItem(props) {
  const images = [];

  if (props.images) {
    for (let i = 0; i < props.images.length; i++) {
      images.push(<Image style={styles.image} source={props.images[i]} />);
    }
  }

  const [stockImages, setStockImages] = React.useState([]);

  const removeItem = (uri) => {
    setStockImages((prev) => {
      const newArr = [
        ...prev.filter((val) => {
          if (val.id === uri) {
            return false;
          }
          return true;
        }),
      ];
      return newArr;
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });
    if (!result.canceled) {
      setStockImages((prev) => {
        return [
          ...prev,
          {
            id: result.assets[0].uri,
            view: (
              <View id={result.assets[0].uri}>
                <Image source={{ uri: result.assets[0].uri }} style={newItemStyles.image} />
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F5F5F5',
                    paddingHorizontal: 5,
                    width: '20%',
                    borderRadius: 100,
                    position: 'absolute',
                    left: 5,
                    top: 5,
                  }}
                  onPress={() => removeItem(result.assets[0].uri)}
                >
                  <Image
                    source={require('../../assets/minus.png')}
                    style={{ width: 20, height: 20, alignSelf: 'center' }}
                  />
                </TouchableOpacity>
              </View>
            ),
          },
        ];
      });
    }
  };

  if (props.isNewStockItem) {
    return (
      <View style={newItemStyles.main}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={newItemStyles.title}>Item Name: </Text>
          <TextInput style={newItemStyles.input} />
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>$</Text>
            <TextInput style={newItemStyles.input} />
            <Text>/Unit</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Total Stock: </Text>
            <TextInput style={newItemStyles.input} />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.RATING,
            width: '35%',
            marginTop: '5%',
            paddingVertical: '3%',
            alignSelf: 'center',
            borderRadius: 20,
          }}
          onPress={pickImage}
        >
          <Text style={{ alignSelf: 'center' }}>Add Pictures</Text>
        </TouchableOpacity>
        <ScrollView style={newItemStyles.images} horizontal>
          {stockImages.map((curr) => curr.view)}
        </ScrollView>
        <TextInput
          style={newItemStyles.description}
          multiline
          placeholder={'Description'}
          textAlign={'left'}
        />
        <Divider
          style={{
            width: '100%',
            alignSelf: 'center',
            marginTop: '5%',
            paddingTop: '0.3%',
          }}
        />
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
    alignSelf: 'center',
    marginTop: 20,
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
  images: {
    marginVertical: '5%',
  },
  image: {
    width: 179,
    height: 121,
    marginRight: 10,
    borderRadius: 10,
  },
  description: {
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    minHeight: 50,
  },
});
