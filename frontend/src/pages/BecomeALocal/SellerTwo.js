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
import { useSelector } from 'react-redux';

function SellerTwo({ route }) {
  const navigation = useNavigation();
  const { user: userInformation } = useSelector((state) => state.user);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let [itemCount, setItemCount] = useState(0);
  let [formData, setFormData] = useState({
    ...route.params,
    standName: '',
    description: '',
    numOfItems: 0,
  });

  //refactor to remove the need of extra state
  const incrementItemCount = (num) => {
    setItemCount((prevCount) => {
      const newCount = prevCount + num;

      if (newCount > 25) {
        return 25;
      } else if (newCount < 0) {
        return 0;
      } else {
        setFormData({ ...formData, numOfItems: newCount });
        return newCount;
      }
    });
  };

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
          <Text style={styles.text8}>Create Your Stand</Text>

          <Text style={styles.text11}>Stand Name</Text>
          <TextInput
            style={styles.input}
            value={formData.standName}
            onChangeText={(text) => setFormData({ ...formData, standName: text })}
            placeholder={userInformation.firstName + "'s Stand"}
            placeholderTextColor={Colors.DARK_GRAY}
          />

          <Text style={styles.text13}>Stand Description</Text>
          <TextInput
            style={styles.inputtwo}
            value={formData.description}
            onChangeText={(text) => setFormData({ ...formData, description: text })}
            placeholder={'Hi, this is ' + userInformation.firstName + "'s Stand"}
            placeholderTextColor={Colors.DARK_GRAY}
            multiline
          />

          <Text style={styles.text11}>Number of Items</Text>

          <Text style={styles.text6}>(Optional)</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => incrementItemCount(-1)}
              style={{
                backgroundColor: '#F5F5F5',
                borderRadius: 100,
                marginTop: '7%',
                justifyContent: 'center',
                paddingVertical: '2%',
                paddingHorizontal: '2%',
                marginLeft: '8%',
              }}
            >
              <Image source={require('../../assets/minus.png')} style={styles.text14} />
            </TouchableOpacity>

            <Text style={styles.text20}>{itemCount}</Text>

            <TouchableOpacity
              onPress={() => incrementItemCount(1)}
              style={{
                backgroundColor: '#F5F5F5',
                borderRadius: 100,
                marginTop: '7%',
                justifyContent: 'center',
                paddingVertical: '2.8%',
                paddingHorizontal: '2.8%',
              }}
            >
              <Image source={require('../../assets/add.png')} style={styles.text14} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: Colors.WHITE,
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
            onPress={() => {
              navigation.navigate('SellerThree', { ...formData });
            }}
          >
            <Text style={styles.text22}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SellerTwo;

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
    fontWeight: '600',
    fontSize: 18,
    paddingLeft: '9%',
    marginTop: '8.6%',
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
    marginTop: '8.6%',
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
});
