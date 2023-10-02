import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export const StockItem = (props) => {


    let images = [];

    for (let i = 0; i < props.images.length; i++) {
        images.push(
            <Image
                style={styles.image}
                source={props.images[i]}
            />
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
                    <TextInput style={styles.input} placeholder="0"/>
                    <Text style={styles.quant}>/Qty</Text>
                </View>
            </View>
            <ScrollView style={styles.images} horizontal={true}>
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
        marginBottom: 0
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 5
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
        marginBottom: 10
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
        borderRadius: '100%'
    },
    quant: {
        color: '#979797'
    },
    images: {
        
    },
    image: {
        width: 179,
        height: 121,
        marginRight: 20
    }
});