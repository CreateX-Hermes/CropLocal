import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Divider, IconButton, Avatar } from 'react-native-paper';
import { Colors } from '../../Styles.js';
import NavigationButton from '../../components/NavigationButton/NavigationButton.js';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

function SellerOne() {
  const navigation = useNavigation();
  const { user: userInformation } = useSelector((state) => state.user);
  //const tempProfilePic = "https://lh5.googleusercontent.com/p/AF1QipMmvRrGutt75PKKOTKauHiSyQYAlqp3WjodP5QL=w408-h271-k-no"
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  let [formData, setFormData] = useState({
    name: userInformation.firstName,
    email: userInformation.email,
    userID: userInformation.userID,
  });

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
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
          <Text style={styles.text8}>Confirm Your Profile Details</Text>

          <View style={{ alignItems: 'center', marginTop: '15%' }}>
            <View
              style={{
                zIndex: '1',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'absolute',
              }}
            >
              <View
                style={{
                  display: 'flex',
                  borderColor: Colors.MAIN,
                  borderWidth: '5%',
                  borderRadius: 100,
                  bottom: '24%',
                }}
              >
                <Image source={require('../../assets/tempProfilePic.png')} />
              </View>

              <View style={{ alignSelf: 'center', bottom: '20%', zIndex: 7 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.BLACK,
                    borderRadius: 50,
                    paddingVertical: '4%',
                    alignSelf: 'center',
                    zIndex: 5,
                  }}
                  onPress={() => {
                    handleImagePicker();
                  }}
                >
                  <Text style={styles.text10}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.text11}>Name</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            placeholder=""
            placeholderTextColor={Colors.BLACK}
            editable={false}
          />

          <Text style={styles.text12}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder=""
            placeholderTextColor={Colors.BLACK}
            editable={false}
          />
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
              navigation.navigate('SellerTwo', { ...formData });
            }}
          >
            <Text style={styles.text22}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SellerOne;

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
    marginTop: '40.6%',
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
  },
  text15: {
    width: 24,
    height: 24,
    alignSelf: 'center',
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
