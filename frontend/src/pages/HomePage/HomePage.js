import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Modal, TextInput} from 'react-native';
import { Text, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Messages from '../Messages/Messages';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import StandList from '../../components/Stand/StandList';
import { Colors } from '../../Styles';

const filterReducer = (state, action) => {
    if (action.type === 'update_show_saved') {
        return {
            ...state,
            showFav: !state.showFav
        }
    }
    else if (action.type === 'reduce_max_radius') {
        let newRadius = state.maxRadius - 0.1
        newRadius = newRadius.toFixed(1)
        return {
            ...state,
            maxRadius: newRadius
        }
    }
    else if (action.type === 'increase_max_radius') {
        let newRadius = parseFloat(state.maxRadius + 9)
        newRadius = newRadius.toFixed(1)
        return {
            ...state,
            maxRadius: newRadius
        }
    }
    else {
        return {
            ...state
        }
    }
}

const HomePage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    const [isFilterModalVisible, setFilterModalVisible] = useState(false);

    const [isExtraSearchModalVisible, setExtraSearchModalVisible] = useState(false);

    const [filterState, dispatch] = React.useReducer(filterReducer, 
        { 
            showFav: false,
            maxRadius: 0.2,
        })

    

    const handleToggleShowSaved = () => {
        dispatch({ type: 'update_show_saved' })
    }

    const toggleFilterModal = () => {
        setFilterModalVisible(!isFilterModalVisible);
    };

    const toggleExtraSearchModal = () => {
        setExtraSearchModalVisible(!isExtraSearchModalVisible);
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1, alignItems: 'center' }}>

            <View style={{ backgroundColor: '#FFFFFF', zIndex: '0', alignItems: 'center', flex: 3 }}>

                {/*/ TOP BAR IN THE HOME PAGE */}
                <View style={{ zIndex: '1', flexDirection: 'row', display: 'flex', alignItems: 'center', marginTop: '3%' }}>
                    <NavigationButton onPress={handleToggleShowSaved} style={{height: 50, width: 50, flex: 0, marginLeft: 0, marginRight: 20}}>
                        { filterState.showFav ? 
                            <Image source={require("../../assets/SaveIconFilled.png")} style={{width: '70%', resizeMode: 'contain', tintColor: Colors.RATING}}/> 
                            :
                            <Image source={require("../../assets/SaveIconUnfilled.png")} style={{width: '70%', resizeMode: 'contain'}}/>
                        }
                    </NavigationButton>
                    <NavigationButton onPress={toggleFilterModal} style={{flex: 0, paddingHorizontal: '8%', paddingVertical: '6%'}}>
                        <Text style={styles.text1}>Atlanta, Georgia</Text>
                    </NavigationButton>
                    <NavigationButton onPress={()=> navigation.navigate(Messages)} style={{height: 50, width: 50, flex: 0, marginLeft: 20, marginRight: 0}}>
                        <Image source={require("../../assets/Search-Filter-Icon.png")} style={{width: '70%', resizeMode: 'contain'}}/>
                    </NavigationButton>
                </View>

                {/*/ Scrollable Section Containing All the Stands*/}
                
                <StandList filter={filterState}/>

                {/*/ FilterModal */}
                <Modal visible={isFilterModalVisible} animationType="fade">
                    <SafeAreaView  backgroundColor='#FFFFFF'>
                        <View backgroundColor='#FFFFFF' height='100%'>
                            <TouchableOpacity 
                                    onPress={toggleFilterModal}
                                    style={{ 
                                    backgroundColor: '#F5F5F5',
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    height: '6.6%',
                                    width: '13%',
                                    marginLeft: '6%',
                                    marginTop: '1.6%'
                                    }}>
                                        <Image source={require('../../assets/closeCancel.png')} style={ styles.text14 }/>
                            </TouchableOpacity>
                            <Text style={styles.text17}>Where are you searching?</Text>
                            <TextInput style={styles.input} placeholder="Atlanta, GA" onPressIn={toggleExtraSearchModal} />
                            <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '4%', paddingTop: '0.3%' }}/>
                            
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text23}>Max Distance</Text>
                                <TouchableOpacity 
                                onPress={() => dispatch({type: 'reduce_max_radius'})}
                                style={{ 
                                backgroundColor: '#F5F5F5',
                                borderRadius: 100,
                                marginTop: '7%',
                                justifyContent: 'center',
                                paddingVertical:'2.8%',
                                paddingHorizontal: '2.8%',
                                marginLeft: '8%'
                                }}>
                                    <Image source={require('../../assets/minus.png')} style={ styles.text14 }/>
                                </TouchableOpacity>
                                <Text style={styles.text20}>{filterState.maxRadius}</Text>
                                <TouchableOpacity 
                                onPress={() => dispatch({type: 'increase_max_radius'})}
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
                        </View>
                    </SafeAreaView>

                    {/*/ ExtraSearchModal */}
                    <Modal visible={isExtraSearchModalVisible} animationType="fade">
                        <SafeAreaView  backgroundColor='#FFFFFF'>
                            <View backgroundColor='#FFFFFF' height='100%'>
                            <TouchableOpacity 
                                    onPress={toggleExtraSearchModal}
                                    style={{ 
                                    backgroundColor: '#F5F5F5',
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    height: '6.6%',
                                    width: '13%',
                                    marginLeft: '6%',
                                    marginTop: '1.6%'
                                    }}>
                                        <Image source={require('../../assets/closeCancel.png')} style={ styles.text14 }/>
                                    </TouchableOpacity>

                                <Text style={styles.text17}>Where are you searching?</Text>
                                <TextInput style={styles.input} placeholder="Atlanta, GA" onEndEditing={toggleExtraSearchModal}/>
    
                            </View>
                        </SafeAreaView>
                    </Modal>
                </Modal>
            </View>
        </SafeAreaView>
    );
}

export default HomePage

const styles = StyleSheet.create({
    text1: {
        fontWeight: '700',
        fontSize: '17em',
        position: 'relative',
    },
    text10: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '16em',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text14: {
        width: 20,
        height: 20,
        alignSelf: 'center',
    },
    text17: {
        fontWeight: '600',
        fontSize: '25em',
        paddingTop: '4%',
        paddingLeft: '7%',
        width: '100%'
    },
    text20: {
        fontWeight: '500',
        fontSize: '28em',
        paddingTop: '6%',
        paddingHorizontal: '4%',
        alignSelf: 'center',
        color: '#288FBB'
    },
    text23: {
        fontWeight: '600',
        fontSize: '25em',
        paddingTop: '7%',
        paddingLeft: '7%',
        alignSelf: 'center'
    }, 
    input: {
        backgroundColor: '#F5F5F5',
        padding: '5%',
        marginVertical: '6%',
        borderRadius: '100%',
        height: '10%',
        fontSize: '16.5em',
        fontWeight: '400',
        paddingLeft: '7%',
        width: '88%',
        height: '6.8%',
        alignSelf: 'center'
    },
});
