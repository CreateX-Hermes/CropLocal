import { StyleSheet, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { IconButton, Text, Avatar, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Messages from '../Messages/Messages';
import FindSellers from '../FindSellers/FindSellers';
import BecomeASeller from '../BecomeALocal/BecomeALocal';
import EditProfile from '../EditProfile/EditProfile';
import MyWallet from '../MyWallet/MyWallet';
import Help from '../Help/Help';
import { Colors } from '../../Styles.js';
import BecomeALocal from '../BecomeALocal/BecomeALocal';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/userActions';

// <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '3.6%', paddingTop: '0.3%' }}/>

function AccountPage() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user: userInformation } = useSelector((state) => state.user);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEditProfilePress = () => {
    // Close Modal
    setModalVisible(!isModalVisible);
    // Navigate to Edit Profile Page
    navigation.navigate(EditProfile);
  };

  const handleBecomeASellerPress = () => {
    // Close Modal
    setModalVisible(!isModalVisible);
    // Navigate to Become A Local Page
    navigation.navigate(BecomeASeller);
  };
  const handleMyWalletPress = () => {
    // Close Modal
    setModalVisible(!isModalVisible);
    // Navigate to My Wallet Page
    navigation.navigate(MyWallet);
  };
  const handleHelpPress = () => {
    // Close Modal
    setModalVisible(!isModalVisible);
    // Navigate to Help Page
    navigation.navigate(Help);
  };
  const handleSignOutPress = () => {
    setModalVisible(!isModalVisible);
    dispatch(logoutUserAction());
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, flex: 1 }}>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          width: '100%',
          height: '100%',
          zIndex: '0',
          flex: 3,
        }}
      >
        {/* / Actual Account Page Content */}
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              zIndex: '1',
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <IconButton
              onPress={toggleModal}
              icon={require('../../assets/cog.png')}
              iconColor="#000000"
              backgroundColor="#F5F5F5"
              size={34}
            />
            <View
              style={{
                display: 'flex',
                marginHorizontal: '5.5%',
                borderColor: Colors.MAIN,
                borderWidth: '5%',
                borderRadius: 100,
                marginTop: '5%',
              }}
            >
              <Avatar.Image
                backgroundColor="#FFFFFF"
                size={176}
                source={require('../../assets/tempProfilePic.png')}
                style={{ zIndex: '1' }}
              />
            </View>
            <IconButton
              onPress={() => navigation.navigate(Messages)}
              icon={require('../../assets/plan.png')}
              iconColor="#000000"
              backgroundColor="#F5F5F5"
              size={34}
            />
          </View>
        </View>

        <View style={{ zIndex: '1', flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginLeft: '7%' }}>
            <Text style={styles.text1}>{userInformation.firstName}</Text>
            <Text style={styles.text2}>Shopper</Text>
          </View>
          <View style={{ flexDirection: 'column', marginLeft: '14%' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate(FindSellers)}
              style={{ paddingTop: '16%' }}
            >
              <View
                style={{
                  backgroundColor: Colors.BLACK,
                  borderRadius: 20,
                  alignItems: 'center',
                  paddingVertical: '8.6%',
                  paddingHorizontal: '3.6%',
                }}
              >
                <Text style={styles.text5}>Find Sellers</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.text7}>
          Hello, I am Greg! I am originally from Cleveland, Ohio but now I live in Boston. Meeting
          to new people and seeing new places is some of my favorite memories growing up, and I want
          to continue to do so.
        </Text>

        {userInformation.isSeller ? (
          <>
            <Divider
              style={{
                width: '86%',
                alignSelf: 'center',
                marginTop: '5%',
                paddingTop: '0.3%',
              }}
            />

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text8}>Become a </Text>
              <Text style={styles.text28}>Seller</Text>
            </View>

            <Text style={styles.text7}>
              Start earning now and show other travelers around the wonderful place you call home.
              Become a Local guide below and start working for yourself...
            </Text>

            <View style={{ paddingTop: '6%', alignSelf: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(BecomeALocal)}
                style={{
                  backgroundColor: Colors.MAIN,
                  borderRadius: 50,
                  paddingVertical: '3.2%',
                }}
              >
                <Text style={styles.text9}>Start Now</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <></>
        )}

        <Divider
          style={{
            width: '86%',
            alignSelf: 'center',
            marginTop: '7%',
            paddingTop: '0.3%',
          }}
        />

        {/* / Settings Modal */}
        <Modal visible={isModalVisible} animationType="fade">
          <SafeAreaView backgroundColor={Colors.WHITE}>
            <View backgroundColor={Colors.WHITE} height="100%">
              <TouchableOpacity
                onPress={toggleModal}
                style={{
                  backgroundColor: '#F5F5F5',
                  borderRadius: 100,
                  justifyContent: 'center',
                  height: '6.6%',
                  width: '13%',
                  marginLeft: '6%',
                  marginTop: '1.6%',
                }}
              >
                <Image source={require('../../assets/closeCancel.png')} style={styles.text14} />
              </TouchableOpacity>

              <View style={{ alignSelf: 'center', width: '86%', paddingTop: '4%' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.BUTTON_BACKGROUND,
                    alignItems: 'center',
                    paddingVertical: '3.6%',
                    borderRadius: 50,
                    flexDirection: 'row',
                    paddingHorizontal: '9%',
                  }}
                  onPress={handleEditProfilePress}
                >
                  <Image source={require('../../assets/profileUser.png')} style={styles.text15} />
                  <Text style={styles.text19}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.BUTTON_BACKGROUND,
                    alignItems: 'center',
                    paddingVertical: '3.6%',
                    borderRadius: 50,
                    flexDirection: 'row',
                    paddingHorizontal: '9%',
                  }}
                  onPress={handleBecomeASellerPress}
                >
                  <Image source={require('../../assets/write.png')} style={styles.text15} />
                  <Text style={styles.text19}>Become A Seller</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.BUTTON_BACKGROUND,
                    alignItems: 'center',
                    paddingVertical: '3.6%',
                    borderRadius: 50,
                    flexDirection: 'row',
                    paddingHorizontal: '9%',
                  }}
                  onPress={handleHelpPress}
                >
                  <Image source={require('../../assets/communication.png')} style={styles.text15} />
                  <Text style={styles.text19}>Help</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={handleSignOutPress}
                style={{
                  backgroundColor: Colors.RATING,
                  width: '30%',
                  borderRadius: 50,
                  paddingVertical: '3.4%',
                  marginTop: '2%',
                  alignSelf: 'center',
                  top: '50%',
                }}
              >
                <Text style={styles.text10}>Sign out</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default AccountPage;

const styles = StyleSheet.create({
  text1: {
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 26,
    paddingTop: '4%',
  },
  text2: {
    color: Colors.DARK_GRAY,
    fontWeight: '400',
    fontSize: 17,
    paddingTop: '4%',
  },
  text3: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '3%',
  },
  text4: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    textDecorationLine: 'underline',
    paddingTop: '4.8%',
  },
  text5: {
    display: 'flex',
    color: Colors.WHITE,
    fontWeight: '600',
    fontSize: 13,
  },
  text6: {
    display: 'flex',
    color: '#288FBB',
    fontWeight: '400',
    fontSize: 15,
    alignSelf: 'flex-end',
    paddingTop: '10%',
  },
  text7: {
    display: 'flex',
    color: Colors.BLACK,
    fontWeight: '400',
    fontSize: 14,
    width: '86%',
    marginLeft: '7%',
    paddingTop: '5%',
  },
  text8: {
    display: 'flex',
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 24,
    marginLeft: '7%',
    paddingTop: '5%',
  },
  text28: {
    display: 'flex',
    color: Colors.MAIN,
    fontWeight: '700',
    fontSize: 24,
    width: '86%',
    paddingTop: '5%',
    marginLeft: '1%',
  },
  text9: {
    display: 'flex',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: '9%',
  },
  text10: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text11: {
    fontWeight: '700',
    fontSize: 20,
    position: 'relative',
    alignSelf: 'center',
  },
  text14: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  text19: {
    display: 'flex',
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: '8%',
  },
  text15: {
    width: 38,
    height: 38,
  },
  text16: {
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    padding: '4%',
  },
});
